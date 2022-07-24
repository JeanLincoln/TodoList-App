import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/Global"
import { DefaultTheme } from "./styles/themes/Default"

export function App() {
  return (
   <ThemeProvider theme={DefaultTheme}>
    <GlobalStyle />
    <h1>Hello World</h1>
   </ThemeProvider>
  )
}

