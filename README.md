# Sanny – Officiell sida

Officiell webbplats för Sanny, svensk fighter och personlig tränare. Modern, responsiv webbplats byggd med Next.js 16 och Tailwind CSS v4.

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) (App Router)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com)
- **Icons**: [Lucide React](https://lucide.dev)
- **Fonts**: Geist Sans & Geist Mono

## 📦 Installation

Installera beroenden:

```bash
npm install
```

Starta utvecklingsservern:

```bash
npm run dev
```

Öppna [http://localhost:3000](http://localhost:3000) i din webbläsare.

## 📁 Projektstruktur

```
src/
├── app/
│   ├── (site)/                    # Route group för huvudsidor
│   │   ├── presentation/page.tsx  # Fighter-profil och bio
│   │   ├── meriter/page.tsx      # Fight record och achievements
│   │   ├── pt/page.tsx           # PT-bokningar (client component)
│   │   ├── recensioner/page.tsx  # Kundrecensioner med ratings
│   │   ├── lankar/page.tsx       # Social media länkar
│   │   └── shop/page.tsx         # Merch shop (coming soon)
│   ├── layout.tsx                # Root layout med SEO metadata
│   ├── page.tsx                  # Startsida med JSON-LD
│   └── globals.css               # Tailwind + shadcn/ui styles
├── components/
│   ├── layout/
│   │   ├── Header.tsx            # Navigation med active link highlighting
│   │   ├── Footer.tsx            # Footer med snabblänkar
│   │   └── Container.tsx         # Max-width wrapper
│   ├── sections/                 # Sektionskomponenter (tom ännu)
│   └── ui/                       # shadcn/ui komponenter
│       ├── navigation-menu.tsx
│       ├── sheet.tsx
│       └── button.tsx
├── data/
│   └── mock.ts                   # Mock-data för development
├── lib/
│   └── utils.ts                  # Utility functions (shadcn)
└── types/
    └── content.ts                # TypeScript typer

public/
├── images/
│   ├── hero.jpg                  # Hero image (placeholder)
│   └── og-default.jpg            # OpenGraph image (placeholder)
└── icons/                        # Ikoner (tom ännu)
```

## 🎨 Sidor & Features

### `/` - Startsida
- JSON-LD structured data för SEO
- Schema.org Person markup

### `/presentation` - Presentation
- Fighter-profil med namn, smeknamn, viktklass
- Bio och information om gym
- Social media länkar (Instagram, YouTube, Patreon)

### `/meriter` - Meriter
- Fight record (vinster, förluster, oavgjort)
- Breakdown på KO, submission, decision
- Achievement-lista med datum, organisation och titlar
- Champion belt badges

### `/pt` - Personlig Träning
- Grid av tillgängliga PT-tider
- Status badges (tillgänglig, reserverad, bokad)
- Location (Gym/Online)
- Prisvisning i SEK
- Bokningsknapp (alert: "Kommer snart")

### `/recensioner` - Recensioner
- Kundrecensioner i kort-layout
- 5-stjärniga ratings med unicode (★☆)
- Verifierad-badge för verifierade kunder
- Svenska datumformat

### `/lankar` - Länkar
- Social media kort med gradient-ikoner
- Instagram, YouTube, Patreon
- Hover-effekter och beskrivningar

### `/shop` - Shop
- "Coming soon" meddelande
- Intresseanmälan (alert)
- Lista över kommande produkter

## 🧩 Komponenter

### Header
- Responsive navigation (desktop + mobile)
- Sticky header med backdrop blur
- Active link highlighting med `usePathname()`
- Mobile hamburger-meny med Sheet
- Dark mode support

### Footer
- Tre-kolumn layout (responsive)
- Snabblänkar till alla sidor
- Social media ikoner
- Copyright med dynamiskt år

### Container
- Max-width: `1152px` (max-w-6xl)
- Responsiv padding: `px-4` → `px-6` (md)
- Centrerad layout

## 📊 Data & Types

### TypeScript Types (`src/types/content.ts`)
- `FighterProfile` - Profil-information
- `FightRecord` - Fight-statistik
- `Achievement` - Meriter och titlar
- `Review` - Kundrecensioner
- `PtSlot` - PT-bokningar

### Mock Data (`src/data/mock.ts`)
- `fighter` - Sanny's profil
- `fightRecord` - 18-3-0 record
- `achievements` - 2 achievements
- `reviews` - 2 kundrecensioner
- `ptSlots` - 2 tillgängliga tider

## 🎯 SEO & Metadata

### Root Metadata (`layout.tsx`)
- Title: "Sanny – Officiell sida"
- Description: SEO-optimerad
- OpenGraph tags (Facebook, LinkedIn)
- Twitter Card (summary_large_image)
- Locale: `sv_SE`
- OG Image: 1200x630

### JSON-LD Structured Data
- Schema.org Person markup
- Athlete jobTitle
- Social media sameAs links

## 🎨 Design System

### Färgschema (Dark Mode)
- **Bakgrund**: `bg-zinc-950`
- **Text**: `text-zinc-100`
- **Sekundär text**: `text-zinc-400`
- **Borders**: `border-zinc-800`
- **Cards**: `bg-zinc-900`
- **Success**: `text-green-400`
- **Warning**: `text-yellow-400`
- **Error**: `text-red-400`

### Typografi
- **Font**: Geist Sans (variable)
- **Mono**: Geist Mono (variable)
- **Headings**: `font-bold`
- **Body**: `font-medium`

### Layout
- **Mobile-first**: Tailwind responsive breakpoints
- **Container**: Max 1152px, centrerad
- **Grid**: Responsive (1 → 2 → 3 columns)
- **Spacing**: Konsistent med Tailwind scale

## 🛠️ Utveckling

### Bygga för produktion

```bash
npm run build
```

### Starta produktionsserver

```bash
npm start
```

### Linting

```bash
npm run lint
```

### Lägg till nya shadcn/ui komponenter

```bash
npx shadcn@latest add [component-name]
```

## 🔮 Kommande Features

- [ ] Faktiska bilder (hero.jpg, og-default.jpg)
- [ ] Backend för PT-bokningar
- [ ] Kontaktformulär
- [ ] Fler achievements och reviews
- [ ] Shop med produkter
- [ ] Blog/Nyheter sektion
- [ ] Bildgalleri från fights
- [ ] Video-embed från YouTube
- [ ] Newsletter signup

## 📝 Miljövariabler

Skapa en `.env.local` fil för miljövariabler:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

I produktion, sätt `NEXT_PUBLIC_SITE_URL` till din faktiska domän.

## 🤝 Contributing

Detta är en privat webbplats för Sanny. Kontakta ägaren för att bidra.

## 📄 License

Alla rättigheter förbehållna © 2025 Sanny
