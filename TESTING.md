# Testing Guide

## 🧪 Hur man testar ReviewForm

### Öppna Browser Console (Utvecklarkonsolen)

**Windows:**
- Chrome/Edge: `F12` eller `Ctrl + Shift + J`
- Firefox: `F12` eller `Ctrl + Shift + K`

**macOS:**
- Chrome/Edge: `Cmd + Option + J`
- Firefox: `Cmd + Option + K`

**Alternativt:**
1. Högerklicka någonstans på sidan
2. Välj "Inspektera" eller "Inspect"
3. Klicka på fliken "Console"

### Testa formuläret

1. **Öppna sidan:**
   ```
   http://localhost:3000/recensioner
   ```

2. **Scrolla ner till formuläret** längst ned på sidan

3. **Fyll i formuläret:**
   - **Namn:** Skriv ditt namn (minst 2 tecken)
   - **Betyg:** Skriv ett nummer 1-5 (du ser stjärnorna uppdateras)
   - **Din recension:** Skriv minst 10 tecken

4. **Klicka "Skicka recension"**

5. **Kontrollera resultatet:**
   - En alert-box dyker upp: "Tack för din recenssion!"
   - I konsolen ser du: 
     ```
     Review submitted: {name: "...", rating: 5, text: "..."}
     ```
   - Formuläret rensas automatiskt

### Testa valideringen

**För kort namn:**
- Skriv bara "A"
- Försök skicka
- Felmeddelande: "Namn måste vara minst 2 tecken."

**Ogiltigt betyg:**
- Lämna betyg tomt eller skriv 0 eller 6
- Felmeddelande: "Välj ett betyg mellan 1 och 5."

**För kort recension:**
- Skriv bara "Test"
- Felmeddelande: "Recensionen måste vara minst 10 tecken."

### Screenshot av konsolen

När du skickat formuläret ska du se något liknande i konsolen:

```
Review submitted: {
  name: "Anna Andersson",
  rating: 5,
  text: "Mycket bra träning! Sanny är en fantastisk coach."
}
```

## 🔍 Felsökning

### Label-varning

Om du ser en varning om `<label for=FORM_ELEMENT>`, är det troligen en falsk positiv från Next.js dev-mode. Formuläret använder shadcn/ui som automatiskt kopplar labels till inputs med unika IDs.

**Lösning:**
1. Ignorera varningen - funktionaliteten påverkas inte
2. Eller testa i produktion: `npm run build && npm start`

### Formuläret skickas inte

- Kontrollera att alla fält är korrekt ifyllda
- Se efter röda felmeddelanden under fälten
- Öppna konsolen och leta efter JavaScript-fel

### Konsolen visar inget

- Se till att du är på "Console"-fliken (inte "Elements" eller "Network")
- Rensa konsolen med "🚫" knappen och försök igen
- Kontrollera att formuläret faktiskt skickades (alert-box dyker upp)

---

## 🎫 Hur man testar PT-bokningar

### Testa bokningsflödet

1. **Öppna sidan:**
   ```
   http://localhost:3000/pt
   ```

2. **Klicka på "Boka"-knappen** på ett tillgängligt PT-slot

3. **Vad händer:**
   - Knappen visar "Laddar..." under bearbetning
   - Systemet försöker anropa `/api/checkout` (POST)
   - Eftersom API:t inte finns ännu, öppnas en Dialog

4. **Dialog-meddelande:**
   - Titel: "Betalning" med kreditkortsikon
   - Text: "Stripe-flöde kommer snart"
   - Förklaring om kommande Stripe-integration
   - "Stäng"-knapp

5. **Kontrollera konsolen:**
   ```
   Booking attempt for slot: p1
   ```

### Vad testas

**Fetch-anrop:**
- URL: `/api/checkout`
- Method: `POST`
- Body: `{"slotId": "p1"}` (eller vilket slot-ID som klickades)

**UI-feedback:**
- Knapp blir disabled under laddning
- "Laddar..."-text visas
- Dialog öppnas när API inte svarar
- Dialog kan stängas

### Framtida implementation

När backend är klar kommer bokningsflödet att:
1. Skicka slotId till `/api/checkout`
2. Få tillbaka en Stripe Checkout URL
3. Omdirigera användaren till Stripe
4. Hantera betalning och bekräftelse

---

## 🔍 Hur man testar SEO-funktioner

### Testa robots.txt

1. **Öppna i webbläsare:**
   ```
   http://localhost:3000/robots.txt
   ```

2. **Förväntat resultat:**
   ```
   User-Agent: *
   Allow: /
   Disallow: /api/
   Disallow: /admin/

   Sitemap: http://localhost:3000/sitemap.xml
   ```

### Testa sitemap.xml

1. **Öppna i webbläsare:**
   ```
   http://localhost:3000/sitemap.xml
   ```

2. **Förväntat resultat:**
   - XML-fil med alla sidor
   - URLs för: /, /presentation, /meriter, /pt, /recensioner, /lankar, /shop
   - lastModified datum
   - changeFrequency: "weekly"
   - priority: 1 för startsidan, 0.8 för övriga

### Testa JSON-LD Structured Data

1. **Öppna startsidan:**
   ```
   http://localhost:3000
   ```

2. **Högerklicka och välj "Visa sidkällkod" (View Page Source)**

3. **Sök efter** `application/ld+json`

4. **Förväntat resultat:**
   ```json
   {
     "@context": "https://schema.org",
     "@type": "Person",
     "name": "Sanny",
     "jobTitle": "Athlete",
     "nationality": "Sweden",
     "sameAs": ["#", "#", "#"]
   }
   ```

### Validera Structured Data

**Använd Google's Rich Results Test:**
1. Gå till: https://search.google.com/test/rich-results
2. Ange URL: `http://localhost:3000` (eller använd "Code" för att klistra in HTML)
3. Klicka "Test URL"
4. Kontrollera att "Person"-schema upptäcks

**Eller använd Schema.org Validator:**
1. Gå till: https://validator.schema.org/
2. Klistra in sidans HTML eller URL
3. Kontrollera att schemat är giltigt

### Vad testas

**SEO-funktioner:**
- ✅ robots.txt - Styr sökmotorindexering
- ✅ sitemap.xml - Hjälper sökmotorer hitta alla sidor
- ✅ JSON-LD - Strukturerad data om personen (fighter)
- ✅ Dynamisk baseUrl från miljövariabler

**I produktion:**
- Sätt `NEXT_PUBLIC_SITE_URL=https://dindomän.se` i `.env.local`
- robots.txt och sitemap.xml uppdateras automatiskt

