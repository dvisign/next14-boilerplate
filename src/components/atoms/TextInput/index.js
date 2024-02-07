import React, { memo } from "react"
import {
  TemplateStyle,
  TemplateInputStyle,
  InputBaseStyle,
  RoundInputStyle,
  LabelStyle,
  IconStyle
} from "./styles"


// 필드 전체 레이아웃
const TextInputTemplate = memo(({ children, label, icons }) => {
  return (
    <TemplateStyle>
      {label && <LabelStyle>{label}</LabelStyle>}
      <TemplateInputStyle icons={icons} label={label}>
        {icons && <IconStyle>{icons}</IconStyle>}
        {children}
      </TemplateInputStyle>
    </TemplateStyle>
  )
})

// 입력 필드
const TextInput = memo(
  ({ type = "text", value, onChange, label, icons }) => {
    return (
      <TextInputTemplate label={label} icons={icons}>
        <InputBaseStyle
          type={type}
          value={value}
          onChange={e => onChange(e.target.value)}
        />
      </TextInputTemplate>
    )
  },
  (prevProps, nextProps) => {
    return prevProps.value === nextProps.value
  }
)
// 라운드 입력 필드
TextInput.RoundField = memo(
  ({ type = "text", value, onChange, label, icons }) => {
    return (
      <TextInputTemplate label={label} icons={icons}>
        <RoundInputStyle
          type={type}
          value={value}
          onChange={e => onChange(e.target.value)}
        />
      </TextInputTemplate>
    )
  },
  (prevProps, nextProps) => {
    return prevProps.value === nextProps.value
  }
)
export default TextInput
