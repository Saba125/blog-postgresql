import MobileSidebar from "@/components/mobile-sidebar"
import Sidebar from "@/components/sidebar"
import UserMenu from "@/components/user-menu"
import { RootState } from "@/store/store"
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const HomeLayout = () => {
  const user = useSelector((state: RootState) => state.user)
  if (user.id === 0) {
    return <Navigate to="/auth/login" replace />
  }
  return (
    <main className="min-h-screen">
      {/* Sidebar */}

      <aside className="fixed hidden md:block  top-0 left-0 bg-neutral-200 h-full w-[256px]">
        <Sidebar />
      </aside>
      {/* Mobile Sidebar */}
      <nav className="md:pl-[256px] flex items-center justify-between p-2">
        <div className="block md:hidden">
          <MobileSidebar />
        </div>
        <div className="hidden md:block"></div>
        <UserMenu />
      </nav>
      <div className="pl-[310px]">
        <Outlet />
      </div>
    </main>
  )
}

export default HomeLayout
