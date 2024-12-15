import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface UserState {
  username: string
  email: string
  id: number | null
}
export const initialState: UserState = {
  username: "",
  email: "",
  id: 0,
}
const login = (
  state: UserState,
  action: PayloadAction<{
    email: string
    id: number
  }>
) => {
  state.email = action.payload.email
  state.id = action.payload.id
}
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login,
  },
})
export const { login: loginAction } = userSlice.actions
export default userSlice.reducer
