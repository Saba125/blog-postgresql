import { z } from "zod"
export const loginSchema = z.object({
  id: z.number().optional(),
  email: z.string().email().min(1, "Email is required"),
  password: z.string(),
})
