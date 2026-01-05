import { Metadata } from "next"
import { ambientes } from "@/lib/content"
import { SITE_CONFIG } from "@/lib/constants"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: `Ambientes Inspiradores - ${SITE_CONFIG.name}`,
  description: "Confira nossa galeria de ambientes decorados com peças exclusivas. Inspire-se para transformar seu espaço.",
}

export default function AmbientesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-neutral-50 via-white to-neutral-100 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,0,0,0.02)_0%,transparent_50%)]" />
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-5xl relative">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-neutral-900 mb-6 tracking-tight">
            Ambientes Inspiradores
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed max-w-3xl mx-auto">
            Descubra como nossas peças transformam diferentes espaços em ambientes únicos.
            Cada projeto reflete uma história de design, sofisticação e personalidade.
          </p>
        </div>
      </section>

      {/* Ambientes Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-16">
            {ambientes.map((ambiente) => (
              <div key={ambiente.id} id={ambiente.slug} className="scroll-mt-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Imagens */}
                  <div className="space-y-4">
                    {ambiente.images.map((img, idx) => (
                      <div
                        key={idx}
                        className="relative aspect-[4/3] rounded-xl overflow-hidden bg-muted"
                      >
                        <div
                          className="absolute inset-0 bg-cover bg-center"
                          style={{ backgroundImage: `url(${img})` }}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Conteúdo */}
                  <div>
                    <span className="inline-block text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full mb-4">
                      {ambiente.style}
                    </span>
                    <h2 className="text-3xl font-bold mb-4">{ambiente.name}</h2>
                    <p className="text-muted-foreground text-lg mb-6">
                      {ambiente.description}
                    </p>
                    <WhatsAppButton message={`Olá! Gostei do ambiente "${ambiente.name}" e gostaria de criar algo similar.`}>
                      Quero um Ambiente Assim
                    </WhatsAppButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vamos Criar Seu Ambiente Ideal?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Nossa equipe está pronta para ajudar você a transformar seu espaço com uma curadoria personalizada
          </p>
          <WhatsAppButton message="Olá! Quero criar um ambiente personalizado com a Casa & Decoração.">
            Solicitar Curadoria
          </WhatsAppButton>
        </div>
      </section>
    </div>
  )
}
