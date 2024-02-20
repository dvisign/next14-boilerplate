"use client"

import { useState, useEffect } from "react"

const isMockingMode = process.env.NODE_ENV === "development"

function MswProvider({ children }) {
  const [useMsw, setUseMsw] = useState(() => !isMockingMode)
  useEffect(() => {
    const mswInit = async () => {
      if (isMockingMode) {
        const initMock = await import("./index").then(rs => rs.initMock)
        await initMock()
        setUseMsw(true)
      }
    }
    if (!useMsw) mswInit()
  }, [useMsw])
  if (!useMsw) return null
  return <>{children}</>
}

export default MswProvider
