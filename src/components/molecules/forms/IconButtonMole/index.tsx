import { memo } from "react"
import { clsx } from "clsx"
import Button from "@/atoms/forms/Buttons"
import { ButtonMoleTypes } from "./IconButton.types"
import styles from "./IconButton.module.scss"

// 기본 버튼
function IconButtonMole({ className, children, icon, ...props }: ButtonMoleTypes) {
  return (
    <Button className={clsx(styles.baseIconButtonStyle, className)} {...props}>
      {icon && <span className={styles.iconStyle}>{icon}</span>}
      <span className={styles.buttonIconTextStyle}>{children}</span>
    </Button>
  )
}

export default memo(IconButtonMole)
