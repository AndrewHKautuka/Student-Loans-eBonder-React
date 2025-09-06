# Student Loans eBonder

A modern, production-ready Progressive Web Application (PWA) for automated student bonding process management in Malawi Higher Education, built with React Router.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📱 **Progressive Web App (PWA)** - Installable on mobile and desktop
- 🔧 Modern development tools (ESLint, Prettier, Husky, Vitest)
- 📊 Advanced data tables with sorting and filtering
- 🎨 Comprehensive UI component library (Radix UI + shadcn/ui)
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended package manager)

### Installation

Install the dependencies using pnpm:

```bash
pnpm install
```

### Development

Start the development server with HMR:

```bash
pnpm dev
```

Your application will be available at `http://localhost:5173`.

The PWA features are enabled in development mode, so you can test the installable app experience.

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Create production build
- `pnpm start` - Start production server
- `pnpm typecheck` - Run TypeScript type checking
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint issues automatically
- `pnpm format` - Check code formatting with Prettier
- `pnpm format:fix` - Fix code formatting automatically
- `pnpm test` - Run tests
- `pnpm test:watch` - Run tests in watch mode
- `pnpm test:ui:watch` - Run tests with UI in watch mode

## Building for Production

Create a production build:

```bash
pnpm build
```

## PWA Features

This application is configured as a Progressive Web App with the following features:

- **Installable**: Users can install the app on their devices from supported browsers
- **Offline Support**: Service worker provides caching for offline functionality
- **App-like Experience**: Native app-like interface and behavior
- **Responsive Design**: Optimized for both mobile and desktop devices
- **Manifest**: Configured with app metadata, icons, and display preferences

### PWA Configuration

The PWA is configured in `vite.config.ts` with:

- Custom manifest with app name, description, and icons
- Service worker with caching strategies
- Offline asset caching
- Google Fonts caching optimization

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t student-loans-ebonder .

# Run the container
docker run -p 3000:3000 student-loans-ebonder
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `pnpm build`

```text
├── package.json
├── pnpm-lock.yaml
├── build/
│   ├── client/    # Static assets (including PWA files)
│   └── server/    # Server-side code
```

### PWA Deployment Considerations

When deploying the PWA:

- Ensure HTTPS is enabled (required for PWA features)
- Verify service worker registration
- Test offline functionality
- Validate manifest.json accessibility
- Check icon display across different devices

## Development

### Code Quality

This project includes several tools to maintain code quality:

- **ESLint**: Code linting with React and TypeScript rules
- **Prettier**: Code formatting with import sorting
- **Husky**: Git hooks for pre-commit checks
- **TypeScript**: Static type checking
- **Vitest**: Unit testing framework

### Project Structure

```
├── app/
│   ├── components/     # Reusable UI components
│   │   └── ui/         # shadcn/ui components
│   ├── config/         # Configuration files
│   ├── context/        # React contexts
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility libraries
│   ├── modules/        # Feature modules
│   ├── routes/         # Route components
├── public/
│   └── icons/          # PWA icons and favicons
└── build/              # Production build output
```

### Styling

This project uses [Tailwind CSS](https://tailwindcss.com/) with a comprehensive UI component library built on [Radix UI](https://www.radix-ui.com/) and [shadcn/ui](https://ui.shadcn.com/). The design system includes:

- Consistent color palette and typography
- Responsive design utilities
- Dark/light theme support
- Accessible component primitives
- Custom animations and transitions

---

Built with ❤️ using modern web technologies.
