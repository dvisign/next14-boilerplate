import { useInput } from "@mui/base"
import { InputBaseStyle } from "./styles"
import { TextInputTypes } from "./types"

function TextInput(props: TextInputTypes) {
  const { getRootProps, getInputProps } = useInput(props)
  const inputProps = getInputProps()

  return (
    <div {...getRootProps()}>
      <InputBaseStyle {...props} {...inputProps} />
    </div>
  )
}

export default TextInput
