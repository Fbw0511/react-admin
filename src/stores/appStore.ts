import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AppState {
  dark: boolean
  toggleDark: () => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      dark: false,
      toggleDark: () => set((s) => ({ dark: !s.dark })),
    }),
    { name: 'app-store' }
  )
)