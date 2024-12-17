import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { z } from "zod"
import { loginSchema } from "../login/schema"
import { useDispatch } from "react-redux"
import { loginAction } from "@/store/slices/authSlice"
import { toast } from "sonner"
import { useNavigate } from "react-router-dom"
export const useLogin = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const mutation = useMutation({
    mutationFn: async (data: z.infer<typeof loginSchema>) => {
      const response = await axios.post("http://localhost:3000/api/login", data)
      return response.data
    },
    onSuccess: (data) => {
      const { token, user } = data
      navigate("/")
      localStorage.setItem("token", token)
      dispatch(
        loginAction({
          id: user.id,
          email: user.email,
          username: user.username,
        })
      )
      toast.success(`Welcome back, ${user.username}!`)
    },
    onError: () => {
      toast.error("Login failed. Please check your credentials and try again.")
    },
  })
  return mutation
}
