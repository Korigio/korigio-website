"use client";

import { useLayoutEffect, useState } from "react";
import {
  Building2,
  ClipboardList,
  Home,
  MonitorSmartphone,
  Moon,
  PanelLeftClose,
  Settings,
  Sun,
  Users,
  UsersRound,
  Wrench,
} from "lucide-react";
import type { Locale } from "@/lib/constants";
import type { Dictionary } from "@/lib/i18n";

type ThemeChoice = "light" | "dark";

type Props = {
  dict: Dictionary;
  locale: Locale;
};

const THEME_KEY = "korigio.preview-theme";

const STATUSES = [
  { key: "received", count: 2, color: "var(--preview-status-received)" },
  { key: "diagnosis", count: 2, color: "var(--preview-status-diagnosis)" },
  { key: "waitingCustomer", count: 0, color: "var(--preview-status-waiting-customer)" },
  { key: "waitingPart", count: 0, color: "var(--preview-status-waiting-part)" },
  { key: "inRepair", count: 0, color: "var(--preview-status-in-repair)" },
  { key: "ready", count: 1, color: "var(--preview-status-ready)" },
  { key: "awaitingPickup", count: 0, color: "var(--preview-status-awaiting-pickup)" },
] as const;

const INTAKE_BARS = [
  { received: 0, collected: 0 },
  { received: 0, collected: 0 },
  { received: 0, collected: 0 },
  { received: 1, collected: 0 },
  { received: 3, collected: 1 },
  { received: 2, collected: 1 },
  { received: 0, collected: 0 },
] as const;

const REVENUE = [0, 0, 0, 0, 40, 119, 119];
const KPI = { today: 0, week: 119, open: 119 };

function systemPrefersDark() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function formatEuro(value: number, locale: Locale) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "EUR",
  }).format(value);
}

function weekdayLabels(locale: Locale) {
  const start = new Date(Date.UTC(2026, 7, 26));
  return Array.from({ length: 7 }, (_, index) => {
    const day = new Date(start);
    day.setUTCDate(start.getUTCDate() + index);
    return new Intl.DateTimeFormat(locale, {
      weekday: "short",
      timeZone: "UTC",
    }).format(day);
  });
}

function readStoredTheme(): ThemeChoice | null {
  try {
    const value = localStorage.getItem(THEME_KEY);
    return value === "light" || value === "dark" ? value : null;
  } catch {
    return null;
  }
}

export function AppPreview({ dict, locale }: Props) {
  const p = dict.preview;
  const [theme, setTheme] = useState<ThemeChoice | null>(null);
  const [resolvedDark, setResolvedDark] = useState(false);
  const days = weekdayLabels(locale);

  useLayoutEffect(() => {
    const stored = readStoredTheme();
    setTheme(stored);
    setResolvedDark(stored ? stored === "dark" : systemPrefersDark());

    if (stored) {
      return;
    }

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => setResolvedDark(media.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  function toggleTheme() {
    const next: ThemeChoice = resolvedDark ? "light" : "dark";
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      // Ignore quota / private-mode failures.
    }
    setTheme(next);
    setResolvedDark(next === "dark");
  }

  const nav = [
    { key: "home" as const, icon: Home, active: true },
    { key: "customers" as const, icon: Users },
    { key: "devices" as const, icon: MonitorSmartphone },
    { key: "repairs" as const, icon: Wrench },
    { key: "diagnosis" as const, icon: ClipboardList },
    { key: "companies" as const, icon: Building2 },
    { key: "team" as const, icon: UsersRound },
    { key: "settings" as const, icon: Settings },
  ];

  return (
    <div className="app-preview-shell glow-ring overflow-hidden rounded-[14px] border border-white/10">
      <div
        className="app-preview flex flex-col overflow-hidden bg-[var(--preview-background)]"
        data-theme={theme ?? undefined}
      >
        <div className="relative flex h-11 shrink-0 items-center border-b border-[var(--preview-border)] bg-[var(--preview-chrome)] px-3">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-[var(--preview-dot-red)]" />
            <span className="h-3 w-3 rounded-full bg-[var(--preview-dot-yellow)]" />
            <span className="h-3 w-3 rounded-full bg-[var(--preview-dot-green)]" />
          </div>
          <p className="pointer-events-none absolute inset-x-0 text-center text-[13px] font-medium text-[var(--preview-chrome-text)]">
            {p.title}
          </p>
          <button
            type="button"
            onClick={toggleTheme}
            className="relative z-10 ml-auto inline-flex size-8 items-center justify-center rounded-md border border-[var(--preview-border)] bg-[var(--preview-surface)] text-[var(--preview-foreground)] hover:bg-[var(--preview-background)]"
            aria-label={resolvedDark ? p.themeToLight : p.themeToDark}
            aria-pressed={resolvedDark}
          >
            <Sun className="preview-icon-sun size-4" aria-hidden />
            <Moon className="preview-icon-moon size-4" aria-hidden />
          </button>
        </div>

        <div className="flex min-h-0 flex-1">
          <aside className="flex w-14 shrink-0 flex-col border-r border-[var(--preview-border)] bg-[var(--preview-sidebar)] p-2">
            <div className="flex justify-center">
              <span
                className="inline-flex size-8 items-center justify-center rounded-md border border-[var(--preview-border)] bg-[var(--preview-surface)] text-[var(--preview-foreground)]"
                aria-label={p.collapse}
              >
                <PanelLeftClose className="size-4" aria-hidden />
              </span>
            </div>
            <nav className="mt-4 flex flex-1 flex-col gap-1" aria-hidden>
              {nav.map((item, index) => {
                const Icon = item.icon;
                return (
                  <span key={item.key} className="contents">
                    {index === 5 ? (
                      <span className="mx-1 my-1 block h-px bg-[var(--preview-border)]" />
                    ) : null}
                    <span
                      title={p[item.key]}
                      className={`inline-flex size-9 items-center justify-center self-center rounded-lg ${
                        item.active
                          ? "bg-[var(--preview-background)] font-medium text-[var(--preview-foreground)]"
                          : "text-[var(--preview-foreground)]"
                      } ${item.key === "settings" ? "mt-auto" : ""}`}
                    >
                      <Icon className="size-4" />
                    </span>
                  </span>
                );
              })}
            </nav>
          </aside>

          <div className="flex min-w-0 flex-1 flex-col bg-[var(--preview-background)]">
            <header className="flex shrink-0 items-center justify-end border-b border-[var(--preview-border)] bg-[var(--preview-surface)] px-4 py-2">
              <span className="inline-flex rounded-md bg-[var(--preview-primary)] px-3 py-1.5 text-sm font-medium text-[var(--preview-primary-foreground)]">
                {p.intake}
              </span>
            </header>

            <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-hidden p-5" aria-hidden>
              <div className="flex gap-2">
                {STATUSES.map((status) => (
                  <div
                    key={status.key}
                    className="min-w-0 flex-1 rounded-lg border border-[var(--preview-border)] border-l-4 bg-[var(--preview-surface)] px-2.5 py-1.5"
                    style={{ borderLeftColor: status.color }}
                  >
                    <p className="text-lg font-semibold tabular-nums leading-none">
                      {status.count}
                    </p>
                    <p className="mt-1 truncate text-[11px] text-[var(--preview-muted)]">
                      {p.statuses[status.key]}
                    </p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: p.today, value: KPI.today },
                  { label: p.week, value: KPI.week },
                  { label: p.open, value: KPI.open },
                ].map((kpi) => (
                  <div
                    key={kpi.label}
                    className="rounded-lg border border-[var(--preview-border)] bg-[var(--preview-surface)] px-4 py-3"
                  >
                    <p className="text-2xl font-semibold tabular-nums leading-none">
                      {formatEuro(kpi.value, locale)}
                    </p>
                    <p className="mt-1.5 text-xs text-[var(--preview-muted)]">{kpi.label}</p>
                  </div>
                ))}
              </div>

              <div className="grid min-h-0 grid-cols-2 gap-4">
                <div className="rounded-lg border border-[var(--preview-border)] bg-[var(--preview-surface)] p-4">
                  <p className="text-sm font-semibold">{p.status}</p>
                  <div className="flex h-[168px] items-center justify-center">
                    <StatusDonut />
                  </div>
                </div>
                <div className="rounded-lg border border-[var(--preview-border)] bg-[var(--preview-surface)] p-4">
                  <p className="text-sm font-semibold">{p.thisWeek}</p>
                  <IntakeBars labels={days} />
                </div>
              </div>

              <div className="rounded-lg border border-[var(--preview-border)] bg-[var(--preview-surface)] p-4">
                <p className="text-sm font-semibold">{p.collected}</p>
                <RevenueSparkline />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusDonut() {
  const radius = 42;
  const stroke = 18;
  const circumference = 2 * Math.PI * radius;
  const slices = [
    { fraction: 0.4, color: "var(--preview-status-received)" },
    { fraction: 0.4, color: "var(--preview-status-diagnosis)" },
    { fraction: 0.2, color: "var(--preview-status-ready)" },
  ];
  let offset = 0;

  return (
    <svg viewBox="0 0 120 120" className="size-[168px]" aria-hidden>
      {slices.map((slice) => {
        const length = circumference * slice.fraction;
        const circle = (
          <circle
            key={slice.color}
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke={slice.color}
            strokeWidth={stroke}
            strokeDasharray={`${length} ${circumference - length}`}
            strokeDashoffset={-offset}
            transform="rotate(-90 60 60)"
          />
        );
        offset += length;
        return circle;
      })}
    </svg>
  );
}

function IntakeBars({ labels }: { labels: string[] }) {
  const max = 3;

  return (
    <div className="mt-3 flex h-[168px] gap-2">
      <div className="flex flex-col justify-between py-1 text-[10px] text-[var(--preview-muted)]">
        <span>3</span>
        <span>2</span>
        <span>1</span>
        <span>0</span>
      </div>
      <div className="relative min-w-0 flex-1">
        <div className="pointer-events-none absolute inset-x-0 top-1 bottom-5 flex flex-col justify-between">
          {Array.from({ length: 4 }, (_, index) => (
            <div key={index} className="border-t border-[var(--preview-border)]" />
          ))}
        </div>
        <div className="absolute inset-x-0 top-1 bottom-5 flex items-end justify-between gap-1 px-1">
          {INTAKE_BARS.map((day, index) => (
            <div key={labels[index]} className="flex h-full flex-1 items-end justify-center gap-0.5">
              <span
                className="w-[42%] rounded-t-sm bg-[var(--preview-primary)]"
                style={{ height: `${(day.received / max) * 100}%` }}
              />
              <span
                className="w-[42%] rounded-t-sm bg-[var(--preview-status-ready)]"
                style={{ height: `${(day.collected / max) * 100}%` }}
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-x-0 bottom-0 flex justify-between px-1 text-[10px] text-[var(--preview-muted)]">
          {labels.map((label) => (
            <span key={label} className="flex-1 truncate text-center">
              {label.replace(/\.$/, "")}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function RevenueSparkline() {
  const width = 820;
  const height = 88;
  const max = 120;
  const step = width / (REVENUE.length - 1);
  const points = REVENUE.map((value, index) => {
    const x = index * step;
    const y = height - (value / max) * (height - 8) - 4;
    return `${x},${y}`;
  }).join(" ");
  const area = `0,${height} ${points} ${width},${height}`;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="mt-3 h-16 w-full" aria-hidden>
      <polyline fill="var(--preview-primary)" fillOpacity="0.12" points={area} />
      <polyline
        fill="none"
        stroke="var(--preview-primary)"
        strokeWidth="2.5"
        strokeLinejoin="round"
        strokeLinecap="round"
        points={points}
      />
    </svg>
  );
}
