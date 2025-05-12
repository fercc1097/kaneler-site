import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { Introduction } from "@/components/Introduction"
import { SectionDivider } from "@/components/SectionDivider"
import { OilGasSection } from "@/components/OilGasSection"
import { ElectricaSection } from "@/components/ElectricaSection"
import { ObraCivilSection } from "@/components/ObraCivilSection"
import { SupervisionSection } from "@/components/SupervisionSection"
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <HeroSection />
        <Introduction />
        <SectionDivider />
        <OilGasSection />
        <SectionDivider />
        <ElectricaSection />
        <SectionDivider />
        <ObraCivilSection />
        <SectionDivider />
        <SupervisionSection />
        <SectionDivider />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
