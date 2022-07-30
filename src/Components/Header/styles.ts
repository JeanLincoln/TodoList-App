import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  height: 20rem;
  background-color: ${({ theme }) => theme['gray-700']};

  a {
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      margin-top: 0.5rem;
      font-size: 1.3rem;
      text-decoration: none;
    }
  }
`
