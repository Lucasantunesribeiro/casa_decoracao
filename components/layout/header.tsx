"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { SITE_CONFIG } from "@/lib/constants"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: "/", label: "Home" },
    { href: "/ambientes", label: "Ambientes" },
    { href: "/catalogo", label: "Catálogo" },
    { href: "/contato", label: "Contato" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-neutral-200/50 shadow-sm">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex h-24 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group">
            <h1 className="text-2xl lg:text-3xl font-serif font-bold text-neutral-900 tracking-tight">
              {SITE_CONFIG.name}
            </h1>
            <p className="text-xs text-neutral-500 mt-0.5 tracking-wide">Peças Exclusivas</p>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-neutral-900 after:transition-all hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-neutral-100 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden py-6 border-t border-neutral-200/50">
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-neutral-700 hover:text-neutral-900 transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
