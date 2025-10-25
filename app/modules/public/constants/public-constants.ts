import {
  BarChart3Icon,
  Building2Icon,
  CheckCircle2Icon,
  EyeOffIcon,
  FileTextIcon,
  GraduationCapIcon,
  ListChecksIcon,
  ShieldCheckIcon,
  SnailIcon,
  SquareStackIcon,
  TimerIcon,
  UploadIcon,
} from "lucide-react"

import type { Card, CardItem } from "../types/public-types"

export const SECTION_DETAILS = {
  HERO: {
    TITLE: "Streamlined Loans Bonding for Higher Education",
    DESCRIPTION:
      "Student Loans eBonder digitally transforms the loans bonding process for students, institutions, and the Loans Board. Automate paperwork, track status in real-time, and manage approvals securely from one centralized platform.",
  },
  SYSTEM_OVERVIEW: {
    TITLE: "Why a Digital Bonding System?",
    DESCRIPTION:
      "Address the limitations of manual, paper-based workflows with a secure, transparent, and efficient digital experience",
  },
  USER_BENEFITS: {
    TITLE: "Benefits by Role",
    DESCRIPTION: "Clear, role-specific value for every stakeholder.",
  },
} as const

export const SYSTEM_OVERVIEW_MANUAL_SYSTEM_ISSUES: CardItem[] = [
  {
    text: "Duplicate data entry and inconsistent records",
    icon: SquareStackIcon,
  },
  {
    text: "Slow verification, approvals, and follow-ups",
    icon: SnailIcon,
  },
  {
    text: "Limited auditability and oversight",
    icon: EyeOffIcon,
  },
] as const

export const USER_BENEFITS_CARDS: Card[] = [
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
