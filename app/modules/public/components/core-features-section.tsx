import {
  CORE_FEATURES_CARDS,
  SECTION_DETAILS,
} from "../constants/public-constants"
import { PublicCard } from "./public-card"

export default function CoreFeaturesSection() {
  return (
    <section
      aria-labelledby="features-title"
      className="container mx-auto space-y-6"
    >
      <div className="space-y-2">
        <h2 id="features-title">{SECTION_DETAILS.CORE_FEATURES.TITLE}</h2>

        <p className="text-muted-foreground">
          {SECTION_DETAILS.CORE_FEATURES.DESCRIPTION}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {CORE_FEATURES_CARDS.map((card) => (
          <PublicCard
            key={card.title}
            title={card.title}
            description={card.description}
            icon={<card.icon className="size-5" />}
            items={card.items.map((item) => ({
              text: item.text,
              icon: <item.icon className="size-4" />,
            }))}
          />
        ))}
      </div>
    </section>
  )
}
