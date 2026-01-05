export interface Product {
  id: string
  slug: string
  name: string
  description: string
  category: string
  priceFrom: number
  image: string
  images: string[]
  featured: boolean
  dimensions?: string
  material?: string
  colors?: string[]
}

export interface Ambiente {
  id: string
  slug: string
  name: string
  description: string
  image: string
  images: string[]
  style: string
}

export interface Testimonial {
  id: string
  name: string
  text: string
  rating: number
  image?: string
}

export const produtos: Product[] = [
  {
    id: "1",
    slug: "poltrona-veludo-esmeralda",
    name: "Poltrona Veludo Esmeralda",
    description: "Poltrona em veludo de alta qualidade com pés em madeira maciça. Perfeita para salas de estar e quartos sofisticados.",
    category: "Poltronas",
    priceFrom: 2890,
    image: "/produtos/poltrona-esmeralda.jpg",
    images: ["/produtos/poltrona-esmeralda.jpg", "/produtos/poltrona-esmeralda-2.jpg"],
    featured: true,
    dimensions: "85cm x 90cm x 95cm",
    material: "Veludo e Madeira Maciça",
    colors: ["Esmeralda", "Mostarda", "Terracota"]
  },
  {
    id: "2",
    slug: "mesa-centro-marmore",
    name: "Mesa de Centro Mármore Carrara",
    description: "Mesa de centro com tampo em mármore Carrara legítimo e estrutura em metal dourado escovado.",
    category: "Mesas",
    priceFrom: 4590,
    image: "/produtos/mesa-marmore.jpg",
    images: ["/produtos/mesa-marmore.jpg", "/produtos/mesa-marmore-2.jpg"],
    featured: true,
    dimensions: "120cm x 60cm x 45cm",
    material: "Mármore Carrara e Metal Dourado",
  },
  {
    id: "3",
    slug: "luminaria-arco-dourada",
    name: "Luminária de Arco Dourada",
    description: "Luminária de piso com arco ajustável, acabamento dourado e cúpula em linho natural.",
    category: "Iluminação",
    priceFrom: 1790,
    image: "/produtos/luminaria-arco.jpg",
    images: ["/produtos/luminaria-arco.jpg"],
    featured: true,
    dimensions: "Base 35cm x Altura 180-220cm",
    material: "Metal Dourado e Linho",
  },
  {
    id: "4",
    slug: "aparador-laca-preta",
    name: "Aparador Laca Preta",
    description: "Aparador minimalista com acabamento em laca preta brilhante e puxadores em latão.",
    category: "Aparadores",
    priceFrom: 3290,
    image: "/produtos/aparador-laca.jpg",
    images: ["/produtos/aparador-laca.jpg"],
    featured: false,
    dimensions: "150cm x 45cm x 85cm",
    material: "MDF Laqueado e Latão",
  },
  {
    id: "5",
    slug: "espelho-bronze-redondo",
    name: "Espelho Bronze Redondo",
    description: "Espelho redondo com moldura em bronze envelhecido, perfeito para criar pontos focais.",
    category: "Espelhos",
    priceFrom: 890,
    image: "/produtos/espelho-bronze.jpg",
    images: ["/produtos/espelho-bronze.jpg"],
    featured: true,
    dimensions: "Diâmetro 80cm",
    material: "Bronze Envelhecido e Espelho",
  },
  {
    id: "6",
    slug: "conjunto-quadros-abstratos",
    name: "Conjunto Quadros Abstratos",
    description: "Trio de quadros com arte abstrata em tons terrosos, molduras em madeira natural.",
    category: "Arte",
    priceFrom: 1290,
    image: "/produtos/quadros-abstratos.jpg",
    images: ["/produtos/quadros-abstratos.jpg"],
    featured: false,
    dimensions: "60cm x 80cm cada",
    material: "Impressão Fine Art e Madeira",
  }
]

export const ambientes: Ambiente[] = [
  {
    id: "1",
    slug: "sala-estar-contemporanea",
    name: "Sala de Estar Contemporânea",
    description: "Ambiente elegante que equilibra conforto e sofisticação com peças atemporais.",
    image: "/ambientes/sala-contemporanea.jpg",
    images: ["/ambientes/sala-contemporanea.jpg", "/ambientes/sala-contemporanea-2.jpg"],
    style: "Contemporâneo"
  },
  {
    id: "2",
    slug: "quarto-minimalista",
    name: "Quarto Minimalista",
    description: "Espaço sereno com paleta neutra e móveis de linhas limpas para relaxamento total.",
    image: "/ambientes/quarto-minimalista.jpg",
    images: ["/ambientes/quarto-minimalista.jpg"],
    style: "Minimalista"
  },
  {
    id: "3",
    slug: "home-office-sofisticado",
    name: "Home Office Sofisticado",
    description: "Escritório residencial que inspira produtividade com toque de elegância.",
    image: "/ambientes/home-office.jpg",
    images: ["/ambientes/home-office.jpg"],
    style: "Moderno"
  },
  {
    id: "4",
    slug: "sala-jantar-boho",
    name: "Sala de Jantar Boho Chic",
    description: "Ambiente acolhedor com mix de texturas naturais e peças artesanais.",
    image: "/ambientes/jantar-boho.jpg",
    images: ["/ambientes/jantar-boho.jpg"],
    style: "Boho"
  }
]

export const depoimentos: Testimonial[] = [
  {
    id: "1",
    name: "Marina Silva",
    text: "A curadoria foi impecável! Conseguiram capturar exatamente o estilo que eu queria para minha sala. As peças têm qualidade excepcional.",
    rating: 5,
  },
  {
    id: "2",
    name: "Roberto Mendes",
    text: "Atendimento personalizado e ágil. O processo todo pelo WhatsApp foi muito prático, desde o orçamento até a entrega.",
    rating: 5,
  },
  {
    id: "3",
    name: "Juliana Costa",
    text: "Transformaram meu home office em um espaço sofisticado e funcional. Recomendo muito!",
    rating: 5,
  }
]

export const getFeaturedProducts = () => produtos.filter(p => p.featured)

export const getProductBySlug = (slug: string) => produtos.find(p => p.slug === slug)

export const getAmbienteBySlug = (slug: string) => ambientes.find(a => a.slug === slug)
