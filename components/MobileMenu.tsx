import { Droplet, Building, Zap, Eye, Mail, Menu } from "lucide-react"
import Link from "next/link"

export function MobileMenu() {
  return (
    <div className="relative">
      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center gap-2 border-none p-0 text-[#333333]">
          <span className="sr-only">Menu</span>
          <div className="h-8 w-8 flex items-center justify-center">
            <Menu className="h-6 w-6" />
          </div>
        </summary>

        <div className="absolute right-0 z-10 mt-3 w-56 rounded-md border border-gray-100 bg-white shadow-lg">
          <div className="p-2">
            <Link
              href="#oil-gas"
              className="block rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#FF7F27] flex items-center"
            >
              <Droplet className="w-4 h-4 mr-2" />
              OIL & GAS
            </Link>
            <Link
              href="#obra-civil"
              className="block rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#FF7F27] flex items-center"
            >
              <Building className="w-4 h-4 mr-2" />
              OBRA CIVIL
            </Link>
            <Link
              href="#electrica"
              className="block rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#FF7F27] flex items-center"
            >
              <Zap className="w-4 h-4 mr-2" />
              ELÉCTRICA
            </Link>
            <Link
              href="#supervision"
              className="block rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#FF7F27] flex items-center"
            >
              <Eye className="w-4 h-4 mr-2" />
              SUPERVISIÓN
            </Link>
            <Link
              href="#contacto"
              className="block rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#FF7F27] flex items-center"
            >
              <Mail className="w-4 h-4 mr-2" />
              CONTACTO
            </Link>
          </div>
        </div>
      </details>
    </div>
  )
}
