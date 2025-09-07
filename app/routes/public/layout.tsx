import { Outlet } from "react-router"

export default function LayoutRoute() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="bg-background flex min-h-screen flex-1 p-4">
        <Outlet />
      </main>
    </div>
  )
}
