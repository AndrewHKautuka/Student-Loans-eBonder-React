import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface PublicCardProps {
  title: string
  description?: string
  icon: React.ReactNode
  items: { text: string; icon: React.ReactNode }[]
}

export function PublicCard({
  title,
  description,
  icon,
  items,
}: PublicCardProps) {
  return (
    <Card>
      <CardHeader className="gap-2">
        <div className="text-primary flex items-center gap-2">
          {icon}
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>

      <CardContent className="flex h-full flex-col">
        <div className="flex flex-1" />

        <ul className="text-muted-foreground bottom-0 space-y-2 text-sm">
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
