"use client"
import { ReactNode } from "react"
import { Provider } from "react-redux"
import { store, persistor } from "@/redux/store"
import { PersistGate } from "redux-persist/integration/react"

export function ReduxProvider({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>
}

export function ReduxPersistGate({ children }: { children: ReactNode }) {
  return <PersistGate persistor={persistor}>{children}</PersistGate>
}
