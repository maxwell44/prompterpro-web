# Prompter Pro — Teleprompter App for Video Creators

A modern teleprompter landing page built with React, Vite, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **React 19** - UI library
- **Vite 7** - Build tool and dev server
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **React Router** - Routing
- **React Query** - Data fetching
- **i18n** - Multi-language support (English/Chinese)

## 📁 Project Structure

```
prompter-pro/
├── public/
├── src/
│   ├── components/
│   │   ├── landing/          # Landing page sections
│   │   │   ├── Navbar.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── PlatformsSection.tsx
│   │   │   ├── FeaturesSection.tsx
│   │   │   ├── ScreenshotsSection.tsx
│   │   │   ├── UseCasesSection.tsx
│   │   │   ├── HowItWorksSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── PricingSection.tsx
│   │   │   ├── CtaSection.tsx
│   │   │   ├── FaqSection.tsx
│   │   │   ├── SeoSection.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/              # shadcn/ui components
│   ├── contexts/
│   │   └── LanguageContext.tsx
│   ├── hooks/
│   │   └── use-toast.ts
│   ├── i18n/
│   │   └── translations.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── pages/
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx
│   ├── App.css
│   ├── main.tsx
│   ├── router.tsx
│   ├── index.css
│   └── vite-env.d.ts
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.js
└── components.json
```

## 🛠️ Installation

```bash
# Install dependencies
pnpm install

# or
npm install
```

## 🏃 Running the Project

```bash
# Start development server
pnpm dev

# or
npm run dev
```

The app will be available at `http://localhost:8080`

## 🏗️ Building for Production

```bash
# Build for production
pnpm build:prod

# Preview production build
pnpm preview
```

## 📝 Features

- ✅ Responsive design (mobile-first)
- ✅ Multi-language support (English/Chinese)
- ✅ Modern animations and transitions
- ✅ Dark mode support
- ✅ SEO optimized
- ✅ Accessible UI components
- ✅ Type-safe with TypeScript

## 🎨 Customization

- **Colors**: Edit `src/index.css` CSS variables
- **Content**: Edit `src/i18n/translations.ts`
- **Components**: Add shadcn/ui components via:
  ```bash
  npx shadcn@latest add [component]
  ```

## 📄 License

This project was generated using Enter.pro and is provided as-is.

## 🙏 Credits

Built with [Enter.pro](https://enter.pro) — AI-powered web development platform.
