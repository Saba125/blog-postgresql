import bcrypt from "bcryptjs"
export const comparePasswords = (
  providedPassword: string,
  userPassword: string
) => {
  return bcrypt.compare(providedPassword, userPassword)
}
