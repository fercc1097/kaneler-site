import { Mail, MapPin, Phone, Droplet, Building, Zap, Eye } from "lucide-react";
import { ImageGallery } from "./ImageGallery";

export function ContactSection() {
  return (
    <section id="contacto" className="py-8 bg-[#333333] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Mail className="w-10 h-10 text-[#FF7F27] mr-3" />
            <h2 className="text-3xl font-bold">CONTACTO</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                Información de contacto
              </h3>
              <p className="mb-4">
                Estamos aquí para responder a tus preguntas y ayudarte con tus proyectos. No dudes en comunicarte con nosotros.
              </p>
              <div className="flex items-start mb-4">
                <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-[#FF7F27]" />
                <p>
                  Matamoros #61-A, Col. Centro, Huauchinango, Puebla, C.P. 73170
                </p>
              </div>
              <div className="flex items-center mb-4">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0 text-[#FF7F27]" />
                <div>
                  <p>+52 7767678672</p>
                  <p>+52 8180507329</p>
                  <p>+52 7766880892</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Nuestros servicios</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 border border-[#FF7F27] text-center">
                  <Droplet className="w-6 h-6 mx-auto mb-2 text-[#FF7F27]" />
                  <h4 className="font-bold">OIL & GAS</h4>
                </div>
                <div className="p-4 border border-[#FF7F27] text-center">
                  <Building className="w-6 h-6 mx-auto mb-2 text-[#FF7F27]" />
                  <h4 className="font-bold">OBRA CIVIL</h4>
                </div>
                <div className="p-4 border border-[#FF7F27] text-center">
                  <Zap className="w-6 h-6 mx-auto mb-2 text-[#FF7F27]" />
                  <h4 className="font-bold">ELÉCTRICA</h4>
                </div>
                <div className="p-4 border border-[#FF7F27] text-center">
                  <Eye className="w-6 h-6 mx-auto mb-2 text-[#FF7F27]" />
                  <h4 className="font-bold">SUPERVISIÓN</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Galería de Proyectos</h3>
            <ImageGallery
              images={[
                {
                  src: "/images/oil-and-gas.jpg",
                  alt: "Proyecto Oil & Gas",
                },
                {
                  src: "/images/electrical-service.png",
                  alt: "Proyecto Eléctrico",
                },
                { src: "/images/civil-work.jpg", alt: "Proyecto Obra Civil" },
                {
                  src: "/images/supervision-1.jpg",
                  alt: "Supervisión de Obra",
                },
                {
                  src: "/images/corrosion-protection.jpg",
                  alt: "Protección contra Corrosión",
                },
                { src: "/images/fix.jpg", alt: "Soldadura Industrial" },
                {
                  src: "/images/testing-equipment.jpg",
                  alt: "Equipos de Prueba",
                },
                {
                  src: "/images/hero-image.png",
                  alt: "Instalaciones Industriales",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
