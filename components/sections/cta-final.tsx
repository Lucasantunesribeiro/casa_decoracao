import { WhatsAppButton } from "@/components/whatsapp-button"

export function CTAFinal() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para Transformar Seu Espaço?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Entre em contato agora e receba uma curadoria personalizada para o seu ambiente
          </p>
          <WhatsAppButton message="Olá! Quero transformar meu ambiente com peças exclusivas da Casa & Decoração.">
            Falar com Especialista
          </WhatsAppButton>
        </div>
      </div>
    </section>
  )
}
