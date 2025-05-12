import { Droplet, Building, Zap, Eye, Mail, HomeIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[#333333] text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-4">
          <Image
            src="/logo-kanaler.png"
            alt="Kanaler Services Logo"
            width={100}
            height={100}
            className="h-auto w-auto max-h-[100px] max-w-[100px]"
          />
        </div>
        <div className="flex justify-center space-x-4 mb-4">
          <Link href="#oil-gas" className="text-white hover:text-[#FF7F27]">
            <Droplet className="w-5 h-5" />
          </Link>
          <Link href="#obra-civil" className="text-white hover:text-[#FF7F27]">
            <Building className="w-5 h-5" />
          </Link>
          <Link href="#electrica" className="text-white hover:text-[#FF7F27]">
            <Zap className="w-5 h-5" />
          </Link>
          <Link href="#supervision" className="text-white hover:text-[#FF7F27]">
            <Eye className="w-5 h-5" />
          </Link>
          <Link href="#contacto" className="text-white hover:text-[#FF7F27]">
            <Mail className="w-5 h-5" />
          </Link>
          <Link href="#" className="text-white hover:text-[#FF7F27]">
            <HomeIcon className="w-5 h-5" />
          </Link>
        </div>
        <p>&copy; {new Date().getFullYear()} Kanaler Services. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
