import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toADA(lovelace: string | number) {
  return Number(lovelace) / 10 ** 6;
}
