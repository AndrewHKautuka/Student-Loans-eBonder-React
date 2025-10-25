import { Link, type To } from "react-router"

import { GraduationCapIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import type { ButtonVariant } from "@/types/ui"

import { SECTION_DETAILS } from "../constants/public-constants"

export default function CallToActionSection() {
  return (
    <section
      aria-labelledby="cta-title"
      className="container mx-auto space-y-6"
    >
      <div className="space-y-2 text-center">
        <h2 id="cta-title">{SECTION_DETAILS.CALL_TO_ACTION.TITLE}</h2>

        <p className="text-muted-foreground">
          {SECTION_DETAILS.CALL_TO_ACTION.DESCRIPTION}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <CTACard
          icon={<GraduationCapIcon className="text-primary size-6" />}
          title="Students"
          description="Create your account and start your bonding application."
          linkLabel="Register"
          linkTo="/register"
        />

        <CTACard
          icon={<GraduationCapIcon className="text-primary size-6" />}
          title="Institution Administrators"
          description="Request access for your institution."
          linkLabel="Request Access"
          linkTo="/register?type=institution"
          linkVariant="outline"
        />
      </div>
    </section>
  )
}

interface CTACardProps {
  icon: React.ReactNode
  title: string
  description: string
  linkLabel: string
  linkTo: To
  linkVariant?: ButtonVariant
}

function CTACard({
  icon,
  title,
  description,
  linkLabel,
  linkTo,
  linkVariant,
}: CTACardProps) {
  return (
    <Card>
      <CardHeader className="justify-items-center text-center">
        {icon}
        <div className="font-medium">{title}</div>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardHeader>

      <CardContent className="text-center">
        <Button variant={linkVariant} asChild>
          <Link to={linkTo}>{linkLabel}</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
