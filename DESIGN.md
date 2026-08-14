---
name: Strategic Professional
colors:
  surface: '#faf8ff'
  surface-dim: '#dad9e0'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f9'
  surface-container: '#eeedf4'
  surface-container-high: '#e9e7ee'
  surface-container-highest: '#e3e2e8'
  on-surface: '#1a1b20'
  on-surface-variant: '#444650'
  inverse-surface: '#2f3035'
  inverse-on-surface: '#f1f0f6'
  outline: '#747682'
  outline-variant: '#c4c6d2'
  surface-tint: '#415ca1'
  primary: '#02286d'
  on-primary: '#ffffff'
  primary-container: '#234084'
  on-primary-container: '#94aefa'
  inverse-primary: '#b2c5ff'
  secondary: '#555f6d'
  on-secondary: '#ffffff'
  secondary-container: '#d6e0f1'
  on-secondary-container: '#596372'
  tertiary: '#4c2200'
  on-tertiary: '#ffffff'
  tertiary-container: '#6d3400'
  on-tertiary-container: '#f09e63'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2ff'
  primary-fixed-dim: '#b2c5ff'
  on-primary-fixed: '#001849'
  on-primary-fixed-variant: '#274387'
  secondary-fixed: '#d9e3f4'
  secondary-fixed-dim: '#bdc7d8'
  on-secondary-fixed: '#121c28'
  on-secondary-fixed-variant: '#3e4755'
  tertiary-fixed: '#ffdcc6'
  tertiary-fixed-dim: '#ffb785'
  on-tertiary-fixed: '#301400'
  on-tertiary-fixed-variant: '#713702'
  background: '#faf8ff'
  on-background: '#1a1b20'
  surface-variant: '#e3e2e8'
  background-soft: '#F7F9FC'
  background-blue: '#F2F6FF'
  primary-dark: '#182D60'
  primary-light: '#4D6DB8'
  text-muted: '#6B7280'
  success: '#16835B'
  warning: '#B7791F'
  danger: '#C24141'
typography:
  display:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-mobile:
    fontFamily: Inter
    fontSize: 42px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h1:
    fontFamily: Inter
    fontSize: 52px
    fontWeight: '700'
    lineHeight: '1.2'
  h1-mobile:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
  h2:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.3'
  h2-mobile:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1200px
  container-margin: 20px
  gutter: 24px
  section-padding-lg: 120px
  section-padding-md: 80px
---

# PRIMA WISNU ABROR AZMI — Personal Portfolio Design System

## 1. Design Overview
This document defines the visual identity for the personal portfolio of PRIMA WISNU ABROR AZMI. The design communicates professionalism, credibility, strategic thinking, and technological maturity, positioning Prima as a "Technology + Business + AI Problem Solver."

## 2. Design Personality
- Professional, Premium, Clean, Intelligent, Modern, Minimal, Strategic, Trustworthy.
- Avoid: Cyberpunk, gaming-inspired, neon-heavy, visually noisy, or generic SaaS templates.

## 3. Color System
```css
:root {
  --color-background: #FFFFFF;
  --color-background-soft: #F7F9FC;
  --color-background-blue: #F2F6FF;

  --color-primary: #234084;
  --color-primary-dark: #182D60;
  --color-primary-light: #4D6DB8;

  --color-text-primary: #111827;
  --color-text-secondary: #4B5563;
  --color-text-muted: #6B7280;

  --color-border: #E5E7EB;
  --color-border-light: #EEF1F5;

  --color-success: #16835B;
  --color-warning: #B7791F;
  --color-danger: #C24141;

  --color-white: #FFFFFF;
}
```

## 4. Typography
- **Primary Font:** Inter (Fallback: system-ui)
- **Scale:**
  - Display: 64px (Desktop) / 42px (Mobile)
  - H1: 52px (Desktop) / 36px (Mobile)
  - H2: 40px (Desktop) / 30px (Mobile)
  - Body: 16px (Desktop) / 15-16px (Mobile)

## 5. Layout & Components
- **Container:** `width: min(100% - 40px, 1200px); margin-inline: auto;`
- **Radius:** Buttons 10-12px, Cards 16-20px.
- **Shadows:** Extremely subtle (`0 8px 30px rgba(17, 24, 39, 0.04)`).
- **Navigation:** Sticky, minimal, translucent with backdrop-blur.
- **Expertise Cards:** Grid-based, clean, high whitespace.
- **Timeline:** Minimalist line-and-node for problem-solving process.

## 6. Animation
- Subtle fade-ins, slide-ups, and hover elevations (200-500ms).
- No aggressive text or scroll-jacking animations.
