import { Label } from "@/components/ui/label"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { useThemeStore } from "@/hooks/use-theme-store"

export default function LandingPage() {
  const { theme, setTheme } = useThemeStore()

  return (
    <div>
      <Label htmlFor="theme-toggle" className="px-1 pb-2">
        Toggle Theme:
      </Label>
      <ToggleGroup
        id="theme-toggle"
        type="single"
        value={theme}
        onValueChange={setTheme}
      >
        <ToggleGroupItem value="light">Light</ToggleGroupItem>
        <ToggleGroupItem value="dark">Dark</ToggleGroupItem>
        <ToggleGroupItem value="system">System</ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}
