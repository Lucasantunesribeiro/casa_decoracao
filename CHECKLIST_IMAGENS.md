# Checklist de Geração de Imagens

Use este checklist para gerar todas as imagens no ChatGPT/DALL-E.

---

## 📋 PROGRESSO

### Hero (1 imagem)
- [ ] `hero-bg.jpg` - 1920x1080px - Living room background contemporâneo

### Produtos (8 imagens)
- [ ] `poltrona-esmeralda.jpg` - 1200x1200px - Poltrona veludo verde frontal
- [ ] `poltrona-esmeralda-2.jpg` - 1200x1200px - Poltrona veludo verde lateral
- [ ] `mesa-marmore.jpg` - 1200x1200px - Mesa mármore Carrara com pés dourados
- [ ] `mesa-marmore-2.jpg` - 1200x1200px - Mesa mármore vista superior
- [ ] `luminaria-arco.jpg` - 1200x1200px - Luminária arco dourada acesa
- [ ] `aparador-laca.jpg` - 1200x1200px - Aparador laca preta brilhante
- [ ] `espelho-bronze.jpg` - 1200x1200px - Espelho redondo moldura bronze
- [ ] `quadros-abstratos.jpg` - 1200x1200px - 3 quadros abstratos tons terrosos

### Ambientes (5 imagens)
- [ ] `sala-contemporanea.jpg` - 1200x900px - Sala estar completa
- [ ] `sala-contemporanea-2.jpg` - 1200x900px - Canto poltrona + janela
- [ ] `quarto-minimalista.jpg` - 1200x900px - Quarto estilo escandinavo
- [ ] `home-office.jpg` - 1200x900px - Escritório mesa + estante
- [ ] `jantar-boho.jpg` - 1200x900px - Sala jantar boho chic

**Total: 14 imagens**

---

## 🎯 PROMPTS RÁPIDOS

### HERO
```
Professional interior design photograph of elegant contemporary living room, warm neutral beige and brown tones, natural lighting, modern minimalist furniture, soft shadows, editorial photography, bright airy atmosphere, sophisticated decor, 4K photorealistic
```

### PRODUTOS

**Poltrona Verde (frontal)**
```
Professional product photo of emerald green velvet armchair, mid-century style, walnut legs, studio lighting, white background, front 3/4 view, rich texture, 4K photorealistic
```

**Poltrona Verde (lateral)**
```
Side view of emerald green velvet armchair, profile showing armrest, walnut legs, gray background, detail shot, 4K photorealistic
```

**Mesa Mármore (frontal)**
```
Modern coffee table with Carrara marble top, white marble gray veining, brushed gold metal legs, studio lighting, white background, top-down angle, 4K photorealistic
```

**Mesa Mármore (superior)**
```
Top-down photo of Carrara marble table surface, white marble natural gray veining, close-up texture, even lighting, 4K photorealistic
```

**Luminária Arco**
```
Modern arc floor lamp, brushed gold metal, adjustable curved arm, linen shade, marble base, lamp illuminated warm glow, white background, side view showing arc, 4K photorealistic
```

**Aparador Laca**
```
Modern sideboard high-gloss black lacquer, minimalist design, brass pulls, three drawers, reflective surface, studio lighting, gray background, front view, 4K photorealistic
```

**Espelho Bronze**
```
Large round mirror with aged bronze frame, vintage finish with patina, decorative frame, mirror reflection, light background, centered, 4K photorealistic
```

**Quadros Abstratos**
```
Three abstract paintings side by side, earthy palette terracotta beige burnt orange warm browns, organic shapes, wood frames, textured brushstrokes, white wall, 4K photorealistic
```

### AMBIENTES

**Sala Contemporânea (completa)**
```
Contemporary living room interior, gray sofa, wooden coffee table, floor lamp, abstract art on beige wall, neutral palette, natural lighting, elegant comfortable, editorial magazine style, 4K photorealistic
```

**Sala Contemporânea (canto)**
```
Side angle of contemporary living room, emerald velvet armchair focal point, floor lamp, window with daylight, potted plant, wooden side table, warm atmosphere, 4K photorealistic
```

**Quarto Minimalista**
```
Minimalist Scandinavian bedroom, low platform bed white linen, light wood flooring, soft gray walls, floating nightstand modern lamp, minimal art, serene calm, natural daylight, 4K photorealistic
```

**Home Office**
```
Home office interior, wooden desk, ergonomic chair, modern monitor, wooden bookshelf with books, desk lamp warm light, neutral wood tones, window lighting, sophisticated productive workspace, 4K photorealistic
```

**Sala Jantar Boho**
```
Boho chic dining room, rustic wooden table, mixed natural chairs, rattan pendant light, macrame wall hanging, potted plants, woven rug, earthy terracotta cream tones, cozy inviting, 4K photorealistic
```

---

## 💡 DICAS DE USO NO CHATGPT

1. **Copie e cole** um prompt por vez
2. Se o resultado não for ideal, peça: "Faça novamente com mais [detalhe específico]"
3. Para ajustes: "Deixe mais [claro/escuro/saturado/suave]"
4. Gere produtos antes de ambientes
5. Mantenha consistência de estilo fotográfico

---

## 📦 APÓS GERAR

1. Baixe cada imagem
2. Renomeie conforme lista acima
3. Otimize tamanho (TinyPNG/Squoosh)
4. Salve em:
   - `public/hero-bg.jpg`
   - `public/produtos/[nome].jpg`
   - `public/ambientes/[nome].jpg`
5. Teste no site: `npm run dev`

---

## ⚙️ ESPECIFICAÇÕES TÉCNICAS

| Tipo | Resolução | Aspect Ratio | Formato |
|------|-----------|--------------|---------|
| Hero | 1920x1080 | 16:9 | JPG |
| Produtos | 1200x1200 | 1:1 | JPG |
| Ambientes | 1200x900 | 4:3 | JPG |

**Qualidade:** Máxima (4K quando possível)
**Peso ideal:** < 500KB por imagem (após otimização)

---

## 🎨 PALETA DE CORES DO SITE

- **Neutros:** Beige, Cream, Soft Brown, Gray
- **Acentos:** Emerald Green, Gold, Bronze, Terracotta
- **Madeiras:** Walnut, Natural Oak
- **Metais:** Brushed Gold, Aged Bronze

Use estas cores como referência nos prompts.

---

Veja prompts completos e detalhados em `PROMPTS_IMAGENS.md`
