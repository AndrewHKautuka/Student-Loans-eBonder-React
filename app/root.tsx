import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router"

import { QueryClientProvider } from "@tanstack/react-query"

import type { Route } from "./+types/root"
import "./app.css"
import { Toaster } from "./components/ui/sonner"
import { ThemeProvider } from "./context/theme-context"
import { queryClient } from "./lib/query-client"

export const links: Route.LinksFunction = () => [
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com",
  },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  {
    rel: "manifest",
    href: "/manifest.webmanifest",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "48x48",
    href: "/icons/favicon-48x48.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/icons/favicon-32x32.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/icons/favicon-16x16.png",
  },
  {
    rel: "icon",
    href: "/icons/favicon.ico",
  },
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/icons/apple-touch-icon.png",
  },
]

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <script src="/registerSW.js" defer></script>
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <Outlet />
        </ThemeProvider>
      </QueryClientProvider>
      <Toaster richColors position="bottom-right" />
    </>
  )
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!"
  let details = "An unexpected error occurred."
  let stack: string | undefined

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error"
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message
    stack = error.stack
  }

  return (
    <main className="container mx-auto p-4 pt-16">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full overflow-x-auto p-4">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  )
}
