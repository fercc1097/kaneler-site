import {
  Droplet,
  Wrench,
  Gauge,
  Hammer,
  Microscope,
  ShieldCheck,
  Workflow,
  Construction,
} from "lucide-react";
import Image from "next/image";

export function OilGasSection() {
  return (
    <section id="oil-gas" className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <div className="flex flex-col items-center mb-8">
              <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/oil-and-gas.jpg"
                  alt="Servicios Oil & Gas"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="flex items-center">
                    <Droplet className="w-10 h-10 text-[#FF7F27] mr-3" />
                    <h2 className="text-3xl font-bold text-white">OIL & GAS</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#FF7F27] flex items-center">
                  <Wrench className="w-5 h-5 mr-2" />
                  Suministro de conexiones
                </h3>
                <ul className="space-y-2 ml-4 text-[#333333]">
                  <li>- Bridas, codos y niplería</li>
                  <li>- Fabricación de curvas en frío</li>
                  <li>- Servicio de CWI</li>
                </ul>

                <h3 className="text-xl font-bold mt-6 mb-4 text-[#FF7F27] flex items-center">
                  <Gauge className="w-5 h-5 mr-2" />
                  Análisis de Integridad
                </h3>
                <ul className="space-y-2 ml-4 text-[#333333]">
                  <li>- Tuberías de proceso</li>
                  <li>- Ductos de transporte oil &gas</li>
                  <li>- Verificación de indicaciones</li>
                  <li>- Tiempo de vida remanente</li>
                  <li>- Análisis de flexibilidad y esfuerzos</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-[#FF7F27] flex items-center">
                  <Hammer className="w-5 h-5 mr-2" />
                  Reparación temporal y definitiva
                </h3>
                <div className="relative h-40 mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/images/fix.jpg"
                    alt="Reparación temporal y definitiva"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <ul className="space-y-2 ml-4 text-[#333333]">
                  <li>- Suministro e instalación de envolventes metálicas</li>
                  <li>
                    - Suministro e instalación de envolventes no metálicas
                  </li>
                  <li>
                    - Suministro e instalación de envolventes PRE-ESFORZADAS
                  </li>
                  <li>- Suministro de obturadores para eliminación de TC</li>
                  <li>- Soldadura certificada a tope en V y branch</li>
                  <li>- Soldadura certificada en envolventes</li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#FF7F27] flex items-center">
                  <Microscope className="w-5 h-5 mr-2" />
                  Pruebas No Destructivas (Convencionales)
                </h3>
                <ul className="space-y-2 ml-4 text-[#333333]">
                  <li>- Inspección Visual remota y directa (VT)</li>
                  <li>- Líquidos Penetrantes (PT)</li>
                  <li>- Partículas Magnéticas (MT)</li>
                  <li>- Inspección Ultrasónica (UT)</li>
                  <li>- Prueba de dureza (HT)</li>
                  <li>- Pruebas hidrostáticas</li>
                  <li>- Metalografía en campo</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-[#FF7F27] flex items-center">
                  <Microscope className="w-5 h-5 mr-2" />
                  Pruebas No Destructivas (No Convencionales)
                </h3>
                <ul className="space-y-2 ml-4 text-[#333333]">
                  <li>- Corrientes de Eddy</li>
                  <li>- Identificación positiva de materiales</li>
                  <li>- Pruebas hidrostáticas a tubería y válvulas</li>
                  <li>- Inspección Ultrasónica (UT)</li>
                  <li className="ml-4">• Arreglo de fase (PAUT)</li>
                  <li className="ml-4">
                    • Difracción de tiempo de vuelo (TOFD)
                  </li>
                  <li className="ml-4">• Corrientes de Eddy pulsadas (PEC)</li>
                  <li className="ml-4">• Fuga de flujo magnético (MFL)</li>
                  <li className="ml-4">
                    • Campos de medición de corriente alterna (ACFM)
                  </li>
                  <li className="ml-4">• Ondas guiadas (LRUT, MRUT)</li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4 text-[#333333] flex items-center">
                <ShieldCheck className="w-6 h-6 mr-2 text-[#FF7F27]" />
                SERVICIOS EN CORROSIÓN EXTERIOR
              </h2>
              <div className="relative h-40 mb-4 rounded-md overflow-hidden">
                <Image
                  src="/images/corrosion-protection.jpg"
                  alt="Servicios en corrosión exterior"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#FF7F27]">
                Protección catódica y control de corrosión
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold mb-2 text-[#FF7F27] flex items-center">
                    <Workflow className="w-4 h-4 mr-2" />
                    Diseño de sistemas de protección catódica
                  </h4>
                  <ul className="space-y-2 ml-4 text-[#333333]">
                    <li>
                      - Diseño de camas convencionales, ánodos de sacrificio y
                      ánodos de corriente impresa
                    </li>
                    <li>
                      - Diseño de camas de pozo profundo, ánodos de mezcla,
                      óxidos metálicos
                    </li>
                    <li>
                      - Diseño de protección a tanques, ánodos de malla o de
                      sacrificio
                    </li>
                  </ul>

                  <h4 className="font-bold mt-4 mb-2 text-[#FF7F27] flex items-center">
                    <Construction className="w-4 h-4 mr-2" />
                    Construcción y rehabilitación de sistemas de protección
                    catódica
                  </h4>
                  <ul className="space-y-2 ml-4 text-[#333333]">
                    <li>- Camas anódicas convencionales</li>
                    <li>
                      - Fabricación y suministro de postes de señalización
                    </li>
                    <li>
                      - Reposición de ánodos, carbón, cables y empalmes en camas
                      anódicas
                    </li>
                    <li>- Evaluación de los sistemas de protección catódica</li>
                    <li>
                      - Refaccionameinto en equipos, rectificadores y cajas
                      unión
                    </li>
                    <li>
                      - Transformación de equipos manuales en automáticos,
                      telecontrolados y viceversa
                    </li>
                  </ul>
                </div>

                <div>
                  <ul className="space-y-2 text-[#333333]">
                    <li>
                      - Levantamiento de potenciales CIS (Close Interval Survey)
                    </li>
                    <li>
                      - Estudio del estado del recubrimiento mecánico DCVG
                      (Direct Current Gradient Voltage)
                    </li>
                    <li>
                      - Localización de ductos con equipo de radio localización
                    </li>
                    <li>
                      - Estudios de resistividad de suelos equipo Nilsson
                      (terrómetro)
                    </li>
                    <li>
                      - Suministro de materiales especializados para protección
                      catódica
                    </li>
                  </ul>

                  <h4 className="font-bold mt-6 mb-2 text-[#FF7F27] flex items-center">
                    <Wrench className="w-4 h-4 mr-2" />
                    Recubrimientos y suministros
                  </h4>
                  <ul className="space-y-2 ml-4 text-[#333333]">
                    <li>- Suministro e instalación de cintas viscoelásticas</li>
                    <li>
                      - Suministro e instalación de protección mecánica a base
                      de ánti-acidos monolíticos altos sólidos
                    </li>
                    <li>
                      - Limpieza y preparación de superficies por sand blast
                    </li>
                    <li>
                      - Prueba dieléctrica a recubrimientos con equipo holiday
                    </li>
                    <li>- Prueba de adherencia con equipo pull off</li>
                    <li>
                      - Medición de espesores en recubrimientos (película seca)
                    </li>
                  </ul>

                  <h4 className="font-bold mt-4 mb-2 text-[#FF7F27] flex items-center">
                    <Gauge className="w-4 h-4 mr-2" />
                    Estudios complementarios en ductos
                  </h4>
                  <ul className="space-y-2 ml-4 text-[#333333]">
                    <li>
                      - Localización y administración de puenteos eléctricos
                    </li>
                    <li>- Estudio de distribución de corriente</li>
                    <li>- Pruebas de inyección de corriente</li>
                    <li>- Estudios de alcalinidad y acidez de suelos pH</li>
                    <li>- Diagnósticos de aislamientos eléctricos</li>
                    <li>
                      - Inspección y solución de cruces encamisados en corto
                      electrolítico y/o metálico
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
