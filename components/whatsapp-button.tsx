"use client"

import { MessageCircle } from "lucide-react"
import { getWhatsAppLink } from "@/lib/constants"

interface WhatsAppButtonProps {
  message: string
  className?: string
  children?: React.ReactNode
}

export function WhatsAppButton({ message, className = "", children }: WhatsAppButtonProps) {
  const handleClick = () => {
    window.open(getWhatsAppLink(message), "_blank")
  }

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md px-6 py-3 transition-colors ${className}`}
    >
      <MessageCircle size={20} />
      {children || "Falar no WhatsApp"}
    </button>
  )
}

export function FloatingWhatsAppButton() {
  return (
    <button
      onClick={() => window.open(getWhatsAppLink("Olá! Gostaria de conhecer as peças exclusivas de Casa & Decoração."), "_blank")}
      className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={24} />
    </button>
  )
}
