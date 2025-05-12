import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kanaler Services - Soluciones y servicios de calidad",
  description:
    "Ofrecemos soluciones y servicios de calidad relacionados a la integridad mecánica y mantenimiento dentro de la rama OIL & GAS, Obra Civil, Eléctrica y Supervisión.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
