import Logo from "@/components/logo"
import { Button } from "@/components/ui/button"
import { Link, Outlet, useLocation } from "react-router-dom"
const AuthLayout = () => {
  const pathname = useLocation()
  const checkPathname = pathname.pathname.split("/").filter(Boolean)[1]
  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="w-full flex items-center justify-between">
          <Logo />
          <Button asChild>
            <Link
              to={
                checkPathname === "register" ? "/auth/login" : "/auth/register"
              }
            >
              {checkPathname === "register" ? "Sign in" : "Sign up"}
            </Link>
          </Button>
        </nav>
        <div className="flex mt-20 items-center justify-center">
          <Outlet />
        </div>
      </div>
    </main>
  )
}

export default AuthLayout