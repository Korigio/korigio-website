import type { Dictionary } from "@/lib/i18n";

type Props = {
  dict: Dictionary;
};

const navKeys = [
  "home",
  "customers",
  "devices",
  "repairs",
  "diagnosis",
  "team",
  "settings",
] as const;

export function AppPreview({ dict }: Props) {
  const p = dict.preview;
  return (
    <div className="glow-ring overflow-hidden rounded-[28px] border border-white/10 bg-[#0a0a0a]">
      <div className="flex items-center gap-2 border-b border-white/8 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="ml-3 text-xs text-zinc-500">{p.title}</span>
      </div>
      <div className="grid min-h-[340px] grid-cols-[148px_1fr] sm:grid-cols-[176px_1fr]">
        <aside className="border-r border-white/8 p-3">
          <p className="mb-3 px-2 text-[11px] font-medium tracking-tight text-white">
            korigio
          </p>
          <ul className="space-y-1">
            {navKeys.map((key, index) => (
              <li
                key={key}
                className={`rounded-xl px-2.5 py-1.5 text-[12px] ${
                  index === 0 ? "bg-white/10 text-white" : "text-zinc-500"
                }`}
              >
                {p[key]}
              </li>
            ))}
          </ul>
        </aside>
        <div className="p-4 sm:p-5">
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { label: p.today, value: "€ 240" },
              { label: p.week, value: "€ 1.180" },
              { label: p.open, value: "7" },
            ].map((kpi) => (
              <div
                key={kpi.label}
                className="rounded-2xl border border-white/8 bg-white/4 px-3 py-3"
              >
                <p className="text-[10px] leading-tight text-zinc-500">{kpi.label}</p>
                <p className="mt-2 text-lg tracking-tight text-white">{kpi.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-2xl border border-white/8 bg-white/3 p-4">
            <p className="text-[11px] text-zinc-500">{p.status}</p>
            <div className="mt-4 flex h-28 items-end gap-2">
              {[72, 44, 58, 31, 64, 22, 48].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-md bg-white/80"
                  style={{ height: `${h}%`, opacity: 0.35 + i * 0.08 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
