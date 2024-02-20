import { memo, useState } from "react"
import { clsx } from "clsx"
import Label from "@/components/atoms/forms/TextLabel"
import TextInput from "@/atoms/forms/TextInput"
import styles from "./TextInputMol.module.scss"
import { TextInputMolTypes } from "./TextInputMol.types"

function TextInputMol({
  className = "",
  disabled = false,
  disabledColor = "",
  type = "text",
  label = "",
  iconComponent = null,
  onChange = () => null,
  value = "",
  ...props
}: TextInputMolTypes) {
  const { id } = props
  const [focused, setFocused] = useState<boolean>(false)
  const wrapperClass = clsx(styles.textInputMoleStyle, { focused: focused }, { disabled })
  return (
    <div className={clsx(styles.textWrapperMoleStyle, className)} {...props}>
      {label && <Label label={label} htmlFor={`${id}Input`} />}
      <div className={wrapperClass} style={{ backgroundColor: disabled ? disabledColor : "#fff" }}>
        {iconComponent && <span className={styles.iconStyle}>{iconComponent}</span>}
        <TextInput
          id={`${id}Input`}
          type={type}
          onChange={onChange}
          value={value}
          borderSize={0}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          disabled={disabled}
          backgroundColor={"transparent"}
        />
      </div>
    </div>
  )
}

export default memo(TextInputMol)
