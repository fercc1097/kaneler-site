import { PipetteIcon as PipetteLine, Eye } from "lucide-react";
import Image from "next/image";

export function Introduction() {
  return (
    <section id="servicios" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-6 text-[#333333]">
                Nuestros Servicios Principales
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative h-48 mb-4 overflow-hidden rounded-md">
                    <Image
                      src="/images/pipe.jpg"
                      alt="Suministro de tubería"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <p className="text-lg font-medium mb-2 text-[#FF7F27] flex items-center justify-center">
                    <PipetteLine className="w-5 h-5 mr-2" />
                    Suministro de tubería
                  </p>
                  <div className="mt-2 text-[#333333]">
                    <p>
                      Ofrecemos suministro de tubería de alta calidad para
                      proyectos de transporte de hidrocarburos, agua y otros
                      fluidos. Contamos con una amplia variedad de diámetros,
                      espesores y especificaciones según normas nacionales e
                      internacionales. Nuestra tubería cumple con los estándares
                      más rigurosos de calidad y resistencia para garantizar la
                      integridad de sus sistemas.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative h-48 mb-4 overflow-hidden rounded-md">
                    <Image
                      src="/images/supervision-1.jpg"
                      alt="Supervisión de obra"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <p className="text-lg font-medium mb-2 text-[#FF7F27] flex items-center justify-center">
                    <Eye className="w-5 h-5 mr-2" />
                    Supervisión de obra
                  </p>
                  <div className="mt-2 text-[#333333]">
                    <p>
                      Brindamos servicios especializados de supervisión técnica
                      para asegurar que todos los trabajos se realicen conforme
                      a las especificaciones, normativas y estándares de calidad
                      requeridos. Nuestro equipo de supervisores cuenta con
                      amplia experiencia en campo y está respaldado por nuestro
                      grupo multidisciplinario.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-lg mb-6 text-[#333333]">
            En KANALER SERVICES estamos comprometidos con nuestros clientes,
            para ofrecer soluciones y servicios de calidad relacionados a la
            integridad mecánica y mantenimiento dentro de la rama OIL & GAS;
            nuestro catálogo de servicios brinda el soporte técnico necesario
            para mantener tus sistemas de transporte por ducto en óptimas
            condiciones, tanto de seguridad como de funcionamiento.
          </p>
          <p className="text-lg mb-6 text-[#333333]">
            Algunos de los servicios que ofrecemos se enlistan a continuación:
          </p>
        </div>
      </div>
    </section>
  );
}
