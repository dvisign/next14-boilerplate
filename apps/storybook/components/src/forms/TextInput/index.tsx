import { memo } from "react"
import { useInput } from "@mui/base"
import { InputBaseStyle } from "./TextInput.styles"
import { TextInputProps } from "./TextInput.types"

function TextInput(props: TextInputProps) {
  const { getRootProps, getInputProps } = useInput(props)
  const inputProps = getInputProps()
  return (
    <div {...getRootProps()}>
      <InputBaseStyle {...props} autoComplete={props.type === "password" ? "off" : ""} {...inputProps} />
    </div>
  )
}
export default memo(TextInput)
