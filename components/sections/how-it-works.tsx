import { Search, MessageSquare, Truck } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: "Curadoria Personalizada",
      description: "Nossa equipe seleciona peças exclusivas baseadas no seu estilo e necessidades"
    },
    {
      icon: MessageSquare,
      title: "Orçamento via WhatsApp",
      description: "Envie suas preferências e receba um orçamento personalizado rapidamente"
    },
    {
      icon: Truck,
      title: "Entrega Segura",
      description: "Suas peças são entregues com todo cuidado e segurança no conforto da sua casa"
    }
  ]

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Como Funciona</h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Processo simples e personalizado para transformar seu ambiente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/10 mb-4">
                <step.icon size={32} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-primary-foreground/80">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
