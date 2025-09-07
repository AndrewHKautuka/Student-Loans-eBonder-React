import { reactRouter } from "@react-router/dev/vite"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig, type PluginOption } from "vite"
import babel from "vite-plugin-babel"
import { type ManifestOptions, VitePWA } from "vite-plugin-pwa"
import tsconfigPaths from "vite-tsconfig-paths"
import { configDefaults as vitestConfigDefaults } from "vitest/config"

const ReactCompilerConfig = {
  /* ... */
}

const pwaManifest: Partial<ManifestOptions> = {
  name: "Student Loans eBonder",
  short_name: "Loans eBonder",
  description:
    "Automated student bonding process management system for Malawi Higher Education",
  start_url: "/",
  scope: "/",
  icons: [
    {
      src: "/icons/android-chrome-192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      src: "/icons/android-chrome-512x512-masked.png",
      sizes: "512x512",
      type: "image/png",
    },
    {
      src: "/icons/android-chrome-512x512.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "maskable",
    },
  ],
} as const

export default defineConfig(({ mode }) => {
  const plugins: PluginOption[] = [
    tailwindcss(),
    babel({
      filter: /\.[jt]sx?$/,
      exclude: /node_modules/, // exclude node_modules folder
      babelConfig: {
        presets: ["@babel/preset-typescript"], // if you use TypeScript
        plugins: [["babel-plugin-react-compiler", ReactCompilerConfig]],
      },
    }),
    tsconfigPaths(),
    VitePWA({
      injectRegister: "script-defer",
      includeAssets: [
        "/icons/favicon.ico",
        "/icons/favicon-16x16.png",
        "/icons/favicon-32x32.png",
        "/icons/favicon-48x48.png",
        "/icons/apple-touch-icon.png",
      ],
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,webmanifest}"],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
              },
            },
          },
        ],
      },
      manifest: pwaManifest,
      devOptions: {
        enabled: true,
        type: "module",
      },
    }),
  ]

  if (mode !== "test") {
    plugins.splice(1, 0, reactRouter())
  }

  return {
    plugins,
    test: {
      exclude: [
        ...vitestConfigDefaults.exclude,
        "**/build/**",
        "**/.github/**",
        "**/.vscode/**",
        "**/.react-router/**",
      ],
      environment: "jsdom",
    },
  }
})
