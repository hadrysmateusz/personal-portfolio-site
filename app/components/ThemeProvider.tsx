import { useMemo } from "react"
import {
  DefaultTheme,
  ThemeProvider as StyledComponentsThemeProvider,
} from "styled-components"
import { breakpoints } from "~/components/Breakpoints"

export const ThemeProvider: React.FC = ({ children }) => {
  const theme: DefaultTheme = useMemo(
    () => ({
      breakpoints,
    }),
    [],
  )

  return (
    <StyledComponentsThemeProvider theme={theme}>
      {children}
    </StyledComponentsThemeProvider>
  )
}
