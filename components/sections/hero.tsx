import { WhatsAppButton } from "@/components/whatsapp-button"

export function Hero() {
  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-bg.jpg')"
        }}
      />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto" style={{ textShadow: "0 4px 12px rgba(0,0,0,0.8)" }}>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Transforme seu ambiente com peças exclusivas
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Curadoria personalizada de móveis e decoração para criar espaços únicos
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <WhatsAppButton message="Olá! Quero uma curadoria personalizada para meu ambiente.">
            Solicitar Curadoria
          </WhatsAppButton>
          <a
            href="/catalogo"
            className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium rounded-md px-6 py-3 transition-colors border border-white/30"
          >
            Ver Catálogo
          </a>
        </div>
      </div>
    </section>
  )
}
