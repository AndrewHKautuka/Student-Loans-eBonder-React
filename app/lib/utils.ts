import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function removeVitePrefix(env: object) {
  return Object.fromEntries(
    Object.entries(env).map(([key, value]) => [key.replace("VITE_", ""), value])
  )
}
