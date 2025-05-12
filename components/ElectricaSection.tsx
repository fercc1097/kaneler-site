import { Zap, Lightbulb } from "lucide-react"
import Image from "next/image"

export function ElectricaSection() {
  return (
    <section id="electrica" className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center mb-8">
            <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
              <Image
                src="/images/electrical-service.png"
                alt="Obra Eléctrica"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="flex items-center">
                  <Zap className="w-10 h-10 text-[#FF7F27] mr-3" />
                  <h2 className="text-3xl font-bold text-white">OBRA ELÉCTRICA</h2>
                </div>
              </div>
            </div>
          </div>
          <p className="mb-6 text-[#333333]">
            Contamos con una área especializada en ramo eléctrico, específicamente media y baja tensión, con
            conocimiento en el desarrollo de ingeniería y ejecución de proyectos eléctricos respaldados por un excelente
            equipo de trabajo, con la misión de realizar proyectos de calidad.
          </p>
          <p className="mb-6 text-[#333333]">A continuación se enlistan los servicios ofertados en esta rama:</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-2 text-[#333333]">
                <li className="flex items-start">
                  <Lightbulb className="w-4 h-4 mr-2 text-[#FF7F27] mt-1 flex-shrink-0" />
                  <span>Elaboración de proyectos ejecutivos en baja y mediana tensión</span>
                </li>
                <li className="flex items-start">
                  <Lightbulb className="w-4 h-4 mr-2 text-[#FF7F27] mt-1 flex-shrink-0" />
                  <span>Levantamiento de instalaciones eléctricas</span>
                </li>
                <li className="flex items-start">
                  <Lightbulb className="w-4 h-4 mr-2 text-[#FF7F27] mt-1 flex-shrink-0" />
                  <span>Trámites ante CFE</span>
                </li>
                <li className="flex items-start">
                  <Lightbulb className="w-4 h-4 mr-2 text-[#FF7F27] mt-1 flex-shrink-0" />
                  <span>Liberación de dictamen UVIE</span>
                </li>
                <li className="flex items-start">
                  <Lightbulb className="w-4 h-4 mr-2 text-[#FF7F27] mt-1 flex-shrink-0" />
                  <span>Suministro e instalación de transformadores tipo subestación, pedestal y secos</span>
                </li>
                <li className="flex items-start">
                  <Lightbulb className="w-4 h-4 mr-2 text-[#FF7F27] mt-1 flex-shrink-0" />
                  <span>Suministro e instalación de plantas de emergencia</span>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2 text-[#333333]">
                <li className="flex items-start">
                  <Lightbulb className="w-4 h-4 mr-2 text-[#FF7F27] mt-1 flex-shrink-0" />
                  <span>Suministro e instalación de UPS</span>
                </li>
                <li className="flex items-start">
                  <Lightbulb className="w-4 h-4 mr-2 text-[#FF7F27] mt-1 flex-shrink-0" />
                  <span>Suministro e Instalación de tableros de control</span>
                </li>
                <li className="flex items-start">
                  <Lightbulb className="w-4 h-4 mr-2 text-[#FF7F27] mt-1 flex-shrink-0" />
                  <span>Suministro e instalación de bancos de capacitores</span>
                </li>
                <li className="flex items-start">
                  <Lightbulb className="w-4 h-4 mr-2 text-[#FF7F27] mt-1 flex-shrink-0" />
                  <span>
                    Mantenimiento preventivo y correctivo a transformadores, plantas de emergencia, tableros eléctricos,
                    UPS
                  </span>
                </li>
                <li className="flex items-start">
                  <Lightbulb className="w-4 h-4 mr-2 text-[#FF7F27] mt-1 flex-shrink-0" />
                  <span>
                    Pruebas de rutina (aislamiento y TTR) a transformadores, termografías, pruebas a líquido aislante de
                    transformador
                  </span>
                </li>
                <li className="flex items-start">
                  <Lightbulb className="w-4 h-4 mr-2 text-[#FF7F27] mt-1 flex-shrink-0" />
                  <span>Alimentadores de fuerza a tableros de control, distribución, principales y derivados</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
