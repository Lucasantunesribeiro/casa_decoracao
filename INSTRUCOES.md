# Instruções de Uso - Casa & Decoração

## ✅ Projeto Completo

O site está **100% funcional** com todas as páginas e funcionalidades implementadas:

- ✅ Home com todas as seções (Hero, Ambientes, Produtos, Como Funciona, Depoimentos, CTA)
- ✅ Página de Ambientes (/ambientes)
- ✅ Página de Catálogo (/catalogo)
- ✅ Páginas individuais de produtos (/produto/[slug])
- ✅ Página de Contato (/contato)
- ✅ SEO completo (meta tags, Open Graph, JSON-LD)
- ✅ Sitemap e robots.txt automáticos
- ✅ Integração WhatsApp em todos os CTAs
- ✅ Design responsivo
- ✅ Build otimizado (Next.js 15 + Turbopack)

## 🚀 Como Rodar

### 1. Instalar dependências (já instaladas)

```bash
npm install
```

### 2. Modo Desenvolvimento

```bash
npm run dev
```

Acesse: **http://localhost:3000**

### 3. Build para Produção

```bash
npm run build
npm start
```

## 📷 Adicionar Imagens Reais

**IMPORTANTE:** Este é um site DEMO. As imagens estão referenciadas mas não existem fisicamente.

Para adicionar imagens reais, coloque os arquivos nas seguintes pastas:

### Hero Background
- `public/hero-bg.jpg` (recomendado: 1920x1080px)

### Produtos
Adicione em `public/produtos/`:
- `poltrona-esmeralda.jpg` e `poltrona-esmeralda-2.jpg`
- `mesa-marmore.jpg` e `mesa-marmore-2.jpg`
- `luminaria-arco.jpg`
- `aparador-laca.jpg`
- `espelho-bronze.jpg`
- `quadros-abstratos.jpg`

### Ambientes
Adicione em `public/ambientes/`:
- `sala-contemporanea.jpg` e `sala-contemporanea-2.jpg`
- `quarto-minimalista.jpg`
- `home-office.jpg`
- `jantar-boho.jpg`

**Tamanho recomendado:** 1200x900px (4:3)

## 🎨 Personalizar Conteúdo

### Alterar Produtos
Edite: `lib/content.ts`

```typescript
export const produtos: Product[] = [
  {
    id: "1",
    slug: "seu-produto",
    name: "Nome do Produto",
    description: "Descrição...",
    category: "Categoria",
    priceFrom: 1000,
    image: "/produtos/imagem.jpg",
    images: ["/produtos/imagem.jpg"],
    featured: true
  }
]
```

### Alterar WhatsApp
Edite: `lib/constants.ts`

```typescript
export const SITE_CONFIG = {
  name: "Casa & Decoração",
  whatsapp: "5521996805944", // <-- ALTERAR AQUI
  email: "contato@casaedecoração.com.br",
  // ...
}
```

### Alterar Cores
Edite: `app/globals.css`

Modifique os valores em `@theme`:
```css
--color-primary: hsl(0 0% 9%);
--color-accent: hsl(0 0% 96.1%);
```

## 📱 Testar WhatsApp

Todos os botões "Quero um igual" e CTAs abrem o WhatsApp com mensagens personalizadas:

- Produto: "Olá! Gostaria de saber mais sobre: [Nome do Produto]"
- Ambiente: "Olá! Gostei do ambiente '[Nome]' e gostaria de criar algo similar"
- Curadoria: "Olá! Quero uma curadoria personalizada..."

**Número configurado:** 5521996805944

## 📊 Estatísticas do Build

```
Route (app)
┌ ○ /                           (Home)
├ ○ /ambientes                  (Galeria)
├ ○ /catalogo                   (Catálogo)
├ ○ /contato                    (Contato)
├ ● /produto/[slug]             (6 produtos gerados)
├ ○ /robots.txt                 (SEO)
└ ○ /sitemap.xml                (SEO)

○ = Static (pré-renderizado)
● = SSG (gerado estaticamente)
```

## 🎯 Páginas Geradas

1. **/** - Home completa
2. **/ambientes** - 4 ambientes
3. **/catalogo** - 6 produtos
4. **/produto/poltrona-veludo-esmeralda**
5. **/produto/mesa-centro-marmore**
6. **/produto/luminaria-arco-dourada**
7. **/produto/aparador-laca-preta**
8. **/produto/espelho-bronze-redondo**
9. **/produto/conjunto-quadros-abstratos**
10. **/contato** - FAQ + WhatsApp

## 🔍 SEO Implementado

### Meta Tags
- Title, Description, Keywords
- Open Graph (Facebook, LinkedIn)
- Canonical URLs

### JSON-LD Schemas
- LocalBusiness (home)
- Product (páginas de produto)
- Breadcrumb (navegação)

### Sitemap Automático
- Todas as páginas incluídas
- Atualização automática
- Prioridades otimizadas

## 🎨 Componentes Reutilizáveis

- `<WhatsAppButton />` - Botão com integração WhatsApp
- `<FloatingWhatsAppButton />` - Botão flutuante fixo
- `<Header />` - Navegação responsiva
- `<Footer />` - Rodapé completo
- `<Card />`, `<Button />` - shadcn/ui

## 📦 Tecnologias

- **Next.js 15** - React Framework
- **TypeScript 5.6** - Type safety
- **Tailwind CSS 4** - Styling
- **shadcn/ui** - Component library
- **Lucide React** - Icons

## ⚠️ Observações

1. **Imagens:** Site funciona sem imagens, mas mostrará placeholders cinza
2. **WhatsApp:** Número demo incluído, alterar antes de usar
3. **SEO:** URL demo em `lib/constants.ts`, atualizar para produção
4. **Build:** Projeto passa em build sem erros

## 🚢 Deploy

### Netlify / Vercel
```bash
npm run build
```

Configure as variáveis de ambiente se necessário.

### Comandos Úteis

```bash
npm run dev      # Desenvolvimento
npm run build    # Build otimizado
npm start        # Servidor produção
npm run lint     # Verificar código
```

## ✨ Pronto para Uso!

O site está 100% funcional e pronto para:
1. Adicionar imagens reais
2. Alterar número do WhatsApp
3. Customizar produtos e conteúdo
4. Fazer deploy

---

**Desenvolvido com Claude Code** 🤖
