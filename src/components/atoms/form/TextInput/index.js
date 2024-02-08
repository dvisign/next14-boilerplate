import React, { memo } from "react"
import { InputBaseStyle } from "./styles"

// 입력 필드
const TextInput = memo(
  ({ type = "text", value, onChange }) => {
    return <InputBaseStyle type={type} value={value} onChange={e => onChange(e.target.value)} />
  },
  (prevProps, nextProps) => {
    return prevProps.value === nextProps.value
  },
)
export default TextInput
