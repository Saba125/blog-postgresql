import { configureStore } from "@reduxjs/toolkit"
import { persistReducer, persistStore } from "redux-persist"
import userReducer, { UserState } from "./slices/authSlice" // Import your user slice
import storage from "redux-persist/lib/storage" // Use localStorage for persistence
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2"
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"

// Persist configuration
const persistConfig = {
  key: "root",
  storage, // Use localStorage
  stateReconciler: autoMergeLevel2, // How to merge the persisted state
}

// Explicitly type the user reducer and persist it
const persistedUserReducer = persistReducer<UserState>(
  persistConfig,
  userReducer
)

// Configure the store with middleware adjustments
export const store = configureStore({
  reducer: {
    user: persistedUserReducer, // Use the persisted reducer for the user slice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore redux-persist actions
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

// Create the persistor instance for rehydration
export const persistor = persistStore(store)

// Export RootState and AppDispatch for usage in the app
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
