import { memo } from "react"
import { LabelStyle } from "./TextLabel.styles."
import { TextLabelTypes } from "./TextLabel.types"

const TextLabel = ({ label, className = "" }: TextLabelTypes) => {
  return label && <LabelStyle className={className}>{label}</LabelStyle>
}
export default memo(TextLabel, (prev, next) => prev.label === next.label)
