import { Droplet, Building, Zap, Eye, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { MobileMenu } from "./MobileMenu"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#f8f8f8] text-[#333333] shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div>
              <Image
                src="/logo-kanaler.png"
                alt="Kanaler Services Logo"
                width={100}
                height={100}
                className="h-auto w-auto max-h-[100px] max-w-[100px]"
              />
            </div>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link href="#oil-gas" className="text-[#333333] hover:text-[#FF7F27] font-medium flex items-center">
                  <Droplet className="w-4 h-4 mr-1" />
                  OIL & GAS
                </Link>
              </li>
              <li>
                <Link href="#obra-civil" className="text-[#333333] hover:text-[#FF7F27] font-medium flex items-center">
                  <Building className="w-4 h-4 mr-1" />
                  OBRA CIVIL
                </Link>
              </li>
              <li>
                <Link href="#electrica" className="text-[#333333] hover:text-[#FF7F27] font-medium flex items-center">
                  <Zap className="w-4 h-4 mr-1" />
                  ELÉCTRICA
                </Link>
              </li>
              <li>
                <Link href="#supervision" className="text-[#333333] hover:text-[#FF7F27] font-medium flex items-center">
                  <Eye className="w-4 h-4 mr-1" />
                  SUPERVISIÓN
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-[#333333] hover:text-[#FF7F27] font-medium flex items-center">
                  <Mail className="w-4 h-4 mr-1" />
                  CONTACTO
                </Link>
              </li>
            </ul>
          </nav>
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  )
}
