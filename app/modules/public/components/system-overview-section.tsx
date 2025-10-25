import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  SECTION_DETAILS,
  SYSTEM_OVERVIEW_MANUAL_SYSTEM_ISSUES,
} from "../constants/public-constants"

export default function SystemOverviewSection() {
  return (
    <section aria-labelledby="overview-title" className="container mx-auto">
      <Card>
        <CardHeader>
          <CardTitle id="overview-title" className="text-3xl font-bold">
            {SECTION_DETAILS.SYSTEM_OVERVIEW.TITLE}
          </CardTitle>

          <CardDescription className="max-w-1/2 text-pretty">
            {SECTION_DETAILS.SYSTEM_OVERVIEW.DESCRIPTION}
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
              {SYSTEM_OVERVIEW_MANUAL_SYSTEM_ISSUES.map((issue) => (
                <ManualSystemIssue
                  key={issue.text}
                  text={issue.text}
                  icon={<issue.icon className="text-primary size-4" />}
                />
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
