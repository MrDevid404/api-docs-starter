# API Documentation Starter

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)
[![Vue.js](https://img.shields.io/badge/Vue.js-3.x-green.svg)](https://vuejs.org/)
[![VitePress](https://img.shields.io/badge/VitePress-1.0-blue.svg)](https://vitepress.dev/)
[![Deployed with Vercel](https://img.shields.io/badge/Deployed%20with-Vercel-black?logo=vercel&logoColor=white)](https://api-docs-starter-rafactx.vercel.app/)

A modern, professional API documentation template built with VitePress, Vue 3, and Scalar. This starter provides everything you need to create beautiful, interactive API documentation with multi-language support and best-in-class developer experience.

> **📖 Also available in Portuguese**: [README.pt-br.md](README.pt-br.md)

## Quick Start

Get your API documentation up and running in minutes.

### Prerequisites

- **Node.js** (>=18.0.0)
- **pnpm** (>=8.15.5) - recommended for optimal performance

### Installation

```bash
# Clone the repository
git clone https://github.com/rafactx/api-docs-starter.git
cd api-docs-starter

# Install dependencies
pnpm install
```

### Development

Start the development server with hot-reloading:

```bash
pnpm run dev
```

Visit [`http://localhost:5173`](http://localhost:5173) to see your documentation.

### Production Build

Generate a static version for deployment:

```bash
pnpm run build
```

Preview the production build locally:

```bash
pnpm run preview
```

## Project Structure

```plaintext
.
├── docs/                              # VitePress Documentation
│   ├── .vitepress/                    # VitePress configuration & theme
│   │   ├── components/                # Custom Vue components
│   │   │   ├── ApiCard.vue           # API feature cards
│   │   │   ├── HeroSection.vue       # Landing page hero
│   │   │   ├── ScalarApi.vue         # Interactive API reference
│   │   │   └── SpotlightBackground.vue # Animated background
│   │   ├── theme/                     # Global styles and theme files
│   │   │   ├── fonts.css            # Font loading and configuration
│   │   │   ├── style.css            # Global styles
│   │   │   ├── sidebar.css          # Sidebar customization
│   │   │   ├── api-docs-responsive.css # Mobile optimizations
│   │   │   └── theme.css            # Color palette and variables
│   │   ├── config.ts                 # Main VitePress configuration
│   │   └── index.ts                  # Theme entry point
│   ├── public/                       # Static assets
│   │   ├── openapi.json             # OpenAPI specification (English)
│   │   ├── openapi-pt-br.json        # OpenAPI specification (Portuguese)
│   │   ├── openapi-es.json          # OpenAPI specification (Spanish)
│   │   ├── openapi-fr.json          # OpenAPI specification (French)
│   │   ├── logo-light.svg           # Light theme logo
│   │   └── logo-dark.svg            # Dark theme logo
│   ├── en/                           # English content
│   ├── es/                           # Spanish content
│   ├── fr/                           # French content
│   ├── pt/                           # Portuguese content
│   └── index.md                      # Language redirection
├── .github/                          # GitHub templates and workflows
├── .gitignore                        # Git exclusions
├── LICENSE                           # MIT License
├── CHANGELOG.md                     # Version history and changes
├── CODE_OF_CONDUCT.md               # Community guidelines
├── CONTRIBUTING.md                  # Contribution guidelines
├── SECURITY.md                      # Security policy
├── package.json                      # Dependencies and scripts
├── tsconfig.json                     # TypeScript configuration
└── vite.config.ts                    # Vite build configuration
```

## Key Features

### Modern Design

- **Apple-inspired UI** with clean, professional aesthetics
- **Dark/Light theme** with seamless switching
- **Responsive design** optimized for all devices
- **Smooth animations** and micro-interactions

### Multi-language Support

- **4 languages**: English, Portuguese, Spanish, French
- **Automatic language detection** based on browser preferences
- **Language switcher** with flag indicators
- **Localized OpenAPI specifications** for each language

### Interactive API Reference

- **Scalar integration** for interactive API testing
- **Live endpoint testing** directly in documentation
- **Code examples** in multiple programming languages
- **Comprehensive schema documentation**

### Performance Optimized

- **Code splitting** for optimal loading
- **Lazy loading** for components and images
- **Optimized builds** with tree shaking
- **Progressive Web App** ready
- **Vercel Analytics** for visitor tracking and insights
- **Speed Insights** for performance monitoring

### Developer Experience

- **TypeScript** for type safety
- **Hot module replacement** for rapid development
- **ESLint + Prettier** for code quality
- **Comprehensive tooling** out of the box

## Customization Guide

### Branding and Colors

Update the theme colors in `docs/.vitepress/theme/theme.css`:

```css
:root {
  /* Update these variables with your brand colors */
  --vp-c-brand: #3b82f6;
  --vp-c-brand-light: #60a5fa;
  --vp-c-brand-dark: #2563eb;
}
```

### Logo and Assets

Replace the default logos in `docs/public/`:

- `logo-light.svg` - Light theme logo
- `logo-dark.svg` - Dark theme logo

### OpenAPI Specification

Customize the API specification in `docs/public/openapi.json`:

1. Update the `info` section with your API details
2. Add your API endpoints and schemas
3. Translate for other languages if needed

### Content Organization

Add your documentation pages in the respective language folders:

- `docs/en/` - English documentation
- `docs/pt/` - Portuguese documentation
- `docs/es/` - Spanish documentation
- `docs/fr/` - French documentation

### Navigation

Update the sidebar and navigation in `docs/.vitepress/config.ts`:

```typescript
sidebar: [
  {
    text: 'API Guide',
    items: [
      { text: '🚀 Introduction', link: '/en/intro' },
      { text: '🔐 Authentication', link: '/en/authentication' },
      // Add your pages here
    ]
  }
]
```

## Deployment

### Static Hosting

The build output is static and can be deployed to any static hosting service:

```bash
# Build for production
pnpm run build

# The static files are in docs/.vitepress/dist
```

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Set the build command to `pnpm run build`
3. Set the output directory to `docs/.vitepress/dist`

**Analytics & Monitoring**: This template includes Vercel Analytics and Speed Insights out of the box. Once deployed, you'll automatically start collecting visitor data and performance metrics in your Vercel dashboard.

### Other Platforms

- **Netlify**: Build command `pnpm run build`, Publish directory `docs/.vitepress/dist`
- **GitHub Pages**: Use the `gh-pages` branch
- **AWS S3**: Upload the `docs/.vitepress/dist` folder

## Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run quality checks: `pnpm run lint && pnpm run format`
5. Commit your changes: `git commit -m 'feat: add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [VitePress](https://vitepress.dev/) - Static Site Generator
- [Vue.js](https://vuejs.org/) - Progressive JavaScript Framework
- [Scalar](https://scalar.com/) - Interactive API Reference
- [TailwindCSS](https://tailwindcss.com/) - Utility-First CSS Framework

## Support

- 📧 **Email**: [rafactx@icloud.com](mailto:rafactx@icloud.com)
- 🐛 **Issues**: [GitHub Issues](https://github.com/rafactx/api-docs-starter/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/rafactx/api-docs-starter/discussions)

---

Made with care by [rafactx](https://github.com/rafactx) and contributors