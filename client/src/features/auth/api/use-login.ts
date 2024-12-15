import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { z } from "zod"
import { loginSchema } from "../login/schema"
export const useLogin = () => {
  const mutation = useMutation({
    mutationFn: async (data: z.infer<typeof loginSchema>) => {
      const response = await axios.post("http://localhost:3000/api/login", data)
      return response.data
    },
    onSuccess: (data) => {
      const { token } = data
      localStorage.setItem("token", token)
    },
  })
  return mutation
}
