import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function obfuscateString(
  value: string,
  leftCharCount: number = 4,
  rightCharCount: number = 4,
) {
  return `${value.slice(0, leftCharCount)}...${value.slice(-rightCharCount)}`
}
