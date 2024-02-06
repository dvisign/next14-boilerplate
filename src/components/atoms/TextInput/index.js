"use client"
import { memo } from "react"
import { TextInputStyles } from "./styles"
function TextInput({ type, value, setValue }) {
  return <TextInputStyles size="small" type={type || "text"} value={value} onChange={(e) => setValue(e.target.value)} />
}

export default memo(TextInput)
