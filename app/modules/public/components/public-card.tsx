import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface PublicCardProps {
  title: string
  icon: React.ReactNode
  items: { text: string; icon: React.ReactNode }[]
}

export function PublicCard({ title, icon, items }: PublicCardProps) {
  return (
    <Card>
      <CardHeader className="gap-2">
        <div className="text-primary flex items-center gap-2">
          {icon}
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
      </CardHeader>

      <CardContent>
        <ul className="text-muted-foreground space-y-2 text-sm">
          {items.map((item, idx) => (
            <li
              key={idx}
              className="flex flex-row items-center justify-start gap-2"
            >
              <span className="text-primary">{item.icon}</span>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
