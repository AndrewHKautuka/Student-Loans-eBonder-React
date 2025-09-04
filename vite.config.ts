import { reactRouter } from "@react-router/dev/vite"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig, type PluginOption } from "vite"
import babel from "vite-plugin-babel"
import tsconfigPaths from "vite-tsconfig-paths"
import { configDefaults as vitestConfigDefaults } from "vitest/config"

const ReactCompilerConfig = {
  /* ... */
}

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
        "**/.vscode/**",
        "**/.react-router/**",
      ],
      environment: "jsdom",
    },
  }
})
