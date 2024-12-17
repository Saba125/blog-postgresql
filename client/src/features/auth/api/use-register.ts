import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { z } from "zod"
import { registerSchema } from "../register/schema"
import { useDispatch } from "react-redux"
import { registerAction } from "@/store/slices/authSlice"
import { toast } from "sonner"
import { useNavigate } from "react-router-dom"
export const useRegister = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const mutation = useMutation({
    mutationFn: async (data: z.infer<typeof registerSchema>) => {
      const response = await axios.post(
        "http://localhost:3000/api/register",
        data
      )
      return response.data
    },
    onSuccess: (data) => {
      const { token, user } = data
      localStorage.setItem("token", token)
      navigate("/")
      dispatch(
        registerAction({
          id: user.id,
          email: user.email,
          username: user.username,
        })
      )
      toast(
        `Welcome, ${user.username}! Your account has been created successfully.`
      )
    },
    onError: () => {
      toast("Registration failed. Please check your information and try again.")
    },
  })
  return mutation
}
