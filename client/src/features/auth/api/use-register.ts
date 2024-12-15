import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { z } from "zod"
import { registerSchema } from "../register/schema"
export const useRegister = () => {
  const mutation = useMutation({
    mutationFn: async (data: z.infer<typeof registerSchema>) => {
      const response = await axios.post(
        "http://localhost:3000/api/register",
        data
      )
      return response.data
    },
  })
  return mutation
}
