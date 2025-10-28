# Sanny – Officiell sida

Officiell webbplats för Sanny, svensk fighter och personlig tränare.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) (App Router)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com)
- **Icons**: [Lucide React](https://lucide.dev)

## Kom igång

Installera beroenden:

```bash
npm install
```

Starta utvecklingsservern:

```bash
npm run dev
```

Öppna [http://localhost:3000](http://localhost:3000) i din webbläsare.

## Projektstruktur

```
src/
├── app/
│   ├── (site)/              # Route group för huvudsidor
│   │   ├── presentation/
│   │   ├── meriter/
│   │   ├── pt/
│   │   ├── recensioner/
│   │   ├── lankar/
│   │   └── shop/
│   ├── layout.tsx           # Root layout med Header/Footer
│   ├── page.tsx             # Startsida
│   └── globals.css          # Globala Tailwind-styles
├── components/
│   ├── layout/              # Layout-komponenter
│   │   ├── Header.tsx       # Navigation (desktop + mobil)
│   │   └── Footer.tsx       # Footer med länkar och sociala medier
│   ├── sections/            # Sektionskomponenter (kommande)
│   └── ui/                  # shadcn/ui komponenter
├── data/                    # Data och innehåll
├── lib/                     # Utilities
└── types/                   # TypeScript typer

public/
├── images/                  # Bilder
└── icons/                   # Ikoner
```

## Sidor

- `/` - Startsida
- `/presentation` - Presentation
- `/meriter` - Meriter
- `/pt` - Personlig träning
- `/recensioner` - Recensioner
- `/lankar` - Länkar
- `/shop` - Shop

## Utveckling

Bygga för produktion:

```bash
npm run build
```

Starta produktionsserver:

```bash
npm start
```

Linting:

```bash
npm run lint
```

## Design

Webbplatsen använder en modern dark mode design med:
- Bakgrund: `bg-zinc-950`
- Text: `text-zinc-100`
- Accent: `text-zinc-400` för sekundär text
- Responsive layout med mobile-first approach
- Sticky header med backdrop blur
- Navigation med hamburgermeny för mobil
