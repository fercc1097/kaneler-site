import { Building } from "lucide-react"
import Image from "next/image"

export function ObraCivilSection() {
  return (
    <section id="obra-civil" className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center mb-8">
            <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
              <Image
                src="/images/civil-work.jpg"
                alt="Obra Civil"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="flex items-center">
                  <Building className="w-10 h-10 text-[#FF7F27] mr-3" />
                  <h2 className="text-3xl font-bold text-white">OBRA CIVIL</h2>
                </div>
              </div>
            </div>
          </div>
          <p className="mb-6 text-[#333333]">
            Ofrecemos servicios integrales de obra civil, desde la planificación y diseño hasta la construcción y
            mantenimiento. Contamos con un equipo de profesionales altamente capacitados y con amplia experiencia en
            proyectos de infraestructura, edificación y urbanización.
          </p>
          <p className="mb-6 text-[#333333]">A continuación se enlistan los servicios ofertados en esta rama:</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-2 text-[#333333]">
                <li className="flex items-start">
                  <Building className="w-4 h-4 mr-2 text-[#FF7F27] mt-1 flex-shrink-0" />
                  <span>Construcción de edificios residenciales y comerciales</span>
                </li>
                <li className="flex items-start">
                  <Building className="w-4 h-4 mr-2 text-[#FF7F27] mt-1 flex-shrink-0" />
                  <span>Construcción de naves industriales</span>
                </li>
                <li className="flex items-start">
                  <Building className="w-4 h-4 mr-2 text-[#FF7F27] mt-1 flex-shrink-0" />
                  <span>Remodelación y ampliación de espacios</span>
                </li>
                <li className="flex items-start">
                  <Building className="w-4 h-4 mr-2 text-[#FF7F27] mt-1 flex-shrink-0" />
                  <span>Movimiento de tierras y excavaciones</span>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2 text-[#333333]">
                <li className="flex items-start">
                  <Building className="w-4 h-4 mr-2 text-[#FF7F27] mt-1 flex-shrink-0" />
                  <span>Construcción de carreteras y caminos</span>
                </li>
                <li className="flex items-start">
                  <Building className="w-4 h-4 mr-2 text-[#FF7F27] mt-1 flex-shrink-0" />
                  <span>Construcción de plataformas y cimentaciones</span>
                </li>
                <li className="flex items-start">
                  <Building className="w-4 h-4 mr-2 text-[#FF7F27] mt-1 flex-shrink-0" />
                  <span>Obras de urbanización (agua potable, drenaje, electrificación)</span>
                </li>
                <li className="flex items-start">
                  <Building className="w-4 h-4 mr-2 text-[#FF7F27] mt-1 flex-shrink-0" />
                  <span>Mantenimiento y rehabilitación de infraestructura</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
