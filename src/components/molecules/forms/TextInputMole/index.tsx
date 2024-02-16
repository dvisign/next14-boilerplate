import { memo } from "react"
import clsx from "clsx"
import Label from "@/atoms/forms/Label"
import TextInput from "@/atoms/forms/TextInput"
import styles from "./TextInputMole.module.scss"
import { TextInputMoleTypes } from "./TextInputMole.types"

// 입력 필드 컴포넌트
const TextInputMole = memo(
  ({
    className = "",
    type = "text",
    label = "",
    iconComponent = null,
    onChange = () => null,
    value = "",
    ...props
  }: TextInputMoleTypes) => {
    // 아이콘 컴포넌트 유무에 따른 클래스 추가
    const inputBaseStyle = iconComponent ? `${styles.inputBaseStyle} ${styles.inputWithIcon}` : styles.inputBaseStyle

    return (
      <div className={clsx(styles.textWrapperMoleStyle, className)} {...props}>
        <Label label={label} />
        <div className={styles.textInputMoleStyle}>
          {iconComponent && <span className={styles.iconStyle}>{iconComponent}</span>}
          {/* TextInput 컴포넌트에 inputBaseStyle 클래스를 적용하는 방식은 TextInput 컴포넌트의 구현에 따라 달라질 수 있습니다. */}
          <TextInput className={inputBaseStyle} type={type} onChange={onChange} value={value} />
        </div>
      </div>
    )
  },
  (prevProps, nextProps) => prevProps.value === nextProps.value,
)

export default TextInputMole
