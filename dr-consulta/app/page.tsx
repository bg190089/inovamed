"use client"

import Image from "next/image"
import {
  ChevronDown,
  ChevronUp,
  MapPin,
  Stethoscope,
  Monitor,
  ClipboardList,
  Users,
  ShieldCheck,
  TrendingUp,
  Building2,
  HeartPulse,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  Menu,
  X,
} from "lucide-react"
import { useState, useEffect, useRef } from "react"

function AnimatedCounter({
  end,
  suffix = "",
  duration = 2000,
}: {
  end: number
  suffix?: string
  duration?: number
}) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    let startTime: number
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [started, end, duration])

  return (
    <span ref={ref}>
      {count.toLocaleString("pt-BR")}
      {suffix}
    </span>
  )
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Como funciona a parceria com o município?",
      answer:
        "A Inovamed firma convênio com a gestão municipal para oferecer o serviço de escleroterapia com espuma diretamente no município. Levamos toda a estrutura necessária — profissionais especializados, equipamentos de ultrassonografia e insumos — sem custo de infraestrutura para a prefeitura.",
    },
    {
      question: "Qual é o fluxo de atendimento?",
      answer:
        "Gerimos todo o processo: desde a triagem e agendamento dos pacientes encaminhados pela rede municipal, passando pela avaliação com ultrassonografia, até a execução do procedimento e acompanhamento pós-tratamento. O município não precisa se preocupar com logística.",
    },
    {
      question: "Quais profissionais realizam os procedimentos?",
      answer:
        "Nossa equipe é formada exclusivamente por cirurgiões vasculares com título de especialista. Todos os profissionais possuem registro ativo no CRM e seguem os protocolos mais rigorosos de segurança.",
    },
    {
      question: "O procedimento é seguro?",
      answer:
        "Sim. A escleroterapia com espuma é um procedimento ambulatorial, minimamente invasivo, reconhecido pela comunidade médica internacional. As sessões duram em média 30 minutos e o paciente retorna às atividades normais no mesmo dia.",
    },
    {
      question: "Quais os resultados esperados?",
      answer:
        "Mais de 90% dos pacientes relatam melhora significativa dos sintomas — dor, inchaço e sensação de peso nas pernas — já nas primeiras sessões. O tratamento também previne complicações mais graves como trombose e úlceras venosas.",
    },
    {
      question: "Quanto custa para o município?",
      answer:
        "Trabalhamos com modelos flexíveis de parceria. Entre em contato conosco para receber uma proposta personalizada de acordo com a demanda e realidade do seu município.",
    },
  ]

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-xl overflow-hidden bg-white transition-shadow hover:shadow-md"
        >
          <button
            className="w-full flex justify-between items-center p-4 sm:p-5 text-left hover:bg-gray-50/50 transition-colors"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span className="font-semibold text-navy-blue pr-4 text-sm sm:text-base">
              {faq.question}
            </span>
            {openIndex === index ? (
              <ChevronUp className="w-5 h-5 text-navy-blue shrink-0" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
            )}
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-4 sm:px-5 pb-4 sm:pb-5">
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function ProcessStep({
  number,
  icon: Icon,
  title,
  description,
}: {
  number: string
  icon: React.ElementType
  title: string
  description: string
}) {
  return (
    <div className="relative flex flex-col items-center text-center group">
      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-navy-blue text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
        <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
      </div>
      <span className="text-xs font-bold text-navy-blue/40 uppercase tracking-widest mb-1">
        Etapa {number}
      </span>
      <h3 className="text-base sm:text-lg font-bold text-navy-blue mb-2">
        {title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
        {description}
      </p>
    </div>
  )
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="bg-white min-h-screen flex flex-col antialiased">
      {/* ========== NAVBAR ========== */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 relative shrink-0">
              <Image
                src="/inovamed-full-logo.png"
                alt="Inovamed"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[1.1rem] font-extrabold tracking-tight">
                <span className="text-[#1D2A3C]">INOVA</span>
                <span className="text-[#D64050]">MED</span>
              </span>
              <span className="text-[0.55rem] text-gray-400 font-medium tracking-[0.15em] uppercase">
                Saúde Vascular
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#sobre"
              className="text-sm text-gray-600 hover:text-navy-blue transition-colors font-medium"
            >
              Sobre
            </a>
            <a
              href="#servico"
              className="text-sm text-gray-600 hover:text-navy-blue transition-colors font-medium"
            >
              Serviço
            </a>
            <a
              href="#resultados"
              className="text-sm text-gray-600 hover:text-navy-blue transition-colors font-medium"
            >
              Resultados
            </a>
            <a
              href="#faq"
              className="text-sm text-gray-600 hover:text-navy-blue transition-colors font-medium"
            >
              FAQ
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/5575981619392?text=ol%C3%A1%2C%20vi%20o%20site%20da%20Inovamed%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20servi%C3%A7o%20de%20voc%C3%AAs."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex bg-navy-blue text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-navy-blue-600 transition-all hover:shadow-lg"
            >
              Fale conosco
            </a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 text-navy-blue"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-80 border-t border-gray-100" : "max-h-0"
          }`}
        >
          <div className="px-4 py-4 space-y-1 bg-white">
            {[
              { href: "#sobre", label: "Sobre" },
              { href: "#servico", label: "Serviço" },
              { href: "#resultados", label: "Resultados" },
              { href: "#faq", label: "FAQ" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 px-3 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5575981619392?text=ol%C3%A1%2C%20vi%20o%20site%20da%20Inovamed%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20servi%C3%A7o%20de%20voc%C3%AAs."
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-navy-blue text-white font-semibold py-3 px-4 rounded-full mt-2"
            >
              Fale conosco
            </a>
          </div>
        </div>
      </nav>

      {/* ========== HERO ========== */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center pt-16">
        <div className="absolute inset-0">
          <Image
            src="/vascular-treatment.jpg"
            alt="Tratamento vascular"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-blue via-navy-blue/95 to-navy-blue/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 text-xs sm:text-sm font-medium px-3 sm:px-4 py-2 rounded-full mb-5 sm:mb-6 border border-white/20">
              <HeartPulse className="w-4 h-4" />
              <span>Saúde vascular para o seu município</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              Escleroterapia de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                excelência
              </span>{" "}
              levada até você
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mt-5 sm:mt-6 leading-relaxed max-w-xl">
              Levamos ao seu município profissionais especializados,
              ultrassonografia de última geração e gestão completa do fluxo de
              atendimento — da triagem à execução do serviço.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 sm:mt-10">
              <a
                href="https://wa.me/5575981619392?text=ol%C3%A1%2C%20vi%20o%20site%20da%20Inovamed%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20servi%C3%A7o%20de%20voc%C3%AAs."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-navy-blue font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full hover:bg-gray-100 transition-all hover:shadow-xl text-sm sm:text-base"
              >
                Solicitar proposta
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#servico"
                className="inline-flex items-center justify-center gap-2 text-white font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border border-white/30 hover:bg-white/10 transition-all text-sm sm:text-base"
              >
                Como funciona
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========== TRUST BAR ========== */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {[
            { value: 5000, suffix: "+", label: "Pacientes atendidos" },
            { value: 90, suffix: "%+", label: "Taxa de satisfação" },
            { value: 100, suffix: "%", label: "Especialistas titulados" },
            { value: 30, suffix: "min", label: "Tempo médio por sessão" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-blue">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-xs sm:text-sm text-gray-500 mt-1 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========== SOBRE ========== */}
      <section id="sobre" className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <span className="text-sm font-bold text-navy-blue/50 uppercase tracking-widest">
              Quem somos
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-blue mt-3 leading-tight">
              Uma solução completa em escleroterapia para a saúde pública
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mt-5 sm:mt-6">
              A Inovamed é uma empresa consolidada no serviço de escleroterapia
              com espuma, com milhares de vidas transformadas em todo o Brasil.
              Nosso diferencial está na entrega completa: levamos ao seu
              município uma equipe de cirurgiões vasculares com título de
              especialista, equipamentos de ultrassonografia de última geração e
              toda a gestão operacional — da triagem ao pós-procedimento.
            </p>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mt-4">
              Para o gestor municipal, isso significa oferecer um serviço de
              saúde de alto impacto à população sem necessidade de investir em
              infraestrutura ou capacitação especializada.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
              {[
                "Cirurgiões vasculares com título de especialista",
                "Ultrassonografia de última geração",
                "Gestão completa do fluxo",
                "Sem custo de infraestrutura",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md aspect-square bg-gradient-to-br from-navy-blue-50 to-gray-50 rounded-3xl flex items-center justify-center p-12 shadow-inner">
              <Image
                src="/inovamed-full-logo.png"
                alt="Inovamed Logo"
                fill
                className="object-contain p-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========== SERVIÇO ========== */}
      <section id="servico" className="py-16 sm:py-24 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <span className="text-sm font-bold text-navy-blue/50 uppercase tracking-widest">
              Nosso Serviço
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-blue mt-3 leading-tight">
              Como levamos saúde vascular ao seu município
            </h2>
            <p className="text-gray-500 text-base sm:text-lg mt-4">
              Um modelo pronto, testado e eficiente — você solicita, nós
              executamos.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <ProcessStep
              number="01"
              icon={Building2}
              title="Parceria firmada"
              description="Convênio com a gestão municipal para definir demanda, cronograma e logística de atendimento."
            />
            <ProcessStep
              number="02"
              icon={ClipboardList}
              title="Triagem e agendamento"
              description="Organizamos toda a fila de pacientes encaminhados pela rede municipal, com agendamento eficiente."
            />
            <ProcessStep
              number="03"
              icon={Monitor}
              title="Avaliação com ultrassom"
              description="Avaliação vascular completa com ultrassonografia de última geração diretamente no município."
            />
            <ProcessStep
              number="04"
              icon={Stethoscope}
              title="Procedimento"
              description="Execução da escleroterapia com espuma por cirurgiões vasculares especializados, com acompanhamento pós."
            />
          </div>
        </div>
      </section>

      {/* ========== BENEFÍCIOS ========== */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <span className="text-sm font-bold text-navy-blue/50 uppercase tracking-widest">
              Para gestores municipais
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-blue mt-3 leading-tight">
              Vantagens de levar a Inovamed ao seu município
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                icon: MapPin,
                title: "Atendimento local",
                description:
                  "Os pacientes não precisam se deslocar para grandes centros. O tratamento acontece dentro do próprio município.",
              },
              {
                icon: Users,
                title: "Profissionais de excelência",
                description:
                  "Cirurgiões vasculares com título de especialista, garantindo segurança e qualidade no atendimento.",
              },
              {
                icon: ShieldCheck,
                title: "Zero burocracia operacional",
                description:
                  "Cuidamos de todo o fluxo — equipamentos, insumos, agendamento e execução. O município foca na gestão.",
              },
              {
                icon: TrendingUp,
                title: "Alto impacto social",
                description:
                  "Mais de 30% da população sofre com varizes. Oferecer tratamento acessível é um diferencial para a saúde pública municipal.",
              },
              {
                icon: Monitor,
                title: "Tecnologia de ponta",
                description:
                  "Ultrassonografia portátil de última geração para diagnóstico preciso e procedimentos ecoguiados com máxima segurança.",
              },
              {
                icon: HeartPulse,
                title: "Resultados comprovados",
                description:
                  "Milhares de pacientes atendidos com taxa de satisfação acima de 90%. Resultados visíveis desde as primeiras sessões.",
              },
            ].map((benefit, i) => (
              <div
                key={i}
                className="group bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 hover:shadow-xl hover:border-navy-blue/10 transition-all duration-300"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-navy-blue/5 text-navy-blue flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-navy-blue group-hover:text-white transition-all duration-300">
                  <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-navy-blue mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== IMPACTO ========== */}
      <section
        id="resultados"
        className="py-16 sm:py-24 px-4 sm:px-6 bg-navy-blue text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <span className="text-sm font-bold text-white/50 uppercase tracking-widest">
              Impacto
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 leading-tight">
              O problema é real — e a solução também
            </h2>
            <p className="text-gray-300 text-base sm:text-lg mt-4">
              A doença venosa crônica atinge milhões de brasileiros. Com a
              Inovamed, seu município pode oferecer tratamento especializado e
              transformar a qualidade de vida da população.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-center border border-white/10">
              <p className="text-4xl sm:text-5xl font-bold mb-2 sm:mb-3">30%</p>
              <p className="text-gray-300 text-sm sm:text-base">
                da população brasileira sofre com insuficiência venosa
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-center border border-white/10">
              <p className="text-4xl sm:text-5xl font-bold mb-2 sm:mb-3">70%</p>
              <p className="text-gray-300 text-sm sm:text-base">
                das mulheres acima de 30 anos apresentam algum grau de varizes
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-center border border-white/10">
              <p className="text-4xl sm:text-5xl font-bold mb-2 sm:mb-3">
                90%+
              </p>
              <p className="text-gray-300 text-sm sm:text-base">
                dos nossos pacientes relatam melhora significativa após o
                tratamento
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-navy-blue-50 via-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-blue leading-tight">
            Leve saúde vascular de qualidade para a sua população
          </h2>
          <p className="text-gray-500 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
            Entre em contato com nossa equipe e receba uma proposta
            personalizada para o seu município. Sem burocracia, sem investimento
            em infraestrutura.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-8 sm:mt-10">
            <a
              href="https://wa.me/5575981619392?text=ol%C3%A1%2C%20vi%20o%20site%20da%20Inovamed%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20servi%C3%A7o%20de%20voc%C3%AAs."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-navy-blue text-white font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full hover:bg-navy-blue-600 transition-all hover:shadow-xl text-sm sm:text-base"
            >
              <Phone className="w-4 h-4" />
              Solicitar proposta via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section id="faq" className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <span className="text-sm font-bold text-navy-blue/50 uppercase tracking-widest">
              Dúvidas frequentes
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-blue mt-3">
              Perguntas e respostas
            </h2>
          </div>
          <FAQ />
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="bg-navy-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-12">
            <div>
              <div className="flex items-center gap-2 mb-5 sm:mb-6">
                <div className="h-8 w-8 relative shrink-0">
                  <Image
                    src="/inovamed-full-logo.png"
                    alt="Inovamed"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-base font-extrabold tracking-tight">
                    <span className="text-white">INOVA</span>
                    <span className="text-[#D64050]">MED</span>
                  </span>
                  <span className="text-[0.5rem] text-gray-400 font-medium tracking-[0.15em] uppercase">
                    Saúde Vascular
                  </span>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Empresa consolidada em escleroterapia com espuma, levando
                profissionais de excelência e tecnologia de última geração a
                municípios de todo o Brasil.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-gray-300">
                Navegação
              </h3>
              <div className="space-y-3">
                <a
                  href="#sobre"
                  className="block text-gray-400 text-sm hover:text-white transition-colors"
                >
                  Sobre a Inovamed
                </a>
                <a
                  href="#servico"
                  className="block text-gray-400 text-sm hover:text-white transition-colors"
                >
                  Nosso Serviço
                </a>
                <a
                  href="#resultados"
                  className="block text-gray-400 text-sm hover:text-white transition-colors"
                >
                  Resultados
                </a>
                <a
                  href="#faq"
                  className="block text-gray-400 text-sm hover:text-white transition-colors"
                >
                  Perguntas Frequentes
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-gray-300">
                Contato
              </h3>
              <address className="not-italic space-y-3">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-gray-500 shrink-0 mt-0.5" />
                  <span className="text-gray-400 text-sm">
                    Rua Juracy Magalhães, 560 — Ponto Central
                    <br />
                    Feira de Santana — CEP 44075-115
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-400 text-sm">
                    (75) 98161-9392
                  </span>
                </div>
              </address>
              <p className="text-gray-600 text-xs mt-6">
                Inovamed Soluções em Saúde Integrada
                <br />
                CNPJ 58.515.814/0001-49
              </p>
            </div>
          </div>
          <div className="border-t border-white/10 mt-10 sm:mt-12 pt-6 sm:pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Inovamed. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
