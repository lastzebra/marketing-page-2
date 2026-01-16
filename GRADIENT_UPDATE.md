# Light Blue → Purple Gradient System Update

## Überblick
Das Farbsystem wurde von Dunkelgrün auf einen **Light Blue → Purple Gradient** umgestellt, um einen premium, clubby Look (melodic techno / deep house) zu erzielen.

## A) Neue Design-Tokens

### CSS Variables (app/globals.css)
```css
/* Primary Accent Colors */
--accent-blue: #38BDF8;      /* sky - light blue/cyan */
--accent-purple: #7C3AED;    /* violet/purple */

/* Primary Gradients */
--grad-accent: linear-gradient(135deg, var(--accent-blue) 0%, var(--accent-purple) 100%);
--grad-accent-soft: linear-gradient(135deg, rgba(56,189,248,0.15) 0%, rgba(124,58,237,0.15) 100%);
--grad-hero: radial-gradient(...) /* aktualisiert mit neuen Farben */
--grad-glow: linear-gradient(135deg, var(--accent-blue), var(--accent-purple));

/* Glow Effects */
--glow-accent: 0 0 32px rgba(56,189,248,0.25), 0 0 48px rgba(124,58,237,0.20);
```

### Tailwind Tokens (tailwind.config.js)
- `accent-blue` → `var(--accent-blue)`
- `accent-purple` → `var(--accent-purple)`
- `bg-grad-accent` → Hauptgradient
- `bg-grad-accent-soft` → Weicher Gradient für Hintergründe
- `shadow-glow-accent` → Glow-Effekt

## B) Angepasste Komponenten

### 1. Hero Section
- **Background**: `bg-grad-hero` mit `animate-gradient` (langsame Animation)
- **Headline Text**: `bg-grad-accent` für Gradient-Text
- **CTA Button**: `bg-grad-accent` mit `animate-gradient` und `hover:shadow-glow-accent`

### 2. Primary CTA Button
- **Background**: `bg-grad-accent` (Light Blue → Purple)
- **Hover**: `hover:shadow-glow-accent`
- **Animation**: `animate-gradient` (15s, respektiert prefers-reduced-motion)

### 3. Headlines & Accents
- Alle Section-Headlines verwenden `bg-grad-accent` für Gradient-Text
- Header Logo verwendet `bg-grad-accent`

### 4. Cards & Badges
- Hover-Borders: `hover:border-accent-purple/30`
- Icon-Hintergründe: `bg-accent-purple/10` oder `bg-accent-blue/10`

### 5. Glows & Shadows
- Decorative Glows: `bg-accent-purple/5` oder `bg-accent-blue/5` mit `blur-3xl`
- Cursor Glow: Aktualisiert mit Blue-Farbe

## C) Gradient-Animation

### Implementierung
- **Klasse**: `.animate-gradient`
- **Animation**: `gradient-shift` (15s ease infinite)
- **Reduced Motion**: Automatisch deaktiviert bei `prefers-reduced-motion: reduce`

### Verwendung
- Hero Background: `bg-grad-hero animate-gradient`
- Primary CTA Button: `bg-grad-accent animate-gradient`

## D) Änderungen an Dateien

### Globale Styles
- ✅ `app/globals.css` - Neue Gradient-Tokens, Animation, Reduced Motion Support

### Tailwind Config
- ✅ `tailwind.config.js` - Neue Farben, Background-Images, Shadows

### Komponenten
- ✅ `src/components/ui/Button.tsx` - Primary CTA mit Gradient + Animation
- ✅ `src/components/ui/Badge.tsx` - Aktualisiert auf accent-purple/accent-blue
- ✅ `src/components/ui/Glow.tsx` - Neue Glow-Varianten
- ✅ `src/components/ui/Card.tsx` - Hover-Border aktualisiert
- ✅ `src/components/ui/LanguageToggle.tsx` - Accent-Farben
- ✅ `src/components/ui/CursorGlow.tsx` - Blue-Glow aktualisiert

### Sections
- ✅ `src/components/sections/Hero.tsx` - Background + Headline-Gradient
- ✅ `src/components/sections/About.tsx` - Gradient-Text, Icon-Farben
- ✅ `src/components/sections/ForWhom.tsx` - Icon-Farben
- ✅ `src/components/sections/Benefits.tsx` - Icon-Farben, Gradient-Text
- ✅ `src/components/sections/Features.tsx` - Icon-Farben
- ✅ `src/components/sections/HowItWorks.tsx` - Farben aktualisiert
- ✅ `src/components/sections/Community.tsx` - Icon-Farben
- ✅ `src/components/sections/Stats.tsx` - Gradient-Stat-Werte
- ✅ `src/components/sections/Testimonials.tsx` - Farben aktualisiert
- ✅ `src/components/sections/FAQ.tsx` - Gradient-Text
- ✅ `src/components/sections/FinalCTA.tsx` - Background-Glows, Gradient-Text

### Layout
- ✅ `src/components/layout/Header.tsx` - Logo-Gradient
- ✅ `src/components/layout/Footer.tsx` - Links aktualisiert

## E) Gradient-Anpassung

### Farben ändern
In `app/globals.css`:
```css
--accent-blue: #38BDF8;   /* Ändere zu gewünschtem Light Blue */
--accent-purple: #7C3AED; /* Ändere zu gewünschtem Purple */
```

### Gradient-Winkel ändern
In `app/globals.css`:
```css
--grad-accent: linear-gradient(135deg, ...); /* 135deg = diagonal */
/* Mögliche Werte: 90deg (horizontal), 180deg (vertikal), 135deg (diagonal) */
```

### Gradient-Intensität ändern
Für weichere Hintergründe:
```css
--grad-accent-soft: linear-gradient(135deg, rgba(56,189,248,0.10) ..., rgba(124,58,237,0.10) ...);
/* Alpha-Werte reduzieren: 0.15 → 0.10 oder 0.05 */
```

### Animation-Geschwindigkeit ändern
In `app/globals.css`:
```css
.animate-gradient {
  animation: gradient-shift 15s ease infinite; /* 15s → langsamer, 10s → schneller */
}
```

## F) Accessibility

### Reduced Motion
- ✅ Alle Animationen werden bei `prefers-reduced-motion: reduce` deaktiviert
- Implementiert in `app/globals.css`:
```css
@media (prefers-reduced-motion: reduce) {
  .animate-gradient {
    animation: none;
  }
}
```

### Kontrast
- Gradient-Text auf dunklem Hintergrund: ✅ Guter Kontrast
- Button-Text (weiß) auf Gradient-Hintergrund: ✅ AA-Konform

## Zusammenfassung

Alle Landing-Page-Komponenten verwenden jetzt das neue **Light Blue → Purple Gradient System**:
- ✅ Konsistente Verwendung über alle Sektionen
- ✅ Langsame, subtile Animation (15s)
- ✅ Reduced Motion Support
- ✅ Performance-optimiert (CSS-only)
- ✅ Zentrale Verwaltung über CSS-Variablen

Die Gradient-Tokens sind zentral in `app/globals.css` definiert und können einfach angepasst werden.
