import React, { createContext, useContext, useState, memo } from "react"
import {
  InputBaseStyle,
  RoundInputStyle,
  LabelStyle,
  IconStyle
} from "./styles"

const TextInputContext = createContext()

const TextInput = ({ children }) => {
  const [value, setValue] = useState("")

  return (
    <TextInputContext.Provider value={{ value, setValue }}>
      <div style={{ position: "relative" }}>{children}</div>
    </TextInputContext.Provider>
  )
}

// 입력 필드
TextInput.Field = memo(({ type = "text", value, onChange }) => {
  return (
    <InputBaseStyle
      size="small"
      type={type}
      value={value}
      onChange={onChange}
    />
  )
})
// 라운드 입력 필드
TextInput.RoundField = memo(({ type = "text" }) => {
  const { value, setValue } = useContext(TextInputContext)
  return (
    <RoundInputStyle
      type={type}
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  )
})

// 라벨 컴포넌트
TextInput.Label = memo(({ children }) => {
  return <LabelStyle>{children}</LabelStyle>
})

// 아이콘 컴포넌트
TextInput.Icon = memo(({ icon }) => {
  return <IconStyle>{icon}</IconStyle>
})

export default TextInput
