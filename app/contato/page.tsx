import { Metadata } from "next"
import { SITE_CONFIG } from "@/lib/constants"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Mail, MapPin, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: `Contato - ${SITE_CONFIG.name}`,
  description: "Entre em contato conosco para transformar seu ambiente com peças exclusivas e curadoria personalizada.",
}

export default function ContatoPage() {
  const contactInfo = [
    {
      icon: Mail,
      title: "E-mail",
      content: SITE_CONFIG.email,
      action: `mailto:${SITE_CONFIG.email}`,
    },
    {
      icon: MapPin,
      title: "Localização",
      content: SITE_CONFIG.address,
    },
    {
      icon: Clock,
      title: "Horário de Atendimento",
      content: "Segunda a Sexta: 9h às 18h\nSábado: 9h às 13h",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-neutral-50 via-white to-neutral-100 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.02)_0%,transparent_50%)]" />
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-5xl relative">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-neutral-900 mb-6 tracking-tight">
            Entre em Contato
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed max-w-3xl mx-auto">
            Estamos prontos para ajudar você a transformar seu ambiente com peças exclusivas.
            Entre em contato e receba uma curadoria personalizada para o seu projeto.
          </p>
        </div>
      </section>

      {/* WhatsApp CTA Principal */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto overflow-hidden">
            <div className="bg-green-600 text-white p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Atendimento Rápido via WhatsApp</h2>
              <p className="text-white/90 mb-6 text-lg">
                Fale diretamente com nossa equipe e receba atendimento personalizado
              </p>
              <WhatsAppButton
                message="Olá! Gostaria de falar com um especialista da Casa & Decoração."
                className="bg-white text-green-700 font-semibold hover:bg-gray-50 shadow-lg"
              >
                Iniciar Conversa no WhatsApp
              </WhatsAppButton>
            </div>
          </Card>
        </div>
      </section>

      {/* Informações de Contato */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Outras Formas de Contato</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {contactInfo.map((info, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <info.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                  {info.action ? (
                    <a
                      href={info.action}
                      className="text-muted-foreground hover:text-primary transition-colors whitespace-pre-line"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-muted-foreground whitespace-pre-line">{info.content}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Perguntas Frequentes</h2>
          <div className="space-y-6">
            {[
              {
                question: "Como funciona o processo de curadoria?",
                answer:
                  "Entre em contato via WhatsApp, conte-nos sobre seu estilo e necessidades. Nossa equipe selecionará peças exclusivas para seu ambiente e enviará um orçamento personalizado.",
              },
              {
                question: "Qual o prazo de entrega?",
                answer:
                  "O prazo varia de acordo com a peça e localização. Informamos o prazo exato no orçamento, geralmente entre 15 a 30 dias úteis.",
              },
              {
                question: "Vocês fazem projetos completos?",
                answer:
                  "Sim! Oferecemos desde a compra de peças individuais até a curadoria completa de ambientes. Entre em contato para conversarmos sobre seu projeto.",
              },
              {
                question: "Como são os valores das peças?",
                answer:
                  "Cada peça tem valores específicos que variam de acordo com materiais e acabamentos. Entre em contato para receber um orçamento detalhado.",
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ainda tem dúvidas?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Nossa equipe está pronta para responder todas as suas perguntas
          </p>
          <WhatsAppButton message="Olá! Tenho algumas dúvidas sobre os serviços da Casa & Decoração.">
            Falar com Especialista
          </WhatsAppButton>
        </div>
      </section>
    </div>
  )
}
