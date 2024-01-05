"use client"
import { ReduxProvider, ReduxPersistGate } from "@/redux/reduxProvider"
function Client({ children }) {
  return (
    <ReduxProvider>
      <ReduxPersistGate>{children}</ReduxPersistGate>
    </ReduxProvider>
  )
}

export default Client
