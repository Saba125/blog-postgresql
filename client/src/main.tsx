import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { PersistGate } from "redux-persist/integration/react"

import App from "./App.tsx"
import { Provider } from "react-redux"
import { store, persistor } from "./store/store.ts"
import { QueryProvider } from "./providers/query-provider.tsx"
import { Toaster } from "sonner"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Toaster />
          <App />
        </PersistGate>
      </Provider>
    </QueryProvider>
  </StrictMode>
)
