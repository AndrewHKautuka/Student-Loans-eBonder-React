import {
  BarChart3Icon,
  Building2Icon,
  CheckCircle2Icon,
  FileTextIcon,
  GraduationCapIcon,
  ListChecksIcon,
  ShieldCheckIcon,
  TimerIcon,
  UploadIcon,
} from "lucide-react"

import type { RoleCardDatum } from "../types/public-types"

export const SECTION_HEADINGS = {
  USER_BENEFITS: "Benefits by Role",
} as const

export const userBenefitsroleCards: RoleCardDatum[] = [
  {
    icon: GraduationCapIcon,
    title: "Students",
    items: [
      {
        text: "Automated form generation",
        icon: FileTextIcon,
      },
      {
        text: "Real-time status tracking",
        icon: TimerIcon,
      },
      {
        text: "Streamlined document submission",
        icon: UploadIcon,
      },
    ],
  },
  {
    icon: Building2Icon,
    title: "Institution Administrators",
    items: [
      {
        text: "Efficient verification workflows",
        icon: ListChecksIcon,
      },
      {
        text: "Comprehensive reporting",
        icon: BarChart3Icon,
      },
      {
        text: "Audit-ready activity history",
        icon: CheckCircle2Icon,
      },
    ],
  },
  {
    icon: ShieldCheckIcon,
    title: "Loans Board Officials",
    items: [
      {
        text: "Centralized review processes",
        icon: ListChecksIcon,
      },
      {
        text: "Advanced analytics",
        icon: BarChart3Icon,
      },
      {
        text: "Enhanced oversight & controls",
        icon: CheckCircle2Icon,
      },
    ],
  },
] as const
