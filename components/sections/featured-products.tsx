import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { getFeaturedProducts } from "@/lib/content"

export function FeaturedProducts() {
  const featured = getFeaturedProducts()

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Peças em Destaque</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Seleção especial de móveis e decoração exclusivos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((produto) => (
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
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold">
                    A partir de R$ {produto.priceFrom.toLocaleString("pt-BR")}
                  </span>
                </div>
                <WhatsAppButton
                  message={`Olá! Gostaria de saber mais sobre: ${produto.name}`}
                  className="w-full mt-4 text-sm"
                >
                  Quero um igual
                </WhatsAppButton>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/catalogo"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground font-medium rounded-md px-8 py-3 hover:bg-primary/90 transition-colors"
          >
            Ver Catálogo Completo
          </Link>
        </div>
      </div>
    </section>
  )
}
