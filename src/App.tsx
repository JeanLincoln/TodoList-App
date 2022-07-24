import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/Global"
import { DefaultTheme } from "./styles/themes/Default"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"

export function App() {
  return (
   <ThemeProvider theme={DefaultTheme}>
    <BrowserRouter>
    <Router />
    </BrowserRouter>
    <GlobalStyle />
   </ThemeProvider>
  )
}

