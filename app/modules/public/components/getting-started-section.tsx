import {
  Building2Icon,
  ComputerIcon,
  GlobeIcon,
  GraduationCapIcon,
  ShieldCheckIcon,
} from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { SECTION_DETAILS } from "../constants/public-constants"

export default function GettingStartedSection() {
  return (
    <section
      aria-labelledby="getting-started-title"
      className="container mx-auto space-y-6"
    >
      <div className="space-y-2">
        <h2 id="getting-started-title">
          {SECTION_DETAILS.GETTING_STARTED.TITLE}
        </h2>

        <p className="text-muted-foreground">
          {SECTION_DETAILS.GETTING_STARTED.DESCRIPTION}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-6">
        <StudentsCard className="md:col-span-2" />

        <InstitutionAdminsCard className="md:col-span-2" />

        <LoansBoardOfficialsCard className="md:col-span-2" />

        <SystemRequirementsCard className="md:col-span-3" />

        <BrowserCompatibilityCard className="md:col-span-3" />
      </div>
    </section>
  )
}

interface StudentsCardProps {
  className?: string
}

function StudentsCard({ className }: StudentsCardProps) {
  return (
    <Card className={className}>
      <CardHeader className="gap-2">
        <div className="text-primary flex items-center gap-2">
          <GraduationCapIcon className="size-5" />
          <CardTitle className="text-lg">Students</CardTitle>
        </div>

        <CardDescription>Register with your institution email</CardDescription>
      </CardHeader>

      <CardContent className="text-muted-foreground text-sm">
        <ol className="list-decimal space-y-1 pl-5">
          <li>Click Register and create your account.</li>
          <li>Verify your email address.</li>
          <li>Complete your profile and start a bonding application.</li>
        </ol>
      </CardContent>
    </Card>
  )
}

interface InstitutionAdminsCardProps {
  className?: string
}

function InstitutionAdminsCard({ className }: InstitutionAdminsCardProps) {
  return (
    <Card className={className}>
      <CardHeader className="gap-2">
        <div className="text-primary flex items-center gap-2">
          <Building2Icon className="size-5" />
          <CardTitle className="text-lg">Institution Administrators</CardTitle>
        </div>

        <CardDescription>Request administrator credentials</CardDescription>
      </CardHeader>

      <CardContent className="text-muted-foreground text-sm">
        <p>
          Contact the system owner to obtain admin access for your institution.
        </p>
      </CardContent>
    </Card>
  )
}

interface LoansBoardOfficialsCardProps {
  className?: string
}

function LoansBoardOfficialsCard({ className }: LoansBoardOfficialsCardProps) {
  return (
    <Card className={className}>
      <CardHeader className="gap-2">
        <div className="text-primary flex items-center gap-2">
          <ShieldCheckIcon className="size-5" />
          <CardTitle className="text-lg">Loans Board Officials</CardTitle>
        </div>

        <CardDescription>Request board-level access</CardDescription>
      </CardHeader>

      <CardContent className="text-muted-foreground text-sm">
        <p>
          Request credentials with the appropriate role assignments and
          permissions.
        </p>
      </CardContent>
    </Card>
  )
}

interface SystemRequirementsCardProps {
  className?: string
}

function SystemRequirementsCard({ className }: SystemRequirementsCardProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <div className="text-primary flex items-center gap-2">
          <ComputerIcon className="size-5" />
          <CardTitle className="text-lg">System Requirements</CardTitle>
        </div>
      </CardHeader>

      <CardContent className="text-muted-foreground text-sm">
        <ul className="list-disc space-y-1 pl-4">
          <li>Modern browsers: Chrome/Edge/Firefox 115+, Safari 16+</li>
          <li>OS: Windows 10+, macOS 12+, or modern Linux</li>
          <li>Mobile: iOS 16+ or Android 12+ (latest recommended)</li>
          <li>Screen width ≥ 1024px recommended for administrators</li>
        </ul>
      </CardContent>
    </Card>
  )
}

interface BrowserCompatibilityCardProps {
  className?: string
}

function BrowserCompatibilityCard({
  className,
}: BrowserCompatibilityCardProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <div className="text-primary flex items-center gap-2">
          <GlobeIcon className="size-5" />
          <CardTitle className="text-lg">Browser Compatibility</CardTitle>
        </div>
      </CardHeader>

      <CardContent className="text-muted-foreground text-sm">
        <p>
          The platform is optimized for modern evergreen browsers and supports
          both light and dark themes. For the best experience, ensure your
          browser is up to date.
        </p>
      </CardContent>
    </Card>
  )
}
