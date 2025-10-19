import { Link } from "react-router"

import {
  ArrowRightIcon,
  Building2Icon,
  GraduationCapIcon,
  LogInIcon,
  ShieldCheckIcon,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="aspect-video bg-[url(https://picsum.photos/seed/picsum/1200/675)] bg-cover bg-center bg-no-repeat"
    >
      <div className="flex min-h-[calc(100vh-(var(--spacing)*16))] w-full flex-col items-center gap-6 p-16 text-center backdrop-blur-sm backdrop-brightness-50 backdrop-grayscale-0 backdrop-sepia-25 hover:backdrop-grayscale-50 hover:backdrop-sepia-0">
        <h1
          id="hero-title"
          className="text-4xl tracking-tight text-balance text-white sm:text-5xl lg:text-8xl"
        >
          Streamlined Loans Bonding for Higher Education
        </h1>

        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="gap-1">
            <GraduationCapIcon className="size-3" /> Students
          </Badge>
          <Badge variant="secondary" className="gap-1">
            <Building2Icon className="size-3" /> Institutions
          </Badge>
          <Badge variant="secondary" className="gap-1">
            <ShieldCheckIcon className="size-3" /> Loans Board
          </Badge>
        </div>

        <p className="max-w-2xl text-lg text-pretty text-neutral-200">
          Student Loans eBonder digitally transforms the loans bonding process
          for students, institutions, and the Loans Board. Automate paperwork,
          track status in real-time, and manage approvals securely from one
          centralized platform.
        </p>

        <div className="flex flex-1" />

        <div className="bottom-0 flex flex-wrap gap-4">
          <Button size="lg" asChild>
            <Link
              to="/register"
              aria-label="Sign up as a student using your institution email"
            >
              Sign up as Student <ArrowRightIcon className="size-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link
              to="/login"
              aria-label="Sign into your existing account as a student, institution administrator or loans board official"
            >
              <LogInIcon className="size-4" /> Sign into your Account
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
