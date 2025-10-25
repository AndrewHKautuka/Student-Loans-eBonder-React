import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import {
  SECTION_HEADINGS,
  userBenefitsroleCards,
} from "../constants/public-constants"

export default function UserBenefitsSection() {
  return (
    <section
      aria-labelledby="benefits-title"
      className="container mx-auto space-y-6"
    >
      <div className="space-y-2">
        <h2 id="benefits-title">{SECTION_HEADINGS.USER_BENEFITS_TITLE}</h2>

        <p className="text-muted-foreground">
          {SECTION_HEADINGS.USER_BENEFITS_DESCRIPTION}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {userBenefitsroleCards.map((datum) => (
          <RoleCard
            key={datum.title}
            icon={<datum.icon className="size-5" />}
            title={datum.title}
            items={datum.items.map((item) => ({
              text: item.text,
              icon: <item.icon className="size-4" />,
            }))}
          />
        ))}
      </div>
    </section>
  )
}

function RoleCard({
  title,
  icon,
  items,
}: {
  title: string
  icon: React.ReactNode
  items: { text: string; icon: React.ReactNode }[]
}) {
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
