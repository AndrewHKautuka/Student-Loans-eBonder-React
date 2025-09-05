import { createContext, useEffect } from "react"

import { useThemeStore } from "@/hooks/use-theme-store"

/**
 * Represents the available visual themes for the application.
 */
export type Theme = "light" | "dark" | "system"

/**
 * Props for the `ThemeProvider` component.
 */
interface ThemeProviderProps {
  children: React.ReactNode
}

/**
 * The value of the `ThemeContext`.
 */
export interface ThemeContextValue {
  /** The currently active theme ("light", "dark" or "system"). */
  theme: Theme
  /** Force-sets a theme. */
  setTheme: (theme: Theme) => void
}

/**
 * The `ThemeContext` for the application.
 * Components can consume the store directly via `useThemeStore`, but we keep
 * this context to preserve the existing `useTheme` hook API and to avoid a
 * breaking change across the codebase.
 */
export const ThemeContext = createContext<ThemeContextValue>({
  theme: "system",
  setTheme: () => null,
})

/**
 * Provides the `ThemeContext` to all descendant components and synchronises the
 * current theme with the DOM so Tailwind's `dark:` utilities work. The actual
 * state lives in a global Zustand store (`useThemeStore`).
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const { theme, setTheme } = useThemeStore()

  // Keep DOM in sync whenever the theme changes.
  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove("light", "dark")

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light"
      root.classList.add(systemTheme)
      return
    }

    root.classList.add(theme)
  }, [theme])

  const value: ThemeContextValue = { theme, setTheme }

  return (
    <ThemeContext.Provider {...props} value={value}>
      {children}
    </ThemeContext.Provider>
  )
}
