import { memo, useState } from "react"
import { clsx } from "clsx"
import Label from "@/components/atoms/forms/TextLabel"
import { TextInput } from "@repo/_components"
import { TextInputMolTypes } from "./TextInputMol.types"
import styles from "./TextInputMol.module.scss"

function TextInputMol({
  disabled = false,
  disabledColor = "",
  type = "text",
  label = "",
  iconComponent = null,
  onChange = () => null,
  value = "",
  className = "",
  ...props
}: TextInputMolTypes) {
  const { id } = props
  const [focused, setFocused] = useState<boolean>(false)
  const wrapperClass = clsx(styles.textInputMoleStyle, { focused: focused }, { disabled })
  return (
    <div className={clsx(styles.textWrapperMoleStyle, className)} {...props}>
      {label && <Label label={label} htmlFor={id ? `${id}Input` : ""} />}
      <div className={wrapperClass} style={{ backgroundColor: disabled ? disabledColor : "#fff" }}>
        {iconComponent && <span className={styles.iconStyle}>{iconComponent}</span>}
        <TextInput
          id={id ? `${id}Input` : ""}
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
