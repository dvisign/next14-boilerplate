import { memo } from "react"
import { clsx } from "clsx"
import Button from "@/atoms/forms/Buttons"
import { ButtonMolTypes } from "./IconButton.types"
import styles from "./IconButtonMol.module.scss"

// 기본 버튼
function IconButtonMol({ className, children, icon, ...props }: ButtonMolTypes) {
  return (
    <Button className={clsx(styles.baseIconButtonStyle, className)} {...props}>
      {icon && <span className={styles.iconStyle}>{icon}</span>}
      <span className={styles.buttonIconTextStyle}>{children}</span>
    </Button>
  )
}

export default memo(IconButtonMol)
