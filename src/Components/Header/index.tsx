import * as S from './styles'
import Logo  from '../../Assets/Logo.svg'

export function Header(){
    return(
        <S.HeaderContainer>
            <img 
                src={Logo} 
                alt="Site Logo, A rocket and a text 'Todo'" 
            />
        </S.HeaderContainer>
    )
}