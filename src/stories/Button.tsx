import { useButton } from "@mui/base"
import { clsx } from "clsx"
import { ButtonBase } from "@/atoms/forms/Buttons/styles"
import { ButtonTypes } from "@/atoms/forms/Buttons/types"

/**
 * 버튼 컴포넌트
 */

const Button = ({ children, disabled, ...props }: ButtonTypes) => {
  const { active, focusVisible, getRootProps } = useButton({
    ...props,
  })
  const classes = {
    active,
    disabled,
    focusVisible,
    [props.className]: !!props.className,
  }
  const rootProps = { ...getRootProps(), ...props, type: props?.type ? props?.type : "submit" }
  return (
    <ButtonBase {...rootProps} className={clsx(classes)}>
      {children}
    </ButtonBase>
  )
}
export default Button
