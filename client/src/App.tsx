import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AuthLayout from "./pages/auth/auth-layout"
import RegisterPage from "./pages/auth/register"
import LoginPage from "./pages/auth/login"
import HomeLayout from "./pages/dashboard/home-layout"
import Dashboard from "./pages/dashboard/dashboard"
const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
])
function App() {
  return <RouterProvider router={router} />
}

export default App
