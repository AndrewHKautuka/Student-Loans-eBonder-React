import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"

import type { Theme } from "@/context/theme-context"

/**
 * Zustand store that manages the global visual theme (light, dark or system).
 * The value is persisted in localStorage under the key "theme" so the
 * preference is kept across page reloads.
 */
interface ThemeState {
  /** The currently selected theme */
  theme: Theme
  /** Force-set a theme */
  setTheme: (theme: Theme) => void
}

/**
 * Global theme store.
 *
 * @example
 * const theme = useThemeStore((s) => s.theme)
 * const setTheme = useThemeStore((s) => s.setTheme)
 */
export const useThemeStore = create<ThemeState>()(
  devtools(
    persist(
      (set) => ({
        theme: "system",
        setTheme: (theme) => set({ theme }),
      }),
      {
        name: "ui-theme", // localStorage key
      }
    ),
    {
      name: "ThemeStore", // label in Redux DevTools
    }
  )
)
