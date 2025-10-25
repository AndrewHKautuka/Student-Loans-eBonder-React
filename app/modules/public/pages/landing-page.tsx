import { Separator } from "@/components/ui/separator"
import CallToActionSection from "@/modules/public/components/call-to-action-section"
import CoreFeaturesSection from "@/modules/public/components/core-features-section"
import GettingStartedSection from "@/modules/public/components/getting-started-section"
import HeroSection from "@/modules/public/components/hero-section"
import SystemOverviewSection from "@/modules/public/components/system-overview-section"
import UserBenefitsSection from "@/modules/public/components/user-benefits-section"

export default function LandingPage() {
  return (
    <div className="flex flex-col gap-6 py-6 md:gap-12">
      <HeroSection />
      <Separator className="mx-[10%] max-w-[80%]" />
      <SystemOverviewSection />
      <Separator className="mx-[10%] max-w-[80%]" />
      <UserBenefitsSection />
      <Separator className="mx-[10%] max-w-[80%]" />
      <CoreFeaturesSection />
      <Separator className="mx-[10%] max-w-[80%]" />
      <GettingStartedSection />
      <Separator className="mx-[10%] max-w-[80%]" />
      <CallToActionSection />
    </div>
  )
}
