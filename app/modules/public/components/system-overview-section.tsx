import { EyeOffIcon, SnailIcon, SquareStackIcon } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function SystemOverviewSection() {
  return (
    <section aria-labelledby="overview-title" className="container mx-auto">
      <Card>
        <CardHeader>
          <CardTitle id="overview-title" className="text-3xl font-bold">
            Why a Digital Bonding System?
          </CardTitle>

          <CardDescription className="max-w-1/2 text-pretty">
            Address the limitations of manual, paper-based workflows with a
            secure, transparent, and efficient digital experience
          </CardDescription>
        </CardHeader>

        <CardContent className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4 text-balance">
            <p>
              Many institutions still manage bonding through manual forms,
              physical signatures, back-and-forth emails, and spreadsheet
              tracking. This approach is time-consuming, error-prone, and
              provides limited visibility for stakeholders.
            </p>

            <ul>
              {manualSystemIssues.map((issue) => (
                <ManualSystemIssue key={issue.text} {...issue} />
              ))}
            </ul>

            <p>
              Student Loans eBonder modernizes the entire process - from period
              creation to final approval - through a centralized, role-based
              platform with clear status visibility.
            </p>
          </div>

          <div
            role="img"
            aria-label="Placeholder: Diagram of paper to digital transformation with arrows and steps"
            className="bg-muted/20 text-muted-foreground grid aspect-video place-items-center rounded-xl border p-6"
          >
            <div className="text-center text-sm">
              <p className="font-medium">Diagram Placeholder</p>
              <p className="mt-1">
                Paper → Data Capture → Verification → Review → Approval →
                Reporting
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

interface ManualSystemIssueProps {
  text: string
  icon: React.ReactNode
}

function ManualSystemIssue({ text, icon }: ManualSystemIssueProps) {
  return (
    <li className="flex flex-row items-center gap-2">
      {icon} {text}
    </li>
  )
}

const manualSystemIssues = [
  {
    text: "Duplicate data entry and inconsistent records",
    icon: <SquareStackIcon className="size-4" />,
  },
  {
    text: "Slow verification, approvals, and follow-ups",
    icon: <SnailIcon className="size-4" />,
  },
  {
    text: "Limited auditability and oversight",
    icon: <EyeOffIcon className="size-4" />,
  },
]
