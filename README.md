# LorentaOS — Web

**The Cognitive Operating System for Autonomous Enterprises.**

Bu repo, LorentaOS markasının halka açık web sitesini barındırır. Tasarım sistemi "Sessiz Lüks" eksenindedir; mühendislik tarafı modern, az bağımlı ve performans-odaklıdır.

## Tech Stack

| Katman       | Seçim                                  |
| ------------ | -------------------------------------- |
| Framework    | Next.js 16 (App Router)                |
| Dil          | TypeScript (strict)                    |
| Stil         | Tailwind CSS v4 (`@theme` CSS-first)   |
| Tipografi    | Inter + JetBrains Mono via `next/font` |
| Lint         | ESLint 9 (`eslint-config-next`)        |
| Hosting      | Vercel (planlı)                        |
| Bundler      | Turbopack (dev + build)                |

## Yerel Geliştirme

```bash
# Geliştirme sunucusu
npm run dev

# Production build
npm run build

# Production preview
npm run start

# Lint
npm run lint
```

Tarayıcı: [http://localhost:3000](http://localhost:3000)

## Klasör Mimarisi

```
app/                  → Next.js App Router (route'lar + global layout)
  layout.tsx          → Root layout, font yükleme, Nav + Footer
  page.tsx            → Anasayfa
  globals.css         → Tailwind v4 @theme tokenları + base stiller

components/
  layout/             → Nav, Footer
  ui/                 → Button, Container, Section (primitive'ler)
  sections/           → Sayfa-bazlı kompozisyonlar (ileride)

lib/                  → Yardımcılar (cn, site config, vb.)
content/              → Statik içerik (MDX/JSON — ileride CMS taşınacak)
types/                → Paylaşılan TypeScript tipleri
public/               → Statik varlıklar (görsel, font, manifest)
```

## Design Tokens

Tüm renk, tipografi ve spacing tokenları `app/globals.css` içindeki `@theme` bloğunda tek noktadan tanımlıdır. Yeni bir token eklemek için orayı düzenle — Tailwind utility class'ı otomatik üretilir (`--color-x` → `bg-x`, `text-x`, `border-x`).

## Konvansiyonlar

- **Import alias:** `@/` repo köküne çözer (örn. `@/components/ui/Button`).
- **Component dosya adları:** PascalCase (`Button.tsx`).
- **Yardımcılar:** camelCase (`cn.ts`, `site.ts`).
- **Tüm metinler** önce EN, sonra TR. i18n entegrasyonu sonraki fazda.

## Lisans

© Lorenta OS. Tüm hakları saklıdır.
