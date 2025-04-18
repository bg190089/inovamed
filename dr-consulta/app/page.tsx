"use client"

import Image from "next/image"
import { Clock, ArrowUpRight, Users, ShieldCheck, ClipboardCheck, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto bg-white min-h-screen flex flex-col">
      {/* Navigation Bar - Keeping as is */}
      <div className="bg-navy-blue text-white p-4 flex justify-between items-center">
        <div className="h-10 relative w-48 bg-navy-blue flex items-center">
          <Image src="/inovamed-text-logo.png" alt="Inovamed" width={180} height={40} className="object-contain" />
        </div>
        <a
          href="https://wa.me/5575981619392?text=ol%C3%A1%2C%20vi%20o%20site%20da%20Inovamed%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20servi%C3%A7o%20de%20voc%C3%AAs."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-navy-blue-500 text-white px-4 py-2 rounded-lg border border-white hover:bg-navy-blue-600 transition-colors"
        >
          Fale conosco
        </a>
      </div>

      {/* Hero Section */}
      <div className="relative">
        <div className="relative w-full h-[400px] bg-navy-blue-400 overflow-hidden">
          <Image src="/vascular-treatment.jpg" alt="Tratamento vascular" fill className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-navy-blue/70"></div>
          <div className="absolute inset-0 p-8 flex flex-col justify-center max-w-3xl mx-auto text-center">
            <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
              Especialistas em Escleroterapia com Espuma
            </h1>
            <p className="text-gray-200 mt-4 text-lg md:text-xl">
              Tratamento moderno e eficaz para varizes com resultados visíveis
            </p>
            <a
              href="https://wa.me/5575981619392?text=ol%C3%A1%2C%20vi%20o%20site%20da%20Inovamed%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20servi%C3%A7o%20de%20voc%C3%AAs."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-navy-blue font-semibold px-6 py-3 rounded-full mt-6 w-48 mx-auto text-center hover:bg-gray-100 transition inline-block"
            >
              Saiba mais
            </a>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-navy-blue mb-6">Excelência em Escleroterapia com foco em você</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              A Inovamed é uma empresa focada exclusivamente em escleroterapia, com equipe altamente capacitada e
              atendimento humanizado. Nossa missão é tratar varizes com qualidade, segurança e acolhimento. Somos
              referência em tratamento vascular estético e funcional.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-md h-80">
              <Image src="/inovamed-full-logo.png" alt="Inovamed Logo" fill className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Importance of Treatment Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-blue mb-6 text-center">
            Tecnologia e segurança no tratamento de varizes
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed text-center max-w-3xl mx-auto mb-12">
            A escleroterapia com espuma é um procedimento seguro, ambulatorial e eficaz no tratamento de varizes. A
            espuma promove a obliteração seletiva dos vasos comprometidos, com recuperação rápida e resultados visíveis.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md flex items-start">
              <div className="mr-4 bg-navy-blue text-white p-3 rounded-full">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy-blue mb-2">Procedimento rápido e eficaz</h3>
                <p className="text-gray-600">
                  Sessões com duração média de 30 minutos, permitindo o retorno imediato às atividades cotidianas.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md flex items-start">
              <div className="mr-4 bg-navy-blue text-white p-3 rounded-full">
                <ArrowUpRight className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy-blue mb-2">Menor tempo de recuperação</h3>
                <p className="text-gray-600">
                  Sem necessidade de internação ou afastamento prolongado, proporcionando conforto e praticidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 bg-navy-blue text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Você sabia?</h2>
          <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto mb-12">
            Mais de 30% da população brasileira sofre com problemas de circulação como varizes, dor, inchaço e sensação
            de peso nas pernas. A boa notícia é que existem tratamentos acessíveis e modernos para isso.
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-80 w-full">
              <Image
                src="/healthcare-professionals.jpg"
                alt="Equipe médica especializada"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex flex-col justify-between p-4">
                <div className="bg-gradient-to-t from-navy-blue/90 via-navy-blue/70 to-transparent absolute inset-0 rounded-lg"></div>

                <div className="relative z-10 mt-auto">
                  <div className="bg-navy-blue/80 p-3 rounded-md text-white text-center text-sm mt-2 mx-auto max-w-md">
                    <p className="font-semibold text-base mb-1">Profissionais qualificados para seu tratamento</p>
                    <p>
                      Nossa equipe é formada exclusivamente por cirurgiões vasculares com ampla experiência em
                      esclereroterapia
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-2">30%</h3>
                <p>da população brasileira sofre com problemas vasculares</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-2">70%</h3>
                <p>das mulheres acima de 30 anos apresentam algum grau de varizes</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-2">90%</h3>
                <p>dos pacientes relatam melhora significativa após o tratamento</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-blue mb-6 text-center">Por que escolher a Inovamed?</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="bg-navy-blue text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-navy-blue mb-2">Equipe médica especializada</h3>
              <p className="text-gray-600">Profissionais com formação específica em escleroterapia</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="bg-navy-blue text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-navy-blue mb-2">Atendimento humanizado</h3>
              <p className="text-gray-600">Cuidado individualizado e acolhedor em todas as etapas</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="bg-navy-blue text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-navy-blue mb-2">Segurança e alto padrão</h3>
              <p className="text-gray-600">Procedimentos realizados com rigorosos protocolos de segurança</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="bg-navy-blue text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <ClipboardCheck className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-navy-blue mb-2">Avaliação personalizada</h3>
              <p className="text-gray-600">Plano terapêutico adaptado às necessidades de cada paciente</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-blue mb-10 text-center">
            Perguntas mais comuns sobre escleroterapia
          </h2>

          <FAQ />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-blue text-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="h-12 relative w-48 mb-4">
                <Image src="/inovamed-text-logo.png" alt="Inovamed" fill className="object-contain" />
              </div>
              <p className="text-gray-300 max-w-md">
                Especialistas em escleroterapia com espuma para o tratamento de varizes.
              </p>
            </div>

            <div className="text-center md:text-right">
              <h3 className="text-lg font-bold mb-2">Endereço</h3>
              <address className="text-gray-300 not-italic">
                RUA JURACY MAGALHÃES, NÚMERO 560
                <br />
                BAIRRO PONTO CENTRAL
                <br />
                FEIRA DE SANTANA - CEP: 44075-115
                <br />
                <span className="text-xs">
                  INOVAMED SOLUÇÕES EM SAÚDE INTEGRADA
                  <br />
                  CNPJ 58.515.814/0001-49
                </span>
              </address>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">© {new Date().getFullYear()} Inovamed. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "O procedimento dói?",
      answer:
        "A escleroterapia com espuma é minimamente invasiva. Durante o procedimento, pode-se sentir um leve desconforto, semelhante a uma pequena picada. Utilizamos técnicas para minimizar qualquer sensação desagradável.",
    },
    {
      question: "Quantas sessões são necessárias?",
      answer:
        "O número de sessões varia de acordo com a extensão e gravidade das varizes. Em média, são necessárias de 3 a 6 sessões, com intervalos de 15 a 30 dias entre elas. Na consulta inicial, após avaliação completa, será definido um plano de tratamento personalizado.",
    },
    {
      question: "Posso trabalhar normalmente após o procedimento?",
      answer:
        "Sim. A escleroterapia com espuma permite o retorno imediato às atividades cotidianas. Recomendamos apenas evitar exercícios físicos intensos por 24-48 horas e seguir as orientações específicas fornecidas pelo médico.",
    },
    {
      question: "Quais são as contraindicações?",
      answer:
        "A escleroterapia pode ser contraindicada em casos de gravidez, amamentação, trombose venosa profunda recente, infecções locais, doenças sistêmicas graves ou alergia conhecida aos componentes utilizados. Uma avaliação médica completa é essencial para determinar a adequação do procedimento.",
    },
    {
      question: "O resultado é definitivo?",
      answer:
        "A escleroterapia trata as varizes existentes de forma eficaz, porém não impede o surgimento de novas varizes ao longo do tempo. Fatores genéticos, hormonais e hábitos de vida podem contribuir para o aparecimento de novos vasos. Consultas periódicas de manutenção são recomendadas para preservar os resultados.",
    },
  ]

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50 transition-colors"
            onClick={() => toggleFaq(index)}
          >
            <span className="font-medium text-navy-blue">{faq.question}</span>
            {openIndex === index ? (
              <ChevronUp className="w-5 h-5 text-navy-blue" />
            ) : (
              <ChevronDown className="w-5 h-5 text-navy-blue" />
            )}
          </button>

          {openIndex === index && (
            <div className="p-4 bg-gray-50 border-t border-gray-200">
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
