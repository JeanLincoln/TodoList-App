import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  height:20rem;

  background-color: ${({theme}) => theme['gray-700']};

`