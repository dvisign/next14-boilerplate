import React from "react"
import { Provider } from "react-redux"
import { store, persistor } from "@/redux/store"
import { PersistGate } from "redux-persist/integration/react"

export function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>
}

export function ReduxPersistGate({ children }) {
  return <PersistGate persistor={persistor}>{children}</PersistGate>
}
