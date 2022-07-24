import { ThemeProvider } from "styled-components"
import { DefaultTheme } from "./styles/themes/Default"

export function App() {
  return (
   <ThemeProvider theme={DefaultTheme}>
    
   </ThemeProvider>
  )
}

