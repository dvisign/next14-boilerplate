import React, { memo } from "react"
import { TemplateStyle, TemplateInputStyle, InputBaseStyle, RoundInputStyle, LabelStyle, IconStyle } from "./styles"

// 필드 전체 레이아웃
const TextInputTemplate = memo(props => {
  const { children, label, icons, className, id } = props
  return (
    <TemplateStyle className={className} id={id}>
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
  props => {
    const { type = "text", value, onChange, label, icons } = props
    return (
      <TextInputTemplate label={label} icons={icons} {...props}>
        <InputBaseStyle type={type} value={value} onChange={e => onChange(e.target.value)} />
      </TextInputTemplate>
    )
  },
  (prevProps, nextProps) => {
    return prevProps.value === nextProps.value
  },
)
// 라운드 입력 필드
TextInput.RoundField = memo(
  props => {
    const { type = "text", value, onChange, label, icons } = props
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
