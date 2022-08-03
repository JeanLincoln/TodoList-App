import styled from 'styled-components'

export const AuthContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;

  height: 40rem;
  width: 50rem;
  margin: 10rem auto 0 auto;
  border-radius: 8px;

  border: 1px solid ${({ theme }) => theme['gray-700']};
  background-color: ${({ theme }) => theme['gray-400']};
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;

  h1 {
    font-size: 1.7rem;
  }

  img {
    height: 8rem;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    width: 20rem;
    height: 5rem;
    gap: 2rem;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme['gray-700']};
    transition: all ease 0.3s;

    background-color: ${({ theme }) => theme['gray-600']};
    color: white;

    &:hover {
      background-color: ${({ theme }) => theme['gray-500']};
    }

    img {
      height: 2.5rem;
      width: 2.5rem;
    }
  }
`
