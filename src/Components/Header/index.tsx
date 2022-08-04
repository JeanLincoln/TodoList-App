import * as S from './styles'
import Logo from '../../Assets/Logo.svg'
import { NavLink } from 'react-router-dom'
import { Clipboard, Check } from 'phosphor-react'
import { useContext } from 'react'
import { AuthContext } from '../../Contexts/AuthContext'

export function Header() {
  const { logOut } = useContext(AuthContext)

  return (
    <S.HeaderContainer>
      <img src={Logo} alt="Site Logo, A rocket and a text 'Todo'" />
      <nav>
        <NavLink to="/" title="Home">
          <Clipboard size={32} />
          <span>Todos</span>
        </NavLink>
        <NavLink to="/TasksDones" title="TasksDones">
          <Check size={32} />
          <span>Dones</span>
        </NavLink>
        <button onClick={logOut}>LogOut</button>
      </nav>
    </S.HeaderContainer>
  )
}
