import { memo, useCallback } from "react"
import TextInput from "@/atoms/form/TextInput"
import Label from "@/atoms/form/Label"
import { MoleTextWrapperStyle, MoleRoundTextInputStyle, MoleTextInputStyle, IconStyle } from "./style"

// 입력 필드
const MoleTextInput = memo(
  ({ type = "text", round = false, label, icons, className, id, onChange, value }) => {
    const useOnChange = useCallback(
      val => {
        onChange(val)
      },
      [value],
    )
    return (
      <MoleTextWrapperStyle className={className} id={id}>
        <Label label={label} />
        <MoleTextInputStyle round={round} icons={icons}>
          {icons && <IconStyle>{icons}</IconStyle>}
          <TextInput type={type} onChange={useOnChange} value={value} />
        </MoleTextInputStyle>
      </MoleTextWrapperStyle>
    )
  },
  (prevProps, nextProps) => {
    return prevProps.value === nextProps.value
  },
)
// 라운드 필드
MoleTextInput.RoundInput = memo(
  ({ type = "text", round = false, label, icons, className, id, onChange, value }) => {
    const useOnChange = useCallback(
      val => {
        onChange(val)
      },
      [value],
    )
    return (
      <MoleTextWrapperStyle className={className} id={id}>
        <Label label={label} />
        <MoleRoundTextInputStyle round={round} icons={icons}>
          {icons && <IconStyle>{icons}</IconStyle>}
          <TextInput type={type} onChange={useOnChange} value={value} />
        </MoleRoundTextInputStyle>
      </MoleTextWrapperStyle>
    )
  },
  (prevProps, nextProps) => {
    return prevProps.value === nextProps.value
  },
)
export default MoleTextInput
