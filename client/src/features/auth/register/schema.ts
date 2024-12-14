import { z } from "zod"
export const registerSchema = z.object({
  username: z.string().min(1, "Username is required"),
  email: z.string().email().min(1, "email is required"),
  password: z.string(),
})
