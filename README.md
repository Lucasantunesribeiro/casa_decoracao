# Casa & Decoração - Site Demo

Site demonstrativo de loja de móveis e decoração com curadoria personalizada.

## 🚀 Tecnologias

- **Next.js 15** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS 4** - Estilização
- **shadcn/ui** - Componentes
- **Lucide React** - Ícones

## 📁 Estrutura

```
├── app/                    # Rotas Next.js
│   ├── page.tsx           # Home (/)
│   ├── ambientes/         # Galeria de ambientes
│   ├── catalogo/          # Catálogo de produtos
│   ├── produto/[slug]/    # Página individual do produto
│   └── contato/           # Página de contato
├── components/
│   ├── layout/            # Header, Footer
│   ├── sections/          # Seções da home
│   └── ui/                # Componentes shadcn/ui
├── lib/
│   ├── content.ts         # Dados dos produtos e ambientes
│   ├── constants.ts       # Configurações do site
│   └── json-ld.ts         # Schemas JSON-LD para SEO
└── public/                # Imagens estáticas
```

## 🎨 Funcionalidades

### Home (/)
- Hero editorial
- Galeria de ambientes (masonry)
- Catálogo em destaque
- "Como Funciona" (curadoria → orçamento → entrega)
- Depoimentos
- CTA final

### Ambientes (/ambientes)
- Galeria de ambientes decorados
- Detalhes de cada ambiente
- Integração WhatsApp

### Catálogo (/catalogo)
- Lista completa de produtos
- Filtros por categoria
- Cards com preço "a partir de"
- Botão WhatsApp em cada produto

### Produto Individual (/produto/[slug])
- Galeria de imagens
- Especificações detalhadas
- Botão "Quero um igual" → WhatsApp
- Produtos relacionados

### Contato (/contato)
- CTA WhatsApp
- Informações de contato
- FAQ

## 📱 Integração WhatsApp

Todos os CTAs direcionam para o WhatsApp: **5521996805944**

Função helper: `getWhatsAppLink(message)`

## 🎯 SEO

- Meta tags otimizadas
- Open Graph para redes sociais
- JSON-LD (LocalBusiness, Product, Breadcrumb)
- Sitemap automático
- Robots.txt

## 🚀 Como Rodar

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Build
npm run build

# Produção
npm start
```

Acesse: http://localhost:3000

## 📷 Imagens Demo

Este é um site **DEMO**. Para produção, adicione imagens reais em:

- `public/hero-bg.jpg` - Hero da home
- `public/produtos/*.jpg` - Imagens dos produtos
- `public/ambientes/*.jpg` - Imagens dos ambientes

Nomes esperados:
- poltrona-esmeralda.jpg
- mesa-marmore.jpg
- luminaria-arco.jpg
- aparador-laca.jpg
- espelho-bronze.jpg
- quadros-abstratos.jpg
- sala-contemporanea.jpg
- quarto-minimalista.jpg
- home-office.jpg
- jantar-boho.jpg

## 📝 Conteúdo

Todo o conteúdo está em:
- `lib/content.ts` - Produtos, ambientes, depoimentos
- `lib/constants.ts` - Configurações do site

## 🎨 Customização

### Cores
Edite `app/globals.css` para alterar o tema.

### WhatsApp
Atualize o número em `lib/constants.ts`:
```typescript
whatsapp: "5521996805944"
```

### Produtos
Adicione/edite produtos em `lib/content.ts`.

---

**Desenvolvido com Claude Code**
