import Link from "next/link"
import { SITE_CONFIG } from "@/lib/constants"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="container mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand - Ocupa mais espaço */}
          <div className="lg:col-span-5">
            <h3 className="text-3xl font-serif font-bold text-white mb-4">
              {SITE_CONFIG.name}
            </h3>
            <p className="text-neutral-400 leading-relaxed mb-6 max-w-md">
              Transformamos ambientes com peças exclusivas e curadoria personalizada.
              Cada móvel conta uma história única de design e sofisticação.
            </p>
            <div className="flex flex-col gap-2 text-sm text-neutral-400">
              <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-white transition-colors">
                {SITE_CONFIG.email}
              </a>
              <p>{SITE_CONFIG.address}</p>
              <a href={`https://wa.me/${SITE_CONFIG.whatsapp}`} className="hover:text-white transition-colors">
                WhatsApp: (21) 99680-5944
              </a>
            </div>
          </div>

          {/* Links - Navegação */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/ambientes" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Ambientes
                </Link>
              </li>
              <li>
                <Link href="/catalogo" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Catálogo
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Links - Categorias */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Categorias
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/catalogo" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Poltronas
                </Link>
              </li>
              <li>
                <Link href="/catalogo" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Mesas
                </Link>
              </li>
              <li>
                <Link href="/catalogo" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Iluminação
                </Link>
              </li>
              <li>
                <Link href="/catalogo" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Decoração
                </Link>
              </li>
            </ul>
          </div>

          {/* Links - Atendimento */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Atendimento
            </h4>
            <p className="text-sm text-neutral-400 mb-4">
              Segunda a Sexta: 9h às 18h<br />
              Sábado: 9h às 13h
            </p>
            <p className="text-sm text-neutral-500">
              Site demonstrativo com imagens ilustrativas
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-neutral-800">
          <p className="text-sm text-neutral-500 text-center">
            &copy; {currentYear} {SITE_CONFIG.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
