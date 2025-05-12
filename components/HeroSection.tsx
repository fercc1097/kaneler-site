import Image from "next/image"
import Link from "next/link"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative h-[80vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-image.png"
          alt="Kanaler Services - Soluciones industriales"
          fill
          className="object-cover brightness-50"
          priority
          sizes="100vw"
        />
      </div>
      <div className="container mx-auto px-4 z-10 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Soluciones y servicios de calidad para la industria
          </h1>
          <p className="text-xl mb-8">
            En KANALER SERVICES estamos comprometidos con nuestros clientes, ofreciendo soluciones y servicios de
            calidad relacionados a la integridad mecánica y mantenimiento dentro de la rama OIL & GAS, Obra Civil,
            Eléctrica y Supervisión.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#servicios"
              className="bg-[#FF7F27] hover:bg-[#e67321] text-white font-bold py-3 px-6 rounded-md transition-colors inline-flex items-center justify-center"
            >
              Nuestros Servicios
              <ArrowDown className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="#contacto"
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold py-3 px-6 rounded-md transition-colors inline-flex items-center justify-center"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
