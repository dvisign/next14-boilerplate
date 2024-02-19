import { memo } from "react"
import { LabelStyle } from "./styles"
const Label = ({ label }) => {
  return label && <LabelStyle>{label}</LabelStyle>
}
export default memo(Label, (prev, next) => prev.label === next.label)
