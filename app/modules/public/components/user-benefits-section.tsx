import {
  SECTION_DETAILS,
  USER_BENEFITS_ROLE_CARDS,
} from "../constants/public-constants"
import { PublicCard } from "./public-card"

export default function UserBenefitsSection() {
  return (
    <section
      aria-labelledby="benefits-title"
      className="container mx-auto space-y-6"
    >
      <div className="space-y-2">
        <h2 id="benefits-title">{SECTION_DETAILS.USER_BENEFITS.TITLE}</h2>

        <p className="text-muted-foreground">
          {SECTION_DETAILS.USER_BENEFITS.DESCRIPTION}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {USER_BENEFITS_ROLE_CARDS.map((datum) => (
          <PublicCard
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
