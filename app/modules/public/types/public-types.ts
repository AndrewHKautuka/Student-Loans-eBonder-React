import type { Icon } from "@/types/icon"

export interface RoleCardItem {
  text: string
  icon: Icon
}

export interface RoleCardDatum {
  icon: Icon
  title: string
  items: RoleCardItem[]
}
