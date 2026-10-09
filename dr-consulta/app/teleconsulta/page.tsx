import type { Metadata } from "next"
import type { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CalendarDays,
  Check,
  ChevronDown,
  ClipboardList,
  FileText,
  HeartPulse,
  MessageCircle,
  Monitor,
  Stethoscope,
  Video,
  Wifi,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Teleconsulta com Cirurgião Vascular | Inovamed",
  description:
    "Entenda como funciona a teleconsulta em cirurgia vascular da Inovamed: atendimento por videochamada, preparação e próximos passos. Fale com a equipe pelo WhatsApp.",
  keywords: "teleconsulta, cirurgia vascular, cirurgião vascular, Inovamed, consulta online",
  openGraph: {
    title: "Teleconsulta em Cirurgia Vascular | Inovamed",
    description: "Cuidado vascular por videochamada. Conheça o atendimento e converse com a Inovamed pelo WhatsApp.",
    type: "website",
    locale: "pt_BR",
  },
}

const contactUrl = `https://wa.me/5575981619392?text=${encodeURIComponent(
  "Olá! Vi a página de teleconsulta da Inovamed e gostaria de informações sobre o atendimento com cirurgião vascular, valores e disponibilidade."
)}`

const partnershipUrl = `https://wa.me/5575981619392?text=${encodeURIComponent(
  "Olá! Gostaria de conversar sobre teleconsultas em cirurgia vascular para o nosso município."
)}`

const focus = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-600"

function ContactButton({ children, dark = false, className = "" }: {
  children: ReactNode
  dark?: boolean
  className?: string
}) {
  return (
    <a
      href={contactUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3.5 text-center text-sm font-semibold transition-colors sm:text-base ${focus} ${dark ? "bg-navy-blue text-white hover:bg-navy-blue-600" : "bg-white text-navy-blue hover:bg-cyan-50"} ${className}`}
    >
      <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
      {children}
      <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
    </a>
  )
}

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Converse com a equipe",
    description: "Pelo WhatsApp, conte o que você procura e tire suas dúvidas sobre o atendimento, valores e disponibilidade.",
  },
  {
    number: "02",
    icon: CalendarDays,
    title: "Combine o atendimento",
    description: "Confirme as condições e o agendamento com a Inovamed. A equipe orientará você sobre o acesso à videochamada.",
  },
  {
    number: "03",
    icon: Video,
    title: "Converse com o especialista",
    description: "Durante a consulta, apresente suas queixas, seu histórico de saúde e os exames que já tiver, conforme orientação da equipe.",
  },
  {
    number: "04",
    icon: ClipboardList,
    title: "Entenda os próximos passos",
    description: "O médico orientará a continuidade do cuidado e avaliará a necessidade de exames, acompanhamento ou atendimento presencial.",
  },
]

const questions = [
  {
    question: "O que é a teleconsulta em cirurgia vascular?",
    answer: "É uma consulta médica por videochamada com cirurgião vascular. Você conversa sobre suas queixas e seu histórico, apresenta informações relevantes e recebe orientação médica. A adequação do atendimento a distância é avaliada pelo profissional.",
  },
  {
    question: "Como faço para agendar?",
    answer: "Clique em um dos botões de WhatsApp desta página. Nossa equipe informará a disponibilidade, os valores e as orientações para o agendamento. O contato pelo WhatsApp inicia a conversa; a confirmação do atendimento será feita pela equipe.",
  },
  {
    question: "A consulta acontece pelo WhatsApp?",
    answer: "Os botões desta página abrem o WhatsApp para informações e agendamento. A equipe confirmará como acessar a videochamada e quais recursos serão necessários para a consulta.",
  },
  {
    question: "Posso usar meu celular?",
    answer: "Você pode se preparar com um celular, tablet ou computador com câmera, microfone e acesso à internet. Confirme com a equipe a compatibilidade do dispositivo e se será necessário instalar algum aplicativo.",
  },
  {
    question: "Preciso ter exames antes da consulta?",
    answer: "Se você já tiver exames e relatórios, deixe-os organizados e pergunte à equipe como apresentá-los. A necessidade de novos exames será definida pelo médico conforme a avaliação do seu caso.",
  },
  {
    question: "A teleconsulta substitui o atendimento presencial?",
    answer: "A teleconsulta tem limites e pode precisar ser complementada por avaliação presencial. O médico poderá indicar exame físico, exames complementares ou uma consulta presencial quando necessário. Procedimentos como a escleroterapia são realizados presencialmente.",
  },
  {
    question: "Qual é o valor? Há convênios ou retorno incluído?",
    answer: "Consulte a equipe pelo WhatsApp para saber o valor, as formas de pagamento, eventuais modalidades de cobertura e as condições de acompanhamento ou retorno. Confirme essas informações antes de agendar.",
  },
  {
    question: "É possível conversar sobre atendimento para municípios?",
    answer: "Sim. Gestores e equipes municipais podem entrar em contato com a Inovamed para discutir a demanda e avaliar o formato de uma parceria para teleconsultas em cirurgia vascular.",
  },
]

export default function TeleconsultaPage() {
  return (
    <div className="min-h-screen bg-white text-navy-blue">
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:p-4">
        Ir para o conteúdo
      </a>

      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md">
        <nav aria-label="Navegação da teleconsulta" className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:gap-4 sm:px-6">
          <Link href="/" aria-label="Inovamed — página inicial" className={`flex shrink-0 items-center gap-2 rounded-lg ${focus}`}>
            <Image src="/inovamed-full-logo.png" alt="" width={40} height={40} className="h-9 w-9 object-contain sm:h-10 sm:w-10" />
            <span className="flex flex-col leading-none">
              <span className="text-base font-extrabold tracking-tight sm:text-lg">INOVA<span className="text-[#D64050]">MED</span></span>
              <span className="mt-1 text-[0.55rem] font-medium uppercase tracking-[0.15em] text-gray-500">Saúde Vascular</span>
            </span>
          </Link>
          <div className="hidden items-center gap-7 text-sm font-medium lg:flex">
            <a href="#como-funciona" className={`rounded hover:text-cyan-700 ${focus}`}>Como funciona</a>
            <a href="#preparo" className={`rounded hover:text-cyan-700 ${focus}`}>Como se preparar</a>
            <a href="#duvidas" className={`rounded hover:text-cyan-700 ${focus}`}>Dúvidas</a>
          </div>
          <a href={contactUrl} target="_blank" rel="noopener noreferrer" className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-navy-blue px-4 py-2.5 text-sm font-semibold text-white hover:bg-navy-blue-600 sm:px-5 ${focus}`}>
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            WhatsApp
          </a>
        </nav>
      </header>

      <main id="conteudo">
        <section className="relative overflow-hidden bg-navy-blue text-white">
          <div className="pointer-events-none absolute -right-32 top-0 h-[32rem] w-[32rem] rounded-full bg-cyan-600/10 blur-3xl" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-6 sm:px-6 sm:pb-20">
            <Link href="/" className={`inline-flex min-h-11 items-center gap-2 rounded text-sm text-gray-300 hover:text-white ${focus}`}>
              <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Voltar para a Inovamed
            </Link>
            <div className="mt-8 grid items-center gap-10 lg:mt-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-2 text-xs font-semibold tracking-wide text-cyan-100 sm:text-sm">
                  <Video className="h-4 w-4" aria-hidden="true" /> Teleconsulta em cirurgia vascular
                </p>
                <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
                  Mais perto de você.<br />
                  <span className="text-cyan-200">Mais cuidado com sua saúde vascular.</span>
                </h1>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg">
                  Agora, você também pode conversar com um cirurgião vascular da Inovamed por videochamada. Um espaço para ouvir suas queixas, avaliar seu histórico e orientar os próximos passos do seu cuidado.
                </p>
                <div className="mt-8 flex flex-col items-stretch gap-4 sm:items-start">
                  <ContactButton>Quero saber sobre a teleconsulta</ContactButton>
                  <p className="text-xs leading-relaxed text-gray-300 sm:text-sm">Consulte valores e disponibilidade com nossa equipe.</p>
                </div>
              </div>
              <div className="rounded-3xl border border-white/15 bg-white/5 p-5 sm:p-7">
                <div className="flex items-center gap-4 border-b border-white/15 pb-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-200 text-navy-blue"><Video className="h-7 w-7" aria-hidden="true" /></div>
                  <div><p className="text-xs font-medium uppercase tracking-widest text-cyan-200">Conexão para cuidar</p><p className="mt-1 text-xl font-semibold">Uma conversa com um especialista</p></div>
                </div>
                <ul className="space-y-6 py-6">
                  {[
                    ["Sua história importa", "Conte o que sente, suas dúvidas e os cuidados que já realiza."],
                    ["Avaliação individualizada", "O médico considera as informações disponíveis e os limites da consulta a distância."],
                    ["Orientação para continuar", "Entenda o que pode ser acompanhado e quando buscar avaliação presencial."],
                  ].map(([title, text]) => (
                    <li key={title} className="flex gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-cyan-200" aria-hidden="true" /><div><p className="font-semibold">{title}</p><p className="mt-1 text-sm leading-relaxed text-gray-300">{text}</p></div></li>
                  ))}
                </ul>
                <a href="#como-funciona" className={`flex min-h-12 items-center justify-between gap-3 rounded-xl bg-white/10 px-4 py-3 text-sm font-semibold hover:bg-white/15 ${focus}`}>Veja como funciona <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-gray-100 bg-gray-50 px-4 py-6 sm:px-6">
          <ul className="mx-auto grid max-w-7xl gap-5 text-sm font-medium sm:grid-cols-3">
            {[
              { icon: Video, text: "Atendimento por videochamada" },
              { icon: Stethoscope, text: "Com cirurgião vascular" },
              { icon: MessageCircle, text: "Informações pelo WhatsApp" },
            ].map(({ icon: Icon, text }) => <li key={text} className="flex items-center gap-3 sm:justify-center"><Icon className="h-5 w-5 shrink-0 text-cyan-700" aria-hidden="true" />{text}</li>)}
          </ul>
        </section>

        <section id="como-funciona" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-700">Do primeiro contato ao cuidado</p><h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Como funciona a teleconsulta</h2><p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">Você começa pelo WhatsApp. A equipe orienta o agendamento, e o atendimento médico acontece por videochamada.</p></div>
          <ol className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ number, icon: Icon, title, description }) => (
              <li key={number} className="border-t-2 border-gray-200 pt-5">
                <div className="flex items-center justify-between"><span className="text-3xl font-bold text-navy-blue/25">{number}</span><Icon className="h-6 w-6 text-cyan-700" aria-hidden="true" /></div>
                <h3 className="mt-5 text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-relaxed text-gray-600">{description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="bg-[#F4F7F9] px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-700">Um olhar para o seu caso</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Em que a consulta pode ajudar?</h2>
              <p className="mt-5 leading-relaxed text-gray-600">A conversa com o especialista pode fazer parte da avaliação e do acompanhamento da sua saúde vascular, conforme a necessidade de cada paciente.</p>
              <div className="mt-7 space-y-6">
                {[
                  { icon: HeartPulse, title: "Conversar sobre suas queixas", text: "Apresentar dúvidas sobre varizes, desconfortos nas pernas e seu histórico de saúde." },
                  { icon: FileText, title: "Entender exames e orientações", text: "Discutir exames já realizados e compreender as recomendações do médico." },
                  { icon: ClipboardList, title: "Organizar a continuidade do cuidado", text: "Avaliar os próximos passos e a possibilidade de acompanhamento a distância ou presencial." },
                ].map(({ icon: Icon, title, text }) => <div key={title} className="flex gap-4"><Icon className="mt-1 h-6 w-6 shrink-0 text-cyan-700" aria-hidden="true" /><div><h3 className="font-bold">{title}</h3><p className="mt-1 text-sm leading-relaxed text-gray-600">{text}</p></div></div>)}
              </div>
            </div>
            <figure className="overflow-hidden rounded-3xl bg-white shadow-sm">
              <div className="relative aspect-[4/3]"><Image src="/doctor-patient.jpg" alt="Imagem ilustrativa de uma conversa entre profissional de saúde e paciente" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" /></div>
              <figcaption className="p-5 sm:p-6"><p className="text-lg font-bold">Escuta, avaliação e orientação.</p><p className="mt-2 text-sm leading-relaxed text-gray-600">A modalidade mais adequada ao seu caso será definida pelo médico. Quando necessário, o cuidado continua presencialmente.</p><p className="mt-3 text-xs text-gray-500">Imagem ilustrativa.</p></figcaption>
            </figure>
          </div>
        </section>

        <section id="preparo" className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-700">Antes da videochamada</p><h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Prepare-se para aproveitar melhor a consulta</h2><p className="mt-5 leading-relaxed text-gray-600">Alguns cuidados simples ajudam na comunicação. A equipe confirmará as instruções específicas no agendamento.</p><div className="mt-7"><ContactButton dark>Tirar dúvidas com a equipe</ContactButton></div></div>
          <ul className="grid gap-5 sm:grid-cols-2">
            {[
              { icon: Wifi, title: "Internet e equipamento", text: "Separe um celular, tablet ou computador. Teste a conexão, a câmera e o microfone." },
              { icon: Monitor, title: "Um ambiente adequado", text: "Escolha um local reservado, tranquilo e bem iluminado, onde consiga ouvir e conversar." },
              { icon: FileText, title: "Informações à mão", text: "Organize documentos, exames anteriores e a lista dos medicamentos que utiliza." },
              { icon: ClipboardList, title: "Suas dúvidas anotadas", text: "Anote o que sente, quando começou e o que deseja perguntar ao especialista." },
            ].map(({ icon: Icon, title, text }) => <li key={title} className="rounded-2xl border border-gray-200 p-5"><Icon className="h-6 w-6 text-cyan-700" aria-hidden="true" /><h3 className="mt-4 font-bold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-gray-600">{text}</p></li>)}
          </ul>
        </section>

        <section className="px-4 pb-16 sm:px-6 sm:pb-24">
          <div className="mx-auto grid max-w-7xl gap-8 rounded-3xl bg-navy-blue p-6 text-white sm:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div><Building2 className="h-7 w-7 text-cyan-200" aria-hidden="true" /><p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">Para gestores municipais</p><h2 className="mt-3 text-2xl font-bold sm:text-3xl">Saúde vascular mais próxima da sua população</h2><p className="mt-4 max-w-2xl leading-relaxed text-gray-300">Quer avaliar a inclusão de teleconsultas em cirurgia vascular na rede do seu município? Converse com a Inovamed sobre a demanda, a organização do atendimento e as possibilidades de parceria.</p></div>
            <div className="lg:text-right"><a href={partnershipUrl} target="_blank" rel="noopener noreferrer" className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-center text-sm font-semibold hover:bg-white/10 sm:text-base ${focus}`}>Conversar sobre uma parceria <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" /></a></div>
          </div>
        </section>

        <section id="duvidas" className="bg-gray-50 px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-3xl"><div className="text-center"><p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-700">Para você decidir com clareza</p><h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Dúvidas frequentes</h2></div>
            <div className="mt-9 space-y-3">
              {questions.map(({ question, answer }) => <details key={question} className="group rounded-2xl border border-gray-200 bg-white"><summary className={`flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 rounded-2xl p-5 font-semibold text-navy-blue [&::-webkit-details-marker]:hidden ${focus}`}>{question}<ChevronDown className="h-5 w-5 shrink-0 text-gray-500 transition-transform group-open:rotate-180" aria-hidden="true" /></summary><p className="px-5 pb-5 text-sm leading-relaxed text-gray-600 sm:text-base">{answer}</p></details>)}
            </div>
            <p className="mt-7 text-sm leading-relaxed text-gray-600">A teleconsulta não é um canal de urgência. Em uma situação de urgência ou emergência, procure atendimento presencial imediato.</p>
            <a href="https://portal.cfm.org.br/noticias/apos-amplo-debate-cfm-regulamenta-pratica-da-telemedicina-no-brasil/" target="_blank" rel="noopener noreferrer" className={`mt-3 inline-block rounded text-xs text-gray-500 underline underline-offset-4 hover:text-navy-blue ${focus}`}>Saiba mais sobre telemedicina no Conselho Federal de Medicina.</a>
          </div>
        </section>

        <section className="bg-white px-4 py-16 text-center sm:px-6 sm:py-24">
          <div className="mx-auto max-w-2xl"><Video className="mx-auto h-9 w-9 text-cyan-700" aria-hidden="true" /><h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">Vamos conversar sobre o seu atendimento?</h2><p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">Tire suas dúvidas e consulte a disponibilidade de teleconsulta com cirurgião vascular. Nossa equipe orienta você sobre o próximo passo.</p><div className="mt-8"><ContactButton dark>Falar com a Inovamed pelo WhatsApp</ContactButton></div><p className="mt-4 text-sm text-gray-500">(75) 98161-9392</p></div>
        </section>
      </main>

      <footer className="border-t border-gray-200 bg-gray-50 px-4 py-8 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-gray-600 sm:flex-row sm:items-center sm:justify-between"><div><p className="font-semibold text-navy-blue">Inovamed Soluções em Saúde Integrada</p><p className="mt-1">CNPJ 58.515.814/0001-49 · Feira de Santana — BA</p></div><Link href="/" className={`inline-flex min-h-11 items-center gap-2 self-start rounded font-medium text-navy-blue ${focus}`}><ArrowLeft className="h-4 w-4" aria-hidden="true" /> Voltar ao site principal</Link></div>
      </footer>
    </div>
  )
}
