import { memo } from "react"
import Label from "@/atoms/forms/Label"
import TextInput from "@/atoms/forms/TextInput"
import { TextWrapperMoleStyle, TextInputMoleStyle, IconStyle } from "./style"
import { TextInputMoleTypes } from "./types"

// 입력 필드 컴포넌트
const TextInputMole = memo(
  ({
    type = "text",
    label = "",
    iconComponent = null,
    onChange = () => null,
    value = "",
    ...props
  }: TextInputMoleTypes) => {
    return (
      <TextWrapperMoleStyle {...props} iconComponent={iconComponent}>
        <Label label={label} />
        <TextInputMoleStyle>
          {iconComponent && <IconStyle>{iconComponent}</IconStyle>}
          <TextInput type={type} onChange={onChange} value={value} />
        </TextInputMoleStyle>
      </TextWrapperMoleStyle>
    )
  },
  (prevProps, nextProps) => prevProps.value === nextProps.value,
)

export default TextInputMole
