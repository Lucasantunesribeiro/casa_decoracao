import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Card, CardContent } from "@/components/ui/card"
import { getProductBySlug, produtos } from "@/lib/content"
import { SITE_CONFIG } from "@/lib/constants"
import { getProductSchema, getBreadcrumbSchema } from "@/lib/json-ld"
import { ArrowLeft } from "lucide-react"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return produtos.map((produto) => ({
    slug: produto.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const produto = getProductBySlug(slug)

  if (!produto) {
    return {
      title: "Produto não encontrado",
    }
  }

  return {
    title: `${produto.name} - ${SITE_CONFIG.name}`,
    description: produto.description,
    openGraph: {
      title: produto.name,
      description: produto.description,
      images: [produto.image],
    },
  }
}

export default async function ProdutoPage({ params }: PageProps) {
  const { slug } = await params
  const produto = getProductBySlug(slug)

  if (!produto) {
    notFound()
  }

  const relatedProducts = produtos
    .filter((p) => p.category === produto.category && p.id !== produto.id)
    .slice(0, 3)

  const productSchema = getProductSchema(produto)
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Catálogo", url: "/catalogo" },
    { name: produto.name, url: `/produto/${produto.slug}` },
  ])

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Breadcrumb */}
      <section className="py-6 border-b">
        <div className="container mx-auto px-4">
          <Link
            href="/catalogo"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={20} />
            Voltar ao Catálogo
          </Link>
        </div>
      </section>

      {/* Produto Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Galeria de Imagens */}
            <div className="space-y-4">
              {produto.images.map((img, idx) => (
                <div
                  key={idx}
                  className="relative aspect-square rounded-xl overflow-hidden bg-muted"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${img})` }}
                  />
                </div>
              ))}
            </div>

            {/* Informações do Produto */}
            <div className="lg:sticky lg:top-24 h-fit">
              <span className="text-sm text-muted-foreground">{produto.category}</span>
              <h1 className="text-4xl font-bold mt-2 mb-4">{produto.name}</h1>

              <div className="text-3xl font-bold mb-6">
                A partir de R$ {produto.priceFrom.toLocaleString("pt-BR")}
              </div>

              <p className="text-muted-foreground text-lg mb-8">{produto.description}</p>

              {/* Especificações */}
              <div className="bg-muted/50 rounded-xl p-6 mb-8">
                <h3 className="font-semibold text-lg mb-4">Especificações</h3>
                <dl className="space-y-3">
                  {produto.dimensions && (
                    <>
                      <dt className="text-sm text-muted-foreground">Dimensões</dt>
                      <dd className="font-medium">{produto.dimensions}</dd>
                    </>
                  )}
                  {produto.material && (
                    <>
                      <dt className="text-sm text-muted-foreground">Material</dt>
                      <dd className="font-medium">{produto.material}</dd>
                    </>
                  )}
                  {produto.colors && produto.colors.length > 0 && (
                    <>
                      <dt className="text-sm text-muted-foreground">Cores Disponíveis</dt>
                      <dd className="font-medium">{produto.colors.join(", ")}</dd>
                    </>
                  )}
                </dl>
              </div>

              <WhatsAppButton
                message={`Olá! Gostaria de saber mais sobre: ${produto.name}`}
                className="w-full text-lg py-4"
              >
                Quero um igual
              </WhatsAppButton>

              <p className="text-sm text-muted-foreground text-center mt-4">
                Entre em contato para consultar disponibilidade, valores e prazo de entrega
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Produtos Relacionados */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Você Também Pode Gostar</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((related) => (
                <Card key={related.id} className="overflow-hidden group">
                  <Link href={`/produto/${related.slug}`}>
                    <div className="relative aspect-square bg-muted overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{ backgroundImage: `url(${related.image})` }}
                      />
                    </div>
                  </Link>
                  <CardContent className="p-6">
                    <span className="text-sm text-muted-foreground">{related.category}</span>
                    <Link href={`/produto/${related.slug}`}>
                      <h3 className="text-xl font-bold mt-2 mb-2 hover:text-primary transition-colors">
                        {related.name}
                      </h3>
                    </Link>
                    <div className="text-lg font-semibold">
                      A partir de R$ {related.priceFrom.toLocaleString("pt-BR")}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
