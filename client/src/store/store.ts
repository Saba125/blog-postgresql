import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./slices/authSlice"
// Create the store and add the user slice to it
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
})

// Export RootState and AppDispatch for usage in your app
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
