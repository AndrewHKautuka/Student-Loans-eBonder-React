import type { Icon } from "@/types/icon"

export interface CardItem {
  text: string
  icon: Icon
}

export interface Card {
  icon: Icon
  title: string
  items: CardItem[]
}
