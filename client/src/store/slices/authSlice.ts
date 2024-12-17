import { createSlice, PayloadAction } from "@reduxjs/toolkit"

// UserState interface definition
export interface UserState {
  username: string
  email: string
  id: number | null
}

// Initial state for the user slice
export const initialState: UserState = {
  username: "",
  email: "",
  id: 0,
}

// Reducer functions
const login = (
  state: UserState,
  action: PayloadAction<{
    username: string
    email: string
    id: number
  }>
) => {
  state.email = action.payload.email
  state.id = action.payload.id
  state.username = action.payload.username
}

const register = (
  state: UserState,
  action: PayloadAction<{ username: string; email: string; id: number }>
) => {
  state.email = action.payload.email
  state.username = action.payload.username
  state.id = action.payload.id
}
const logout = (state: UserState) => {
  state.email = ""
  state.username = ""
  state.id = 0
}

// Define the user slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login,
    register,
    logout,
  },
})

// Action exports
export const { login: loginAction, register: registerAction, logout: logoutAction } =
  userSlice.actions

// Default reducer export
export default userSlice.reducer
