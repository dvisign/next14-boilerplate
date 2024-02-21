import { memo } from "react"
import { useInput } from "@mui/base"
import { InputBaseStyle } from "./TextInput.styles"
import { TextInputTypes } from "./TextInput.types"

function TextInput(props: TextInputTypes) {
  const { getRootProps, getInputProps } = useInput(props)
  const inputProps = getInputProps()
  return (
    <div {...getRootProps()}>
      <InputBaseStyle {...props} autoComplete={props.type === "password" ? "off" : ""} {...inputProps} />
    </div>
  )
}
export default memo(TextInput)
