import styled from 'styled-components'

export const LayoutContainer = styled.div`
  nav {
    display: flex;
    justify-content: space-between;
    gap: 5rem;

    a {
      color: ${({ theme }) => theme['gray-300']};

      &:hover {
        color: ${({ theme }) => theme['purple-dark']};
      }
    }
  }
`
