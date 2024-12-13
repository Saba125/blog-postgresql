import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AuthLayout from "./pages/auth/auth-layout"
import RegisterPage from "./pages/auth/register"
import LoginPage from "./pages/auth/login"
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
])
function App() {
  return <RouterProvider router={router} />
}

export default App
