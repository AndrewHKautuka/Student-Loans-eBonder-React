import { index, layout, type RouteConfig } from "@react-router/dev/routes"

export default [
  layout("routes/public/layout.tsx", [index("routes/public/landing.tsx")]),
] satisfies RouteConfig
