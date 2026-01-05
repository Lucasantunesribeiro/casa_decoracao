import Link from "next/link"
import { ambientes } from "@/lib/content"

export function AmbientesGallery() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-accent/20 via-background to-secondary/30 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.02)_0%,transparent_70%)]" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-foreground/90 to-foreground bg-clip-text text-transparent">
            Ambientes Inspiradores
          </h2>
          <p className="text-foreground/70 text-lg md:text-xl max-w-2xl mx-auto">
            Descubra como nossas peças transformam diferentes espaços em ambientes únicos e sofisticados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ambientes.map((ambiente) => (
            <Link
              key={ambiente.id}
              href={`/ambientes#${ambiente.slug}`}
              className="group relative overflow-hidden rounded-xl aspect-[4/3] bg-muted"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${ambiente.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}>
                <span className="text-sm font-medium text-white mb-2 block">{ambiente.style}</span>
                <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">{ambiente.name}</h3>
                <p className="text-white drop-shadow-md">{ambiente.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/ambientes"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground font-medium rounded-md px-8 py-3 hover:bg-primary/90 transition-colors"
          >
            Ver Todos os Ambientes
          </Link>
        </div>
      </div>
    </section>
  )
}
