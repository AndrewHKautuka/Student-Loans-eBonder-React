import type { Icon } from "@/types/ui"

export interface CardItem {
  text: string
  icon: Icon
}

export interface Card {
  icon: Icon
  title: string
  description?: string
  items: CardItem[]
}
