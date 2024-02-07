import React, { memo } from "react"
import { InputBaseStyle, RoundInputStyle } from "./styles"

// 입력 필드
const TextInput = memo(
  ({ type = "text", value, onChange }) => {
    return <InputBaseStyle type={type} value={value} onChange={e => onChange(e.target.value)} />
  },
  (prevProps, nextProps) => {
    return prevProps.value === nextProps.value
  },
)
// 라운드 입력 필드
TextInput.RoundField = memo(
  ({type = "text", value, onChange}) => {
    return (
      <TextInputTemplate label={label} icons={icons} {...props}>
        <RoundInputStyle type={type} value={value} onChange={e => onChange(e.target.value)} />
      </TextInputTemplate>
    )
  },
  (prevProps, nextProps) => {
    return prevProps.value === nextProps.value
  },
)
export default TextInput
