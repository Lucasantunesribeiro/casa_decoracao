import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { produtos } from "@/lib/content"
import { SITE_CONFIG } from "@/lib/constants"

export const metadata: Metadata = {
  title: `Catálogo de Peças - ${SITE_CONFIG.name}`,
  description: "Confira nosso catálogo completo de móveis e peças de decoração exclusivas para transformar seu ambiente.",
}

export default function CatalogoPage() {
  const categories = Array.from(new Set(produtos.map(p => p.category)))

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-neutral-50 via-white to-neutral-100 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,0,0,0.02)_0%,transparent_50%)]" />
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-5xl relative">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-neutral-900 mb-6 tracking-tight">
            Catálogo de Peças
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed max-w-3xl mx-auto">
            Explore nossa seleção exclusiva de móveis e objetos de decoração.
            Cada peça é escolhida com cuidado para trazer elegância e autenticidade ao seu espaço.
          </p>
        </div>
      </section>

      {/* Categorias */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition-colors text-sm font-medium"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Produtos Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {produtos.map((produto) => (
              <Card key={produto.id} className="overflow-hidden group">
                <Link href={`/produto/${produto.slug}`}>
                  <div className="relative aspect-square bg-muted overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${produto.image})` }}
                    />
                  </div>
                </Link>
                <CardContent className="p-6">
                  <span className="text-sm text-muted-foreground">{produto.category}</span>
                  <Link href={`/produto/${produto.slug}`}>
                    <h3 className="text-xl font-bold mt-2 mb-2 hover:text-primary transition-colors">
                      {produto.name}
                    </h3>
                  </Link>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {produto.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold">
                      A partir de R$ {produto.priceFrom.toLocaleString("pt-BR")}
                    </span>
                  </div>
                  <WhatsAppButton
                    message={`Olá! Gostaria de saber mais sobre: ${produto.name}`}
                    className="w-full text-sm"
                  >
                    Quero um igual
                  </WhatsAppButton>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Não Encontrou o Que Procura?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Entre em contato e nossa equipe terá prazer em ajudar você a encontrar a peça perfeita
          </p>
          <WhatsAppButton message="Olá! Estou procurando uma peça específica e gostaria de ajuda.">
            Falar com Especialista
          </WhatsAppButton>
        </div>
      </section>
    </div>
  )
}
