import { Hero } from "@/components/sections/hero"
import { AmbientesGallery } from "@/components/sections/ambientes-gallery"
import { FeaturedProducts } from "@/components/sections/featured-products"
import { HowItWorks } from "@/components/sections/how-it-works"
import { Testimonials } from "@/components/sections/testimonials"
import { CTAFinal } from "@/components/sections/cta-final"
import { getLocalBusinessSchema } from "@/lib/json-ld"

export default function Home() {
  const schema = getLocalBusinessSchema()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Hero />
      <AmbientesGallery />
      <FeaturedProducts />
      <HowItWorks />
      <Testimonials />
      <CTAFinal />
    </>
  )
}
