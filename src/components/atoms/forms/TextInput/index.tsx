import React, { memo } from "react"
import { InputBaseStyle } from "./styles"
import { textInputTyps } from "./types"

// 입력 필드
const TextInput = memo(
  ({ type = "text", value = "", onChange = () => null }: textInputTyps) => {
    return <InputBaseStyle type={type} value={value} onChange={onChange} />
  },
  (prevProps, nextProps) => {
    return prevProps.value === nextProps.value
  },
)
export default TextInput
