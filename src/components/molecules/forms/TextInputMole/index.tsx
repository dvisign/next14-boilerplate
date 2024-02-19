import { memo, useState } from "react"
import { clsx } from "clsx"
import Label from "@/components/atoms/forms/TextLabel"
import TextInput from "@/atoms/forms/TextInput"
import styles from "./TextInputMole.module.scss"
import { TextInputMoleTypes } from "./TextInputMole.types"

function TextInputMole({
  className = "",
  disabled = false,
  disabledColor = "",
  type = "text",
  label = "",
  iconComponent = null,
  onChange = () => null,
  value = "",
  ...props
}: TextInputMoleTypes) {
  const [focused, setFocused] = useState<boolean>(false)
  const wrapperClass = clsx(styles.textInputMoleStyle, { focused: focused }, { disabled })
  return (
    <div className={clsx(styles.textWrapperMoleStyle, className)} {...props}>
      {label && <Label label={label} />}
      <div className={wrapperClass}>
        {iconComponent && <span className={styles.iconStyle}>{iconComponent}</span>}
        <TextInput
          type={type}
          onChange={onChange}
          value={value}
          borderSize={0}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          disabled={disabled}
          disabledColor={disabledColor}
        />
      </div>
    </div>
  )
}

export default memo(TextInputMole, (prevProps, nextProps) => prevProps.value === nextProps.value)
