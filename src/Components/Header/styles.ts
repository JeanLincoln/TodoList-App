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

    &:link {
      text-decoration: none !important;
    }

    span {
      margin-top: 0.5rem;
      font-size: 1.3rem;
    }
  }
  button {
    position: absolute;
    top: 2rem;
    right: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    height: 5.2rem;
    width: 9rem;

    border-radius: 0.8rem;
    font-size: 1.4rem;
    border-color: ${({ theme }) => theme['gray-700']};
    background-color: ${({ theme }) => theme.danger};
    color: ${({ theme }) => theme['gray-100']};

    font-family: 'Inter', sans-serif;
    font-weight: 700;

    cursor: pointer;
    transition: background ease 0.3s;

    &:hover {
      background-color: ${({ theme }) => theme['danger-dark']};
    }
  }
`
