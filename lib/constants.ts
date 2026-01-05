export const SITE_CONFIG = {
  name: "Casa & Decoração",
  description: "Peças exclusivas e curadoria personalizada para transformar seu ambiente",
  url: "https://casaedecoração.com.br",
  whatsapp: "5521996805944",
  email: "contato@casaedecoração.com.br",
  address: "Rio de Janeiro, RJ",
}

export const WHATSAPP_URL = `https://wa.me/${SITE_CONFIG.whatsapp}`

export const getWhatsAppLink = (message: string) => {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`
}
