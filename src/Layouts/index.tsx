import { Header } from '../Components/Header'
import { Outlet } from 'react-router-dom'
import { HeaderContainer } from './styles'

export function DefaultLayout(){
    return (
        <div>
          <HeaderContainer>
            <Header />
            <Outlet />
          </HeaderContainer>
        </div>
      )
}