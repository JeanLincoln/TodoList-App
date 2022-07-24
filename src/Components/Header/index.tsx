import {HeaderContainer} from './styles'
import Logo  from '../../Assets/Logo.svg'

export function Header(){
    return(
        <HeaderContainer>
            <img 
                src={Logo} 
                alt="Site Logo, A rocket and a text 'Todo'" 
            />
        </HeaderContainer>
    )
}