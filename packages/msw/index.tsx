"use client"

import { useState, useEffect } from "react"

const isMockingMode = process.env.NEXT_PUBLIC_API_MOCKING === "enabled"
let test = false
function MswGenerator() {
  const [useMsw, setUseMsw] = useState(() => !isMockingMode)
  useEffect(() => {
    const mswInit = async () => {
      if (isMockingMode) {
        const initMock = await import("./initServer").then(rs => rs.initMock)
        await initMock()
        setUseMsw(true)
        test = true
      }
    }
    if (!useMsw && !test) mswInit()
  }, [useMsw])
  // if (!useMsw && !test) return null
  // return <>{children}</>
  return null
}

export default MswGenerator
