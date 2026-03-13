import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] })

export const metadata: Metadata = {
  title: "Inovamed | Escleroterapia de Excelência para Municípios",
  description:
    "Levamos profissionais especializados, ultrassonografia de última geração e gestão completa do atendimento ao seu município. Escleroterapia com espuma de alto padrão.",
  keywords: "escleroterapia, varizes, saúde municipal, tratamento vascular, escleroterapia com espuma",
  openGraph: {
    title: "Inovamed | Escleroterapia de Excelência para Municípios",
    description:
      "Solução completa em escleroterapia com espuma para a saúde pública. Profissionais de excelência levados diretamente ao seu município.",
    type: "website",
    locale: "pt_BR",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
