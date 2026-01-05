import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { depoimentos } from "@/lib/content"

export function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O Que Dizem Nossos Clientes</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Satisfação garantida em cada projeto
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {depoimentos.map((depoimento) => (
            <Card key={depoimento.id}>
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: depoimento.rating }).map((_, i) => (
                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{depoimento.text}"</p>
                <p className="font-semibold">{depoimento.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
