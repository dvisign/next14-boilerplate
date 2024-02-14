import React, { forwardRef, ForwardedRef } from "react"
import { useInput } from "@mui/base"
import { unstable_useForkRef as useForkRef } from "@mui/utils"
import { InputBaseStyle } from "./styles"
import { TextInputTypes } from "./types"

// const TextInput = forwardRef(function TextInput(props: TextInputTypes, ref: ForwardedRef<HTMLInputElement>) {
//   const { getRootProps, getInputProps } = useInput(props)
//   console.log("getRootProps", getRootProps())
//   console.log("getInputProps", getInputProps())
//   const inputProps = getInputProps()

//   inputProps.ref = useForkRef(inputProps.ref, ref)

//   return (
//     <div {...getRootProps()}>
//       <InputBaseStyle icons={props.icons} {...props} {...inputProps} />
//     </div>
//   )
// })
function TextInput(props: TextInputTypes) {
  const { getRootProps, getInputProps } = useInput(props)
  const inputProps = getInputProps()

  return (
    <div {...getRootProps()}>
      <InputBaseStyle icons={props.icons} {...props} {...inputProps} />
    </div>
  )
}

export default TextInput
