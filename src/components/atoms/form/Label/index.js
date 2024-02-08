import { LabelStyle } from "./styles"
const Label = ({ label }) => {
  return label && <LabelStyle>{label}</LabelStyle>
}
export default Label
