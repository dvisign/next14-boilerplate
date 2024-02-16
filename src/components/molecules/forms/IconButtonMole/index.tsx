import { memo } from "react"
import clsx from "clsx"
import Button from "@/atoms/forms/Buttons"
import { ButtonMoleTypes } from "./IconButton.types"
import styles from "./IconButton.module.scss"

// 기본 버튼
const IconButtonMole = ({ className, children, icon, ...props }: ButtonMoleTypes) => {
  return (
    <div className={clsx(styles.baseIconButtonStyle, className)}>
      <Button {...props}>
        {icon && <span className={styles.iconStyle}>{icon}</span>}
        <span className={styles.buttonIconTextStyle}>{children}</span>
      </Button>
    </div>
  )
}

export default memo(IconButtonMole)
