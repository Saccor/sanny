# Sanny – Officiell Webbplats test

> Officiell webbplats för Sanny, svensk fighter och personlig tränare. Modern, responsiv webbplats byggd med Next.js 16 och Tailwind CSS v4.

**För utvecklare:** Denna README är skriven för att vara helt självförklarande. Du ska kunna förstå hela kodbasen genom att läsa denna dokumentation utan att behöva prata med den andra utvecklaren.

---

## 📚 Innehållsförteckning

1. [Tech Stack & Varför](#-tech-stack--varför)
2. [Installation & Setup](#-installation--setup)
3. [Projektstruktur (Detaljerad)](#-projektstruktur-detaljerad)
4. [Arkitektur & Design](#-arkitektur--design)
5. [Sidor & Features](#-sidor--features)
6. [Komponenter (Djupdykning)](#-komponenter-djupdykning)
7. [Data & Types](#-data--types)
8. [SEO & Metadata](#-seo--metadata)
9. [Forms & Validation](#-forms--validation)
10. [Styling System](#-styling-system)
11. [Utvecklingsguide](#-utvecklingsguide)
12. [Vanliga Problem & Lösningar](#-vanliga-problem--lösningar)
13. [Nästa Steg](#-nästa-steg)

---

## 🚀 Tech Stack & Varför

### Core Framework

**Next.js 16 (App Router)**
- **Varför:** Server-first React framework med inbyggd routing, SEO, och optimering
- **App Router:** Använder den nya filbaserade routing-strukturen (`app/` katalog)
- **React 19:** Senaste versionen med förbättrad performance
- **Server Components:** Standard - bättre performance, mindre JavaScript till klienten
- **Client Components:** Används endast när nödvändigt (forms, interaktivitet)

### Styling

**Tailwind CSS v4**
- **Varför:** Utility-first CSS - snabbare utveckling, mindre CSS att skicka
- **Dark Mode:** Tailwind's inbyggda dark mode med `.dark` class
- **Responsive:** Mobile-first approach med breakpoints (sm, md, lg, xl)
- **Custom Theme:** Färgschema baserat på zinc-färger (950, 900, 800, etc.)

### UI Components

**shadcn/ui**
- **Varför:** Inte ett NPM-paket - kopiera komponenter direkt till projektet
- **Baserat på:** Radix UI (accessibility) + Tailwind CSS (styling)
- **Komponenter vi använder:**
  - `button` - Knappar med variants
  - `form` - Formulärhantering med react-hook-form
  - `input` / `textarea` - Formulärfält
  - `dialog` - Modals/popup
  - `navigation-menu` - Desktop navigation
  - `sheet` - Slide-in mobilmeny
  - `label` - Tillgängliga labels för formulär

### Icons & Typography

**Lucide React**
- **Varför:** Moderna, lättanvända SVG-ikoner som React-komponenter
- **Tree-shakeable:** Endast ikoner du använder inkluderas i bundle

**Geist Sans & Geist Mono**
- **Varför:** Moderna, läsbara typsnitt från Vercel
- **Variable fonts:** Bättre performance än flera font-filer

### Form Validation

**Zod + React Hook Form**
- **Zod:** TypeScript-first schema validation
- **React Hook Form:** Performant forms med minimal re-renders
- **@hookform/resolvers:** Binder ihop zod med react-hook-form

### Language

**TypeScript**
- **Varför:** Type safety - fångar buggar innan runtime
- **Strikta typer:** Alla komponenter och data har explicita typer
- **Bättre DX:** IntelliSense, autocomplete, refactoring

---

## 📦 Installation & Setup

### 1. Klona projektet och installera

```bash
# Installera alla dependencies från package.json
npm install
```

**Vad händer:**
- NPM läser `package.json` och `package-lock.json`
- Installerar alla packages i `node_modules/`
- Totalt ~400 packages (inkl. Next.js, React, Tailwind, etc.)

### 2. Skapa miljövariabler (Valfritt)

Skapa `.env.local` i root:

```env
# Används för OpenGraph tags och sitemap
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**Viktigt:**
- `.env.local` är gitignored (innehåller aldrig känslig data i public repo)
- `NEXT_PUBLIC_` prefix = tillgänglig i browser (client-side)
- Utan prefix = endast tillgänglig på server

### 3. Starta utvecklingsservern

```bash
npm run dev
```

**Vad händer:**
- Next.js startar Turbopack (snabbare än Webpack)
- Servern startar på `http://localhost:3000`
- Hot Module Replacement (HMR) aktiveras - ändringar syns direkt
- TypeScript type-checking körs i bakgrunden

**Om port 3000 är upptagen:**
```
⚠ Port 3000 is in use, using port 3001 instead
```
Öppna istället `http://localhost:3001`

### 4. Öppna i webbläsare

Navigera till:
```
http://localhost:3000
```

Du bör se startsidan med "Hem"-rubriken.

---

## 📁 Projektstruktur (Detaljerad)

```
sanny/
├── src/                          # All source code
│   ├── app/                      # Next.js App Router (filbaserad routing)
│   │   ├── (site)/               # Route group - dela layout utan URL-påverkan
│   │   │   ├── presentation/
│   │   │   │   └── page.tsx     # /presentation - Fighter profil
│   │   │   ├── meriter/
│   │   │   │   └── page.tsx     # /meriter - Fight record & achievements
│   │   │   ├── pt/
│   │   │   │   └── page.tsx     # /pt - PT bokningar (client component)
│   │   │   ├── recensioner/
│   │   │   │   └── page.tsx     # /recensioner - Reviews + form
│   │   │   ├── lankar/
│   │   │   │   └── page.tsx     # /lankar - Social media länkar
│   │   │   └── shop/
│   │   │       └── page.tsx     # /shop - Merch (coming soon)
│   │   ├── layout.tsx            # Root layout - wraps ALL pages
│   │   ├── page.tsx              # Startsida - / route
│   │   ├── globals.css           # Global CSS + Tailwind imports
│   │   ├── robots.ts             # robots.txt generation
│   │   └── sitemap.ts            # sitemap.xml generation
│   │
│   ├── components/
│   │   ├── layout/               # Layout components - används i layout.tsx
│   │   │   ├── Header.tsx        # Top navigation (desktop + mobile)
│   │   │   ├── Footer.tsx        # Footer med länkar
│   │   │   └── Container.tsx     # Max-width wrapper (1152px)
│   │   ├── sections/             # Page-specific sections
│   │   │   └── ReviewForm.tsx    # Form för att lämna recensioner
│   │   └── ui/                   # shadcn/ui components (auto-generated)
│   │       ├── button.tsx
│   │       ├── dialog.tsx
│   │       ├── form.tsx
│   │       ├── input.tsx
│   │       ├── textarea.tsx
│   │       ├── label.tsx
│   │       ├── navigation-menu.tsx
│   │       └── sheet.tsx
│   │
│   ├── data/
│   │   └── mock.ts               # Mock data för development
│   │
│   ├── lib/
│   │   ├── utils.ts              # Utility functions (cn från shadcn)
│   │   └── seo.ts                # SEO helper functions
│   │
│   └── types/
│       └── content.ts            # TypeScript types för data
│
├── public/                       # Static assets - served direkt
│   ├── images/
│   │   ├── hero.jpg              # Hero image (placeholder)
│   │   └── og-default.jpg        # OpenGraph image (placeholder)
│   └── icons/                    # Icons (empty just nu)
│
├── package.json                  # NPM dependencies & scripts
├── tsconfig.json                 # TypeScript config
├── tailwind.config.js            # Tailwind config (om det finns)
├── next.config.ts                # Next.js config
├── components.json               # shadcn/ui config
├── .gitignore                    # Git ignored files
├── README.md                     # Denna fil!
└── TESTING.md                    # Testing guide
```

### Viktiga filer att förstå

#### `src/app/layout.tsx` - Root Layout
**Vad det gör:** Wraps ALLA sidor på webbplatsen. Definierar:
- HTML structure (`<html>`, `<body>`)
- Global metadata (SEO)
- Header & Footer (visas på alla sidor)
- Container wrapper för innehåll
- Font-laddning (Geist Sans & Mono)

**Varför det är viktigt:** Ändringar här påverkar HELA sidan.

#### `src/app/(site)/[page]/page.tsx` - Individuella sidor
**Notation:** Parenteser `(site)` = route group (påverkar INTE URL)
- URL blir `/presentation` inte `/site/presentation`
- Används för att organisera relaterade routes

#### `src/components/ui/` - shadcn/ui komponenter
**Auto-generated:** När du kör `npx shadcn@latest add [component]`
- Komponenterna kopieras IN i projektet (inte NPM package)
- Du kan editera dem direkt om du vill
- Baserade på Radix UI + Tailwind CSS

---

## 🏗️ Arkitektur & Design

### Next.js App Router Concepts

#### Server Components (Standard)
**Alla komponenter är server components by default:**

```tsx
// Detta körs på SERVERN
export default function Page() {
  const data = fetchData(); // Körs på server
  return <div>{data}</div>;
}
```

**Fördelar:**
- Ingen JavaScript skickas till klienten för denna komponent
- Kan använda server-only kod (databas-queries, etc.)
- Bättre SEO (fully rendered HTML)

#### Client Components (Explicit)
**När du behöver interaktivitet:**

```tsx
"use client"; // MÅSTE vara första raden

import { useState } from 'react';

export default function InteractiveComponent() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

**När använda:**
- State management (`useState`, `useReducer`)
- Effects (`useEffect`)
- Event handlers (`onClick`, `onChange`)
- Browser APIs (`localStorage`, `window`)
- Hooks från libraries

**I vårt projekt:**
- `/pt/page.tsx` - Client (form submission, dialog state)
- `ReviewForm.tsx` - Client (react-hook-form)
- `Header.tsx` - Client (mobile menu state, pathname hook)
- `Footer.tsx` - Server (bara länkar, ingen interaktivitet)

### File-Based Routing

**Next.js App Router använder filsystemet som router:**

```
src/app/
├── page.tsx           →  /
├── about/
│   └── page.tsx       →  /about
└── blog/
    ├── page.tsx       →  /blog
    └── [slug]/
        └── page.tsx   →  /blog/my-post
```

**Special files:**
- `layout.tsx` - Persistent layout mellan routes
- `page.tsx` - Unique page content för route
- `loading.tsx` - Loading UI (Suspense fallback)
- `error.tsx` - Error boundary
- `not-found.tsx` - 404 page

### Data Flow

```
mock.ts (source of truth)
    ↓
page.tsx imports data
    ↓
Renderas till HTML
    ↓
Skickas till browser
```

**Exempel från /presentation:**

```tsx
// 1. Data source
import { fighter } from "@/data/mock";

// 2. Server component (körs på server)
export default function PresentationPage() {
  // 3. Data är redan tillgänglig (inget fetch behövs)
  return <div>{fighter.name}</div>;
}
```

### Styling Architecture

**Tailwind Utility-First:**

```tsx
// Istället för:
<div className="header-title">Title</div>

// Använder vi:
<div className="text-3xl font-bold text-zinc-100">Title</div>
```

**Fördelar:**
- Ser direkt i JSX vilka styles som används
- Ingen CSS-fil att hålla i sync
- Purge:as automatiskt - endast använda classes i bundle
- Responsive modifiers inline: `md:text-4xl`

**Dark Mode Strategy:**

```tsx
// <html className="dark"> i layout.tsx aktiverar dark mode
<div className="bg-zinc-950 text-zinc-100">
  // zinc-950 = nästan svart
  // zinc-100 = nästan vit
</div>
```

---

## 🎨 Sidor & Features (Detaljerad)

### `/` - Startsida

**Fil:** `src/app/page.tsx`

**Vad den gör:**
- Enkel placeholder-sida med "Hem"
- Innehåller JSON-LD structured data för SEO

**JSON-LD Implementation:**
```tsx
import { buildPersonLd } from '@/lib/seo';
const jsonLd = buildPersonLd(fighter);

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
/>
```

**Varför `dangerouslySetInnerHTML`:**
- Next.js kräver detta för att injicera JSON
- Säkert i detta fall eftersom vi kontrollerar datan
- Gör att Google kan läsa structured data

### `/presentation` - Fighter Profil

**Fil:** `src/app/(site)/presentation/page.tsx`

**Data som visas:**
```tsx
fighter.name        // "Sanny"
fighter.nickname    // "The North"
fighter.weightClass // "Lightweight"
fighter.stance      // "Orthodox"
fighter.gym         // "Stockholm Fight Center"
fighter.nationality // "Sweden"
fighter.bio         // Beskrivning
fighter.social      // Social media länkar
```

**Layout:**
- Header med namn
- Bio text
- 2-kolumn grid med info (responsive till 1 kolumn på mobil)
- Social media knappar med ikoner

**Tekniska detaljer:**
- Server component (ingen client-side JS)
- Conditional rendering med `&&` operator
- Lucide icons för social media
- Next.js `Link` för navigation

### `/meriter` - Fight Record & Achievements

**Fil:** `src/app/(site)/meriter/page.tsx`

**Två huvudsektioner:**

#### 1. Fight Record Card
```tsx
fightRecord.wins    // 18
fightRecord.losses  // 3
fightRecord.draws   // 0
fightRecord.ko      // 10
fightRecord.sub     // 4
fightRecord.decision // 4
```

**Färgkodning:**
- Wins: `text-green-400`
- Losses: `text-red-400`
- Draws: `text-zinc-400`

#### 2. Achievements Lista
```tsx
achievements.map((achievement) => (
  <div key={index}>
    <h3>{achievement.title}</h3>
    <span>{achievement.date}</span>
    <span>{achievement.org}</span>
    {achievement.belt && <Badge>{achievement.belt}</Badge>}
  </div>
))
```

**Badge system:**
- Champion badge: `bg-yellow-600/20 text-yellow-400`
- Rounded pill design
- Syns tydligt mot dark background

### `/pt` - PT Bookings (Mest komplex!)

**Fil:** `src/app/(site)/pt/page.tsx`

**Client Component:** `"use client"` (för state & fetch)

**State management:**
```tsx
const [dialogOpen, setDialogOpen] = useState(false);
const [isLoading, setIsLoading] = useState(false);
```

**Booking Flow:**

1. User klickar "Boka" knapp
2. `handleBooking(slotId)` körs
3. Fetch request till `/api/checkout` (finns inte än)
4. Try-catch fångar error (API finns inte)
5. Dialog öppnas med "Stripe-flöde kommer snart"

**Kod breakdown:**
```tsx
const handleBooking = async (slotId: string) => {
  setIsLoading(true); // Disable knapp, visa "Laddar..."
  
  try {
    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slotId }),
    });
    
    if (!response.ok) throw new Error('API not implemented');
    
    // Om API finns: redirect till Stripe
    const data = await response.json();
    console.log('Checkout response:', data);
  } catch (error) {
    // API finns inte än: visa dialog
    console.log('Booking attempt for slot:', slotId);
    setDialogOpen(true);
  } finally {
    setIsLoading(false); // Enable knapp igen
  }
};
```

**PT Slot Card Design:**
```tsx
{ptSlots.map((slot) => {
  const startDate = new Date(slot.start);
  const endDate = new Date(slot.end);
  
  return (
    <div key={slot.id} className="...">
      {/* Status badge */}
      <span className={getStatusColor(slot.status)}>
        {getStatusText(slot.status)}
      </span>
      
      {/* Time & location */}
      <div>
        <Clock /> {formatDate(startDate)}
        <MapPin /> {slot.location}
      </div>
      
      {/* Price & book button */}
      <span>{slot.priceSEK} kr</span>
      <Button onClick={() => handleBooking(slot.id)}>
        Boka
      </Button>
    </div>
  );
})}
```

**shadcn/ui Dialog:**
```tsx
<Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>
        <CreditCard /> Betalning
      </DialogTitle>
      <DialogDescription>
        Stripe-flöde kommer snart
      </DialogDescription>
    </DialogHeader>
    <Button onClick={() => setDialogOpen(false)}>
      Stäng
    </Button>
  </DialogContent>
</Dialog>
```

### `/recensioner` - Reviews + Form

**Fil:** `src/app/(site)/recensioner/page.tsx`

**Två delar:**

#### 1. Review Cards (Top)
```tsx
{reviews.map((review) => (
  <div key={review.id} className="card">
    <h3>{review.name}</h3>
    {review.verified && <CheckCircle />}
    <div className="stars">
      {'★'.repeat(review.rating)}
      {'☆'.repeat(5 - review.rating)}
    </div>
    <p>{review.text}</p>
    <span>{formatDate(review.createdAt)}</span>
  </div>
))}
```

**Helper function för stjärnor:**
```tsx
const renderStars = (rating: number) => {
  return '★'.repeat(rating) + '☆'.repeat(5 - rating);
};
// rating=3 → ★★★☆☆
// rating=5 → ★★★★★
```

#### 2. ReviewForm Component (Bottom)
Se [Forms & Validation](#-forms--validation) sektionen nedan.

### `/lankar` - Social Media Links

**Fil:** `src/app/(site)/lankar/page.tsx`

**3-kolumn grid med kort:**
```tsx
const socialLinks = [
  {
    name: "Instagram",
    url: fighter.social.instagram || "#",
    icon: Instagram,
    description: "Följ mig på Instagram...",
    color: "from-purple-600 to-pink-600" // Gradient
  },
  // ... YouTube, Patreon
];
```

**Gradient backgrounds:**
```tsx
<div className={`bg-linear-to-br ${link.color}`}>
  <Icon />
</div>
```

**Hover effects:**
```tsx
className="group hover:scale-105 transition-all"
<h3 className="group-hover:text-zinc-300">
```

**Group hover:** När parent hovras, child ändras.

### `/shop` - Coming Soon

**Fil:** `src/app/(site)/shop/page.tsx`

**Client Component:** För "Anmäl intresse" button

**Enkel layout:**
- Stor ShoppingBag ikon
- "Merch kommer snart" text
- Button med onClick alert
- Lista över kommande produkter

---

## 🧩 Komponenter (Djupdykning)

### Header.tsx - Navigation Component

**Fil:** `src/components/layout/Header.tsx`

**Client Component:** `"use client"` (för state & pathname)

**Imports:**
```tsx
import { usePathname } from 'next/navigation'; // Next.js hook
import { useState } from 'react'; // React hook
```

**State:**
```tsx
const [open, setOpen] = useState(false); // Mobile menu
const pathname = usePathname(); // "/presentation", "/meriter", etc.
```

**Active Link Highlighting:**
```tsx
const linkClass = (href: string) => 
  href === pathname 
    ? "text-white"      // Active
    : "text-zinc-400 hover:text-zinc-200"; // Inactive
```

**Hur det fungerar:**
1. `usePathname()` ger nuvarande route (ex: "/presentation")
2. För varje nav link, kolla om `href === pathname`
3. Om match: vit text
4. Om ingen match: grå text med hover effect

**Desktop Navigation:**
```tsx
<NavigationMenu className="hidden md:flex">
  {/* Döljs på mobil, visas på md+ (768px+) */}
  <NavigationMenuList>
    {navItems.map((item) => (
      <NavigationMenuItem>
        <Link href={item.href} className={linkClass(item.href)}>
          {item.label}
        </Link>
      </NavigationMenuItem>
    ))}
  </NavigationMenuList>
</NavigationMenu>
```

**Mobile Navigation:**
```tsx
<Sheet open={open} onOpenChange={setOpen}>
  {/* Sheet = slide-in panel från höger */}
  <SheetTrigger asChild className="md:hidden">
    {/* Visas endast på mobil */}
    <Button variant="ghost" size="icon">
      <Menu /> {/* Hamburger icon */}
    </Button>
  </SheetTrigger>
  
  <SheetContent>
    <SheetTitle>Meny</SheetTitle>
    {navItems.map((item) => (
      <Link
        href={item.href}
        onClick={() => setOpen(false)} // Stäng menu när link klickas
        className={linkClass(item.href)}
      >
        {item.label}
      </Link>
    ))}
  </SheetContent>
</Sheet>
```

**Sticky Header:**
```tsx
<header className="sticky top-0 z-50 backdrop-blur">
  {/* Följer med när man scrollar */}
  {/* z-50 = ligger över annat innehåll */}
  {/* backdrop-blur = blur effekt bakom */}
</header>
```

### Footer.tsx - Footer Component

**Fil:** `src/components/layout/Footer.tsx`

**Server Component:** Ingen interaktivitet, bara länkar

**3-kolumn grid (responsive):**
```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {/* Mobil: 1 kolumn, Desktop: 3 kolumner */}
  
  <div>
    <h3>Snabblänkar</h3>
    <Link href="/presentation">Presentation</Link>
    {/* ... */}
  </div>
  
  <div>
    <h3>Mer information</h3>
    <Link href="/lankar">Länkar</Link>
    {/* ... */}
  </div>
  
  <div>
    <h3>Följ mig</h3>
    <a href={fighter.social.instagram}>
      <Instagram />
    </a>
    {/* ... */}
  </div>
</div>
```

**Dynamiskt år:**
```tsx
<p>© {new Date().getFullYear()} Sanny</p>
// 2025 uppdateras automatiskt varje år
```

### Container.tsx - Layout Wrapper

**Fil:** `src/components/layout/Container.tsx`

**Enkel men viktig:**
```tsx
export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-6xl px-4 md:px-6">
      {children}
    </div>
  );
}
```

**Vad den gör:**
- `max-w-6xl` = max 1152px bred
- `mx-auto` = centrerad
- `px-4` = 16px padding på mobil
- `md:px-6` = 24px padding på desktop

**Används i layout.tsx:**
```tsx
<main className="flex-1">
  <Container>{children}</Container>
</main>
```

Alla sidor wrappas automatiskt → consistent width.

### ReviewForm.tsx - Form Component

**Fil:** `src/components/sections/ReviewForm.tsx`

**Client Component:** Forms kräver interaktivitet

**Se [Forms & Validation](#-forms--validation) för full breakdown.**

---

## 📊 Data & Types

### TypeScript Types

**Fil:** `src/types/content.ts`

**Varför TypeScript types:**
- Autocomplete i VS Code
- Compile-time error checking
- Self-documenting code

```tsx
export type FighterProfile = {
  name: string;           // Måste vara string
  nickname?: string;      // Optional (? = kan vara undefined)
  weightClass: string;
  stance?: string;
  gym?: string;
  nationality?: string;
  bio: string;
  heroImage?: string;
  social: {               // Nested object
    instagram?: string;
    youtube?: string;
    patreon?: string;
  };
};
```

**Hur använda:**
```tsx
import type { FighterProfile } from '@/types/content';

// Function parameter typing
function displayFighter(fighter: FighterProfile) {
  return fighter.name; // ✅ TypeScript vet att .name finns
  return fighter.age;  // ❌ Error: Property 'age' does not exist
}
```

**Andra types:**

```tsx
export type FightRecord = {
  wins: number;
  losses: number;
  draws: number;
  ko: number;
  sub: number;
  decision: number;
};

export type Achievement = {
  date?: string;
  title: string;
  org?: string;
  belt?: string;
  description?: string;
};

export type Review = {
  id: string;
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;  // Union type - endast dessa värden
  text: string;
  createdAt: string;
  verified?: boolean;
};

export type PtSlot = {
  id: string;
  start: string;                    // ISO date string
  end: string;
  location: "Gym" | "Online";       // Literal union
  priceSEK: number;
  status: "available" | "reserved" | "booked";  // Literal union
};
```

### Mock Data

**Fil:** `src/data/mock.ts`

**Purpose:** Temporary data för development innan backend finns.

```tsx
import type { FighterProfile, FightRecord, Achievement, Review, PtSlot } from '@/types/content';

// Fighter profile
export const fighter: FighterProfile = {
  name: 'Sanny',
  nickname: 'The North',
  weightClass: 'Lightweight',
  // ... rest of data
};

// Fight statistics
export const fightRecord: FightRecord = {
  wins: 18,
  losses: 3,
  draws: 0,
  ko: 10,
  sub: 4,
  decision: 4
};

// Achievements array
export const achievements: Achievement[] = [
  {
    date: '2024-11-10',
    title: 'Titelmatch – Lättvikt',
    org: 'SWE MMA',
    belt: 'Champion',
    description: 'Vinst via TKO R2.'
  },
  // ... more achievements
];

// Reviews array
export const reviews: Review[] = [
  {
    id: 'r1',
    name: 'Mikael',
    rating: 5,
    text: 'Bästa PT:n jag haft!',
    createdAt: '2025-01-12',
    verified: true
  },
  // ... more reviews
];

// PT slots array
export const ptSlots: PtSlot[] = [
  {
    id: 'p1',
    start: '2025-11-05T09:00:00+01:00',  // ISO 8601 format
    end: '2025-11-05T10:00:00+01:00',
    location: 'Gym',
    priceSEK: 850,
    status: 'available'
  },
  // ... more slots
];
```

**Import i pages:**
```tsx
import { fighter, fightRecord, achievements } from '@/data/mock';
```

**Future plan:** Ersätt med API calls:
```tsx
// Future:
const fighter = await fetch('/api/fighter').then(r => r.json());
```

---

## 🔍 SEO & Metadata

### Root Metadata

**Fil:** `src/app/layout.tsx`

```tsx
export const metadata: Metadata = {
  title: 'Sanny – Officiell sida',
  description: 'Officiell webbplats för Sanny, svensk fighter och personlig tränare.',
  openGraph: {
    title: 'Sanny – Officiell sida',
    description: 'Svensk fighter och personlig tränare.',
    url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
    siteName: 'Sanny',
    images: [{ 
      url: '/images/og-default.jpg', 
      width: 1200, 
      height: 630 
    }],
    locale: 'sv_SE',
    type: 'website'
  },
  twitter: { 
    card: 'summary_large_image' 
  }
};
```

**Vad detta gör:**
- **title:** Browser tab title & search results
- **description:** Meta description för SEO
- **openGraph:** Data för Facebook, LinkedIn, Discord previews
- **twitter:** Twitter card format

**OpenGraph image:**
- `1200x630px` = standard size för social media
- `/images/og-default.jpg` = placeholder just nu
- Visas när någon delar länken på social media

### JSON-LD Structured Data

**Fil:** `src/lib/seo.ts`

```tsx
import type { FighterProfile } from '@/types/content';

export const buildPersonLd = (fighter: FighterProfile) => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: fighter.name,
  jobTitle: 'Athlete',
  nationality: fighter.nationality,
  sameAs: Object.values(fighter.social).filter(Boolean)
});
```

**Hur det används:**
```tsx
// src/app/page.tsx
import { fighter } from '@/data/mock';
import { buildPersonLd } from '@/lib/seo';

const jsonLd = buildPersonLd(fighter);

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
/>
```

**Vad är JSON-LD:**
- Structured data format som Google läser
- Hjälper Google förstå vad sidan handlar om
- Kan ge rich snippets i search results
- Schema.org = standard vocabulary

**Output exempel:**
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Sanny",
  "jobTitle": "Athlete",
  "nationality": "Sweden",
  "sameAs": [
    "https://instagram.com/sanny",
    "https://youtube.com/sanny"
  ]
}
```

### robots.txt

**Fil:** `src/app/robots.ts`

```tsx
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  return {
    rules: [
      {
        userAgent: '*',          // Alla bots
        allow: '/',              // Indexera allt
        disallow: ['/api/', '/admin/'],  // Utom dessa
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
```

**Output:** `http://localhost:3000/robots.txt`

```
User-Agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

Sitemap: http://localhost:3000/sitemap.xml
```

**Varför:**
- Säger till sökmotorer vad de får/inte får indexera
- `/api/` och `/admin/` ska inte synas i Google
- Länkar till sitemap för bättre indexering

### sitemap.xml

**Fil:** `src/app/sitemap.ts`

```tsx
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  const routes = [
    '',              // Homepage
    '/presentation',
    '/meriter',
    '/pt',
    '/recensioner',
    '/lankar',
    '/shop',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
```

**Output:** `http://localhost:3000/sitemap.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>http://localhost:3000/</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>http://localhost:3000/presentation</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <!-- ... more URLs -->
</urlset>
```

**Varför:**
- Listar alla sidor för sökmotorer
- `priority`: Homepage = 1.0 (högst), andra = 0.8
- `changeFrequency`: Hur ofta sidan uppdateras
- Hjälper Google crawla effektivare

**Future:** Dynamisk sitemap från CMS/database.

---

## 📝 Forms & Validation

### ReviewForm Deep Dive

**Fil:** `src/components/sections/ReviewForm.tsx`

**Technologies:**
- **React Hook Form:** Form state management
- **Zod:** Schema validation
- **shadcn/ui:** Form components

#### 1. Zod Schema

```tsx
import * as z from "zod";

const reviewFormSchema = z.object({
  name: z.string().min(2, {
    message: "Namn måste vara minst 2 tecken.",
  }),
  rating: z.coerce  // Convert string to number
    .number()
    .min(1, { message: "Välj ett betyg mellan 1 och 5." })
    .max(5, { message: "Välj ett betyg mellan 1 och 5." }),
  text: z.string().min(10, {
    message: "Recensionen måste vara minst 10 tecken.",
  }),
});

// Generate TypeScript type from schema
type ReviewFormValues = z.infer<typeof reviewFormSchema>;
```

**Vad z.coerce gör:**
```tsx
// Input är string från <input type="number">
<input type="number" value="5" />  // "5" (string)

// z.coerce.number() konverterar:
"5" → 5  // (number)
```

#### 2. React Hook Form Setup

```tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const form = useForm<ReviewFormValues>({
  resolver: zodResolver(reviewFormSchema),  // Använd zod för validation
  defaultValues: {
    name: "",
    rating: 5,
    text: "",
  },
});
```

**Vad detta gör:**
- `useForm` = hook för form state
- `zodResolver` = binder zod till react-hook-form
- `defaultValues` = initial värden när form laddas

#### 3. Form Submit Handler

```tsx
function onSubmit(data: ReviewFormValues) {
  console.log("Review submitted:", data);
  // data är redan validerad här!
  // data = { name: "John", rating: 5, text: "Great!" }
  
  form.reset();  // Nollställ form
  alert('Tack för din recension!');
  
  // TODO: Skicka till backend
  // await fetch('/api/reviews', { method: 'POST', body: JSON.stringify(data) });
}
```

#### 4. shadcn/ui Form Components

```tsx
<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)}>
    
    {/* Name field */}
    <FormField
      control={form.control}
      name="name"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Namn</FormLabel>
          <FormControl>
            <Input placeholder="Ditt namn" {...field} />
          </FormControl>
          <FormMessage />  {/* Visar error message om validation fails */}
        </FormItem>
      )}
    />
    
    {/* Rating field med live preview */}
    <FormField
      control={form.control}
      name="rating"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Betyg</FormLabel>
          <FormControl>
            <div className="flex items-center gap-4">
              <Input type="number" min="1" max="5" {...field} />
              <div className="text-yellow-400">
                {'★'.repeat(Number(field.value))}
                {'☆'.repeat(5 - Number(field.value))}
              </div>
            </div>
          </FormControl>
          <FormDescription>
            Välj ett betyg från 1 till 5 stjärnor
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
    
    {/* Text field */}
    <FormField
      control={form.control}
      name="text"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Din recension</FormLabel>
          <FormControl>
            <Textarea 
              placeholder="Berätta om din upplevelse..." 
              {...field} 
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
    
    <Button type="submit">Skicka recension</Button>
  </form>
</Form>
```

**Hur shadcn/ui Form fungerar:**

1. **`<Form>`:** Context provider - delar form state
2. **`<FormField>`:** Wrapper för varje field
   - `control={form.control}` = kopplar till react-hook-form
   - `name="fieldName"` = vilket fält i schema
   - `render={({ field }) => ...}` = render prop pattern
3. **`<FormItem>`:** Layout wrapper
4. **`<FormLabel>`:** Label med htmlFor automatiskt satt
5. **`<FormControl>`:** Wrapper för input component
6. **`<Input>` / `<Textarea>`:** Faktiska form controls
7. **`<FormMessage>`:** Visar validation errors automatiskt
8. **`{...field}`:** Spread all properties från react-hook-form
   - `value`, `onChange`, `onBlur`, `name`, `ref`

**Validation flow:**

```
User types → onChange → React Hook Form updates state
                      ↓
              Zod validates value
                      ↓
          Valid? FormMessage clear
          Invalid? FormMessage shows error
                      ↓
User clicks submit → onSubmit only runs if ALL fields valid
```

**Live rating preview:**
```tsx
{'★'.repeat(Number(field.value))}  // Input: 3 → ★★★
{'☆'.repeat(5 - Number(field.value))}  // 5 - 3 = 2 → ☆☆
// Result: ★★★☆☆
```

---

## 🎨 Styling System

### Tailwind CSS Fundamentals

**Utility-first approach:**
```tsx
// Traditional CSS:
// styles.css
.button {
  padding: 1rem 2rem;
  background-color: blue;
  border-radius: 0.5rem;
}

// Tailwind:
<button className="px-8 py-4 bg-blue-500 rounded-lg">
```

### Color System

**Zinc Palette (Dark theme):**
```
zinc-950  #09090b  (nästan svart)    → Backgrounds
zinc-900  #18181b                    → Cards
zinc-800  #27272a                    → Borders
zinc-700  #3f3f46                    → Hover states
zinc-500  #71717a                    → Muted text
zinc-400  #a1a1aa                    → Secondary text
zinc-100  #f4f4f5  (nästan vit)     → Primary text
```

**Usage patterns:**
```tsx
// Page background
<body className="bg-zinc-950 text-zinc-100">

// Card
<div className="bg-zinc-900 border border-zinc-800">

// Muted text
<p className="text-zinc-400">

// Hover
<button className="hover:bg-zinc-800">
```

**Semantic colors:**
```tsx
// Success
className="bg-green-600/20 text-green-400"  // 20% opacity background

// Warning
className="bg-yellow-600/20 text-yellow-400"

// Error
className="bg-red-600/20 text-red-400"
```

### Responsive Design

**Breakpoints:**
```
sm:  640px
md:  768px
lg:  1024px
xl:  1280px
2xl: 1536px
```

**Mobile-first approach:**
```tsx
<div className="
  grid-cols-1        /* Mobil: 1 kolumn */
  md:grid-cols-2     /* Tablet: 2 kolumner */
  lg:grid-cols-3     /* Desktop: 3 kolumner */
">
```

**Hide/Show på olika screens:**
```tsx
<div className="hidden md:flex">
  {/* Döljs på mobil, visas på desktop */}
</div>

<div className="md:hidden">
  {/* Visas på mobil, döljs på desktop */}
</div>
```

### Common Patterns

**Card component:**
```tsx
className="
  p-6                    /* Padding */
  bg-zinc-900            /* Background */
  rounded-lg             /* Rounded corners */
  border border-zinc-800 /* Border */
  hover:border-zinc-700  /* Hover effect */
  transition-colors      /* Smooth transition */
"
```

**Flexbox centering:**
```tsx
className="flex items-center justify-center"
// flex = display: flex
// items-center = align-items: center (vertical)
// justify-center = justify-content: center (horizontal)
```

**Grid layout:**
```tsx
className="grid grid-cols-1 md:grid-cols-3 gap-6"
// grid = display: grid
// grid-cols-1 = 1 column på mobil
// md:grid-cols-3 = 3 columns på desktop
// gap-6 = 1.5rem gap mellan items
```

**Text styling:**
```tsx
className="text-3xl font-bold tracking-wider"
// text-3xl = font-size: 1.875rem
// font-bold = font-weight: 700
// tracking-wider = letter-spacing: 0.05em
```

### Dark Mode Implementation

**In layout.tsx:**
```tsx
<html lang="sv" className="dark">
```

**This activates dark: variants:**
```tsx
className="
  bg-white text-black           /* Light mode (unused) */
  dark:bg-zinc-950 dark:text-zinc-100  /* Dark mode (active) */
"
```

**We only use dark mode,** så vi skippar `dark:` prefix och använder direkt zinc-950/100.

---

## 🛠️ Utvecklingsguide

### Lägga till en ny sida

**1. Skapa page.tsx:**
```bash
src/app/(site)/kontakt/page.tsx
```

**2. Implementera komponenten:**
```tsx
export default function KontaktPage() {
  return (
    <div className="py-10">
      <h1 className="text-4xl font-bold mb-8">
        Kontakt
      </h1>
      {/* Content */}
    </div>
  );
}
```

**3. Lägg till i navigation:**
```tsx
// src/components/layout/Header.tsx
const navItems = [
  // ...
  { href: "/kontakt", label: "Kontakt" },
];
```

**4. Uppdatera sitemap:**
```tsx
// src/app/sitemap.ts
const routes = [
  // ...
  '/kontakt',
];
```

**5. Testa:**
```
http://localhost:3000/kontakt
```

### Lägga till shadcn/ui komponent

```bash
npx shadcn@latest add [component-name]

# Exempel:
npx shadcn@latest add card
npx shadcn@latest add alert
npx shadcn@latest add badge
```

**Hitta komponenter:**
https://ui.shadcn.com/docs/components

**Efter installation:**
```tsx
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>
    Content here
  </CardContent>
</Card>
```

### Lägga till mock data

**1. Definiera type:**
```tsx
// src/types/content.ts
export type BlogPost = {
  id: string;
  title: string;
  content: string;
  publishedAt: string;
};
```

**2. Skapa mock data:**
```tsx
// src/data/mock.ts
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Min första blogpost',
    content: 'Lorem ipsum...',
    publishedAt: '2025-01-15'
  }
];
```

**3. Använd i page:**
```tsx
import { blogPosts } from '@/data/mock';

export default function BlogPage() {
  return (
    <div>
      {blogPosts.map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </article>
      ))}
    </div>
  );
}
```

### Debugging

**Console logs:**
```tsx
console.log('Debug:', data);
```

**Type checking:**
```bash
# Kör TypeScript checker manuellt
npx tsc --noEmit
```

**React DevTools:**
- Installera browser extension
- Inspect component tree
- Se props & state

**Next.js DevTools:**
```
http://localhost:3000/__nextjs_original-stack-frame
```

---

## 🐛 Vanliga Problem & Lösningar

### "Port 3000 is in use"

**Problem:**
```
⚠ Port 3000 is in use by process 33304
```

**Lösning 1:** Använd annan port
```bash
# Next.js väljer automatiskt 3001
npm run dev
```

**Lösning 2:** Döda processen (Windows)
```bash
# Hitta process
netstat -ano | findstr :3000

# Döda process (byt PID)
taskkill /PID 33304 /F
```

**Lösning 3:** Döda processen (Mac/Linux)
```bash
lsof -ti:3000 | xargs kill -9
```

### "Module not found: Can't resolve '@/...'"

**Problem:**
```
Module not found: Can't resolve '@/components/ui/button'
```

**Lösning:**
1. Kontrollera att filen finns: `src/components/ui/button.tsx`
2. Kontrollera tsconfig.json:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```
3. Starta om dev server: `Ctrl+C` → `npm run dev`

### "Hydration failed"

**Problem:**
```
Error: Hydration failed because the initial UI does not match 
what was rendered on the server
```

**Orsaker:**
1. **Olika HTML på server vs client**
   ```tsx
   // ❌ Fel: new Date() ger olika tid på server/client
   <p>{new Date().toLocaleString()}</p>
   
   // ✅ Rätt: Använd "use client" eller SSR data
   ```

2. **Invalid HTML nesting**
   ```tsx
   // ❌ Fel: <p> får inte ha <div> inuti
   <p><div>Text</div></p>
   
   // ✅ Rätt:
   <div><p>Text</p></div>
   ```

3. **Browser extensions** (ad blockers etc.)
   - Testa i incognito mode

### TypeScript errors i IDE men ej i terminal

**Problem:**
VS Code visar röda streck men `npm run dev` fungerar.

**Lösning:**
1. Restart TypeScript Server:
   - Cmd/Ctrl + Shift + P
   - "TypeScript: Restart TS Server"

2. Uppdatera VS Code TypeScript:
   - Settings → TypeScript Version → Use Workspace Version

### Tailwind classes fungerar inte

**Problem:**
```tsx
<div className="my-custom-class">
```
Ingen styling appliceras.

**Lösning:**
1. Tailwind innehåller INTE custom classes
2. Använd Tailwind utilities:
   ```tsx
   <div className="mt-4 mb-4">  // Använd istället
   ```
3. För custom CSS:
   ```css
   /* globals.css */
   @layer components {
     .my-custom-class {
       @apply mt-4 mb-4;
     }
   }
   ```

### "use client" needed

**Problem:**
```
Error: useState can only be used in Client Components
```

**Lösning:**
Lägg till `"use client"` överst i filen:
```tsx
"use client";  // FÖRSTA RADEN!

import { useState } from 'react';
// ... rest of file
```

---

## 🔮 Nästa Steg

### Omedelbart (Innan backend)

1. **Byt placeholder bilder**
   - `public/images/hero.jpg` → Faktisk hero image
   - `public/images/og-default.jpg` → OG image 1200x630px

2. **Lägg till fler reviews/achievements**
   - Uppdatera `src/data/mock.ts`
   - Lägg till riktiga testimonials

3. **Uppdatera social media länkar**
   ```tsx
   // src/data/mock.ts
   social: {
     instagram: 'https://instagram.com/sanny_thereal',
     youtube: 'https://youtube.com/@sanny',
     patreon: 'https://patreon.com/sanny'
   }
   ```

4. **Lägg till mer content på startsidan**
   - Hero section
   - Featured reviews
   - Call-to-action för PT

### Backend Integration

#### 1. API Routes (Next.js)

**Skapa API endpoint:**
```tsx
// src/app/api/reviews/route.ts
export async function POST(request: Request) {
  const data = await request.json();
  
  // Validera med zod
  const review = reviewSchema.parse(data);
  
  // Spara till databas
  await db.reviews.create(review);
  
  return Response.json({ success: true });
}
```

**Använd i form:**
```tsx
async function onSubmit(data: ReviewFormValues) {
  const response = await fetch('/api/reviews', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  
  if (response.ok) {
    alert('Tack för din recension!');
  }
}
```

#### 2. Stripe Integration (PT Bookings)

**Install:**
```bash
npm install stripe @stripe/stripe-js
```

**Server-side:**
```tsx
// src/app/api/checkout/route.ts
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: Request) {
  const { slotId } = await request.json();
  
  // Hämta slot från databas
  const slot = await db.ptSlots.findById(slotId);
  
  // Skapa Stripe Checkout Session
  const session = await stripe.checkout.sessions.create({
    line_items: [{
      price_data: {
        currency: 'sek',
        product_data: { name: `PT Session - ${slot.location}` },
        unit_amount: slot.priceSEK * 100, // Stripe uses öre
      },
      quantity: 1,
    }],
    mode: 'payment',
    success_url: `${baseUrl}/pt/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${baseUrl}/pt/cancelled`,
  });
  
  return Response.json({ url: session.url });
}
```

**Client-side:**
```tsx
// src/app/(site)/pt/page.tsx
const handleBooking = async (slotId: string) => {
  const response = await fetch('/api/checkout', {
    method: 'POST',
    body: JSON.stringify({ slotId }),
  });
  
  const { url } = await response.json();
  window.location.href = url; // Redirect till Stripe
};
```

#### 3. Database (Prisma + PostgreSQL)

**Install:**
```bash
npm install prisma @prisma/client
npx prisma init
```

**Schema:**
```prisma
// prisma/schema.prisma
model Review {
  id        String   @id @default(cuid())
  name      String
  rating    Int
  text      String
  verified  Boolean  @default(false)
  createdAt DateTime @default(now())
}

model PtSlot {
  id        String   @id @default(cuid())
  start     DateTime
  end       DateTime
  location  String
  priceSEK  Int
  status    String
  bookingId String?
}
```

**Generate client:**
```bash
npx prisma generate
npx prisma db push
```

**Använd:**
```tsx
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Hämta reviews
const reviews = await prisma.review.findMany();

// Skapa review
await prisma.review.create({
  data: { name, rating, text }
});
```

### Production Deployment

#### Vercel (Rekommenderat)

**1. Push till GitHub:**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

**2. Importera till Vercel:**
- Gå till vercel.com
- "New Project"
- Importera GitHub repo
- Vercel detecterar Next.js automatiskt

**3. Sätt miljövariabler:**
```
NEXT_PUBLIC_SITE_URL=https://sanny.se
STRIPE_SECRET_KEY=sk_live_...
DATABASE_URL=postgresql://...
```

**4. Deploy:**
- Vercel deployer automatiskt vid git push
- Production URL: `https://sanny.vercel.app`

#### Custom Domain

**1. Köp domän (ex: sanny.se)**

**2. Lägg till i Vercel:**
- Project Settings → Domains
- Lägg till sanny.se
- Följ DNS-instruktioner

**3. Uppdatera miljövariabel:**
```
NEXT_PUBLIC_SITE_URL=https://sanny.se
```

### Performance Optimization

**1. Image Optimization:**
```tsx
import Image from 'next/image';

<Image
  src="/images/hero.jpg"
  alt="Sanny training"
  width={1200}
  height={800}
  priority  // För hero images
/>
```

**2. Dynamic Imports:**
```tsx
// Lazy load heavy components
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
});
```

**3. Metadata per sida:**
```tsx
// src/app/(site)/presentation/page.tsx
export const metadata = {
  title: 'Presentation - Sanny',
  description: 'Lär känna Sanny, Swedish MMA fighter...',
};
```

---

## 📞 Support & Resurser

### Dokumentation

- **Next.js:** https://nextjs.org/docs
- **React:** https://react.dev
- **Tailwind CSS:** https://tailwindcss.com/docs
- **shadcn/ui:** https://ui.shadcn.com
- **TypeScript:** https://www.typescriptlang.org/docs
- **Zod:** https://zod.dev
- **React Hook Form:** https://react-hook-form.com

### Verktyg

- **VS Code Extensions:**
  - ES7+ React/Redux/React-Native snippets
  - Tailwind CSS IntelliSense
  - Prettier - Code formatter
  - ESLint

- **Browser DevTools:**
  - React Developer Tools
  - Chrome DevTools (F12)

### När något inte fungerar

1. **Läs error meddelandet** - ofta mycket beskrivande
2. **Check console** - både browser och terminal
3. **Sök på Stack Overflow** - nästan alltid någon haft samma problem
4. **Läs dokumentation** - särskilt för Next.js App Router
5. **Testa i incognito mode** - uteslut browser extensions
6. **Starta om dev server** - löser många caching-issues

---

## 🎓 För Nybörjare

### Första veckans fokus

**Vecka 1:** Förstå strukturen
- Läs igenom denna README (ja, hela!)
- Kör projektet lokalt
- Öppna varje fil och läs kommentarer
- Ändra lite text och se ändringarna live
- Experimentera med Tailwind classes

**Vecka 2:** Komponenter
- Förstå skillnaden Server vs Client Components
- Skapa en enkel ny sida
- Kopiera en befintlig komponent och anpassa
- Lär dig shadcn/ui genom att läsa deras kod

**Vecka 3:** Data & Types
- Förstå TypeScript types
- Lägg till ny data i mock.ts
- Visa data på en sida
- Experimentera med .map() och .filter()

**Vecka 4:** Forms & State
- Förstå ReviewForm.tsx grundligt
- Skapa ett enkelt eget formulär
- Lär dig react-hook-form basics
- Experimentera med zod validation

### Viktiga begrepp att förstå

**JSX/TSX:**
```tsx
// JavaScript/TypeScript i HTML-liknande syntax
const Component = () => {
  const name = "Sanny";
  return <div>Hello {name}</div>;  // Curly braces = JS expression
};
```

**Props:**
```tsx
// Data som skickas till komponenter
function Greeting({ name }: { name: string }) {
  return <h1>Hello {name}</h1>;
}

<Greeting name="Sanny" />
```

**State:**
```tsx
// Data som kan ändras och triggar re-render
const [count, setCount] = useState(0);

<button onClick={() => setCount(count + 1)}>
  Count: {count}
</button>
```

**Array methods:**
```tsx
// .map() = transformera varje item i array
{items.map((item) => <div key={item.id}>{item.name}</div>)}

// .filter() = filtrera items
{items.filter((item) => item.visible).map(...)}
```

**Conditional rendering:**
```tsx
// && operator
{isLoggedIn && <p>Welcome!</p>}

// Ternary
{isLoggedIn ? <p>Welcome</p> : <p>Please login</p>}
```

**Destructuring:**
```tsx
// Object destructuring
const { name, age } = person;

// Array destructuring
const [first, second] = array;

// Function parameters
function Component({ title, description }: Props) { }
```

---

## ✅ Checklist för Production

Innan du deployar till produktion:

**Content:**
- [ ] Byt ut alla placeholder bilder
- [ ] Uppdatera social media länkar
- [ ] Lägg till verklig content (reviews, achievements)
- [ ] Dubbelkolla all text för stavfel

**SEO:**
- [ ] Sätt rätt `NEXT_PUBLIC_SITE_URL`
- [ ] Verifiera OpenGraph image (1200x630px)
- [ ] Testa Google Rich Results Test
- [ ] Verifiera robots.txt och sitemap.xml

**Functionality:**
- [ ] Testa alla länkar
- [ ] Testa forms (validation)
- [ ] Testa mobil navigation
- [ ] Testa på olika browsers (Chrome, Safari, Firefox)
- [ ] Testa på olika devices (mobil, tablet, desktop)

**Performance:**
- [ ] Optimera bilder
- [ ] Kör Lighthouse audit
- [ ] Kontrollera load times

**Security:**
- [ ] Sätt secrets som miljövariabler (aldrig i kod)
- [ ] HTTPS aktiverat
- [ ] Säkra API endpoints med auth

**Backend (när implementerad):**
- [ ] Database backups
- [ ] Error logging
- [ ] Rate limiting på API
- [ ] CORS konfiguration

---

**Lycka till med utvecklingen! 🚀**

Om något är oklart, läs först denna README igen grundligt. 
Sedan Stack Overflow. Sedan frå the other developer. 😊
