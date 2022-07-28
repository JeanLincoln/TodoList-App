import * as S from './styles'
import Logo from '../../Assets/Logo.svg'
import { NavLink } from 'react-router-dom'
import { Clipboard, Check } from 'phosphor-react'

export function Header() {
  return (
    <S.HeaderContainer>
      <img src={Logo} alt="Site Logo, A rocket and a text 'Todo'" />
      <nav>
        <NavLink to="/" title="Home">
          <Clipboard size={32} />
        </NavLink>
        <NavLink to="/TasksDones" title="TasksDones">
          <Check size={32} />
        </NavLink>
      </nav>
    </S.HeaderContainer>
  )
}
