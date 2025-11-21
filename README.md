# Al Gharabli Group — Modern Portfolio Website

A high-performance, modern portfolio website built with Vue 3, Vite, Tailwind CSS, and GSAP animations.

## Features

- Vue 3 Composition API with TypeScript
- Tailwind CSS with custom brand theme
- GSAP animations with ScrollTrigger for smooth, tasteful reveals
- Fully responsive design (mobile-first)
- SEO-optimized with meta tags, Open Graph, sitemap, and robots.txt
- Accessible (WCAG-friendly focus states, semantic HTML)
- Fast page transitions
- Contact form with validation
- Filterable project portfolio

## Tech Stack

- **Framework**: Vue 3 (Composition API) + Vite
- **Styling**: Tailwind CSS
- **Animations**: GSAP + ScrollTrigger
- **Icons**: Lucide Vue Next
- **Routing**: Vue Router 4
- **Language**: TypeScript

## Brand Theme

- Primary Blue: `#2E6EA1` with gradient range `#1F6DA5 → #1B84B8`
- Dark Graphite: `#2C2F33` for headings and navigation
- Light Background: `#F7F9FC` with neutral grays
- Custom gradient utilities for CTAs and highlights

## Setup & Development

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:5173` to view the site.

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── AppNavbar.vue
│   ├── SiteFooter.vue
│   ├── ServiceCard.vue
│   ├── ProjectCard.vue
│   ├── ProjectGrid.vue
│   ├── FilterChips.vue
│   ├── ContactForm.vue
│   └── SectionHeader.vue
├── pages/              # Route pages
│   ├── Home.vue
│   ├── Work.vue
│   ├── About.vue
│   └── Contact.vue
├── data/               # Seed data
│   ├── projects.ts
│   └── services.ts
├── router/
│   └── index.ts
├── App.vue
├── main.ts
└── style.css
```

## Content Management

### Adding Projects

Edit `src/data/projects.ts` to add or modify portfolio projects:

```typescript
{
  id: 'project-slug',
  title: 'Project Name',
  category: 'Website' | 'Mobile App' | 'Web App',
  categories: ['Website', 'Mobile App'],
  description: 'Short description of the project',
  image: 'https://example.com/image.jpg',
}
```

### Adding Services

Edit `src/data/services.ts` to modify the services offered:

```typescript
{
  id: 'service-id',
  title: 'Service Title',
  description: 'Service description',
  icon: 'globe' | 'smartphone' | 'network' | 'layout' | 'lightbulb' | 'users',
}
```

## Future Enhancements

- **Dark Mode**: The theme is structured to easily support a dark mode toggle. Add a theme switcher component and extend Tailwind config with dark variants.
- **CMS Integration**: Connect to a headless CMS for dynamic content management.
- **Blog Section**: Add a blog route for company updates and insights.
- **Multi-language Support**: Implement i18n for Arabic/English versions.

## Performance

- Code-split routes for optimal loading
- Lazy-loaded images with proper `srcset` and alt text
- LCP target: ≤ 2.5s on typical broadband
- Optimized animations with GSAP for 60fps

## Accessibility

- Semantic HTML landmarks
- Visible focus states on all interactive elements
- ARIA labels where appropriate
- Keyboard navigation support

## License

© 2025 Al Gharabli Group. All rights reserved.
