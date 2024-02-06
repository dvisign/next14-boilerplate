import { styled, alpha } from "@mui/system"

export const LightTheme = {
  colors: {
    primary: "#0265DC",
    primary15: alpha("#0265DC", 0.15),
    primary50: alpha("#0265DC", 0.5),
    onPrimary: "#FFFFFF",
    secondary: "#2C77FE",
    onSecondary: "#FFFFFF",
    background: "#FFFFFF",
    backgroundVariant1: "#FAFAFA",
    backgroundVariant2: "#F5F5F5",
    backgroundVariant3: "#1A1A1A",
    onBackground: "#000000",
    onBackgroundVariant: "#FFFFFF",
    onBackground10: alpha("#000000", 0.1),
    onBackground20: alpha("#000000", 0.2),
    onBackground40: alpha("#000000", 0.4),
    onBackground60: alpha("#000000", 0.6),
    onBackground75: alpha("#000000", 0.75),
    onBackground85: alpha("#000000", 0.85),
    surface: "#FFFFFF",
    surfaceVariant1: "#FAFAFA",
    surfaceVariant2: "#F5F5F5",
    surfaceVariant3: "#F0F0F0",
    surfaceVariant4: "#EBEBEB",
    surfaceInverse: "#000000",
    surfaceInverse10: alpha("#000000", 0.1),
    surfaceInverse20: alpha("#000000", 0.2),
    surfaceInverse60: alpha("#000000", 0.6),
    onSurface: "#000000",
    onSurface10: alpha("#000000", 0.1),
    onSurface20: alpha("#000000", 0.2),
    onSurface40: alpha("#000000", 0.4),
    onSurface60: alpha("#000000", 0.6),
    onSurface75: alpha("#000000", 0.75),
    onSurface85: alpha("#000000", 0.85),
    onSurfaceInverse: "#FFFFFF",
    info: "#076BFF",
    onInfo: "#FFFFFF",
    success: "#0B7B0B",
    onSuccess: "#FFFFFF",
    warning: "#F8C41C",
    onWarning: "#000000",
    error: "#CC140F",
    error15: alpha("#CC140F", 0.15),
    error50: alpha("#CC140F", 0.5),
    onError: "#FFFFFF",
  },
}

export function useTheme() {
  return LightTheme
}

export function useColors() {
  const theme = useTheme()
  return theme.colors
}

export const ButtonBase = styled("button")`
  padding: 8px 16px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`

export const RoundButtonStyle = styled(ButtonBase)`
  border-radius: 20px;
`

export const OutlineButtonStyle = styled(ButtonBase)`
  background-color: transparent;
  color: #007bff;
  border: 1px solid #007bff;
  &:hover {
    background-color: #007bff;
    color: white;
  }
`
export const OutlineRoundStyle = styled(ButtonBase)`
  background-color: transparent;
  color: #007bff;
  border: 1px solid #007bff;
  border-radius: 20px;
  &:hover {
    background-color: #007bff;
    color: white;
  }
`
