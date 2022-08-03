import * as S from './styles'
import Logo from '../../Assets/Logo.svg'
import Google from '../../Assets/Google.png'
import { useContext } from 'react'
import { AuthContext } from '../../Contexts/AuthContext'
import { Navigate } from 'react-router-dom'

export function Auth() {
  const { authentication, user } = useContext(AuthContext)

  return user ? (
    <Navigate to="/" />
  ) : (
    <S.AuthContainer>
      <S.Content>
        <img src={Logo} alt="Site Logo, A rocket and a text 'Todo'" />
        <h1>Please LogIn with Google to proceed to TaskApp</h1>
        <button onClick={authentication}>
          <img src={Google} alt="Site Logo, A rocket and a text 'Todo'" /> LogIn
          With Google
        </button>
      </S.Content>
    </S.AuthContainer>
  )
}
