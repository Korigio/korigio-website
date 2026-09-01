import { cookies } from "next/headers";
import { de } from "./de";
import { en } from "./en";
import { es } from "./es";
import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE,
  LOCALES,
  type Locale,
} from "@/lib/constants";

type DeepString<T> = T extends string
  ? string
  : T extends ReadonlyArray<infer U>
    ? DeepString<U>[]
    : T extends object
      ? { -readonly [K in keyof T]: DeepString<T[K]> }
      : T;

export type Dictionary = DeepString<typeof en>;

const dictionaries = { en, es, de } as unknown as Record<Locale, Dictionary>;

export function isLocale(value: string | undefined): value is Locale {
  return LOCALES.includes(value as Locale);
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
}

export async function getLocale(): Promise<Locale> {
  const jar = await cookies();
  const value = jar.get(LOCALE_COOKIE)?.value;
  return isLocale(value) ? value : DEFAULT_LOCALE;
}
