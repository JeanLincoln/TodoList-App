import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap:5rem;

  height:20rem;

  background-color: ${({theme}) => theme['gray-700']};
`

export const Nav = styled.nav`
    display:flex;
    justify-content:space-between;
    gap:5rem;
`