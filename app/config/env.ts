import { z } from "zod"

import { removeVitePrefix } from "@/lib/utils"

const envSchema = z.object({
  API_URL: z.url("VITE_API_URL must be a valid URL"),
})

// Perform validation immediately so that invalid configurations fail fast.
const _env = envSchema.safeParse(removeVitePrefix(import.meta.env))

if (!_env.success) {
  const error = z.treeifyError(_env.error).properties
  console.error(
    "❌ Invalid environment variables",
    JSON.stringify(error, null, 2)
  )
  throw new Error("Invalid environment variables")
}

const env = Object.freeze(_env.data)
export default env

type Env = typeof env
export type { Env }
