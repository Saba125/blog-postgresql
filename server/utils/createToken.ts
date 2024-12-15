import jwt from "jsonwebtoken"
export const createToken = (userId: string, username: string) => {
  const jwtToken = jwt.sign({ userId, username }, process.env.JWT_SECRET!, {
    expiresIn: process.env.JWT_LIFETIME,
  })
  return jwtToken
}
