import { Eye, Gauge } from "lucide-react";
import Image from "next/image";

export function SupervisionSection() {
  return (
    <section id="supervision" className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center mb-8">
            <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
              <Image
                src="/images/supervision-2.jpg"
                alt="Supervisión"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="flex items-center">
                  <Eye className="w-10 h-10 text-[#FF7F27] mr-3" />
                  <h2 className="text-3xl font-bold text-white">SUPERVISIÓN</h2>
                </div>
              </div>
            </div>
          </div>
          <p className="mb-6 text-[#333333]">
            Dentro de este ramo ofrecemos el servicio de supervisión de enlace
            con dependencias como PEMEX Y EL CENAGAS en todo tipo de
            afectaciones al derecho de vía (DDV) asesorando a nuestros clientes
            en todo momento. Todos nuestros supervisores cuentan con experiencia
            en campo y están respaldados por nuestro grupo multidisciplinario en
            lo referente a la integridad mecánica de ductos, así mismo tenemos a
            disposición de los supervisores (con cargos adicionales) los
            siguientes equipos:
          </p>

          <div className="relative h-40 mb-6 rounded-md overflow-hidden">
            <Image
              src="/images/testing-equipment.jpg"
              alt="Equipos de supervisión"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <ul className="space-y-2 text-[#333333]">
                <li className="flex items-start">
                  <Gauge className="w-4 h-4 mr-2 text-[#FF7F27] mt-1 flex-shrink-0" />
                  <span>Detectores de tuberías metálicas</span>
                </li>
                <li className="flex items-start">
                  <Gauge className="w-4 h-4 mr-2 text-[#FF7F27] mt-1 flex-shrink-0" />
                  <span>Medidores de perfil de anclaje</span>
                </li>
                <li className="flex items-start">
                  <Gauge className="w-4 h-4 mr-2 text-[#FF7F27] mt-1 flex-shrink-0" />
                  <span>Medidores de humedad</span>
                </li>
                <li className="flex items-start">
                  <Gauge className="w-4 h-4 mr-2 text-[#FF7F27] mt-1 flex-shrink-0" />
                  <span>
                    Medidores de espesor de recubrimientos de películas secas y
                    húmedas
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2 text-[#333333]">
                <li className="flex items-start">
                  <Gauge className="w-4 h-4 mr-2 text-[#FF7F27] mt-1 flex-shrink-0" />
                  <span>Medidores de espesores de tuberías</span>
                </li>
                <li className="flex items-start">
                  <Gauge className="w-4 h-4 mr-2 text-[#FF7F27] mt-1 flex-shrink-0" />
                  <span>Equipo pull off para recubrimiento</span>
                </li>
                <li className="flex items-start">
                  <Gauge className="w-4 h-4 mr-2 text-[#FF7F27] mt-1 flex-shrink-0" />
                  <span>Probador de continuidad eléctrica Holiday</span>
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-4 font-medium text-[#333333]">
            Todos estos equipos debidamente calibrados y certificados
          </p>
        </div>
      </div>
    </section>
  );
}
