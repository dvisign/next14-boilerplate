import { memo } from "react"
import TextInput from "@/atoms/TextInput"
import { MoleTextWrapperStyle, MoleTextInputStyle } from "./style"

// 필드 전체 레이아웃
const MoleTextInput = memo(({ label, icons, className, id }) => {
  return (
    <MoleTextWrapperStyle className={className} id={id}>
      {label && <>{label}</>}
      <MoleTextInputStyle>
        <TextInput />
      </MoleTextInputStyle>
    </MoleTextWrapperStyle>
  )
})
export default MoleTextInput
