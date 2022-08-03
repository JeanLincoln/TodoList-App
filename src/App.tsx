import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/Global'
import { DefaultTheme } from './styles/themes/Default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { TasksContextProvider } from './Contexts/TaskContext'
import { AuthContextProvider } from './Contexts/AuthContext'

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <BrowserRouter>
        <AuthContextProvider>
          <TasksContextProvider>
            <Router />
          </TasksContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
