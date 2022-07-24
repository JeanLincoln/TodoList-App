import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    html{
        font-size: 62.5%;
    }

    :focus{
        outline:0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['purple-dark']};
    }

    body{
        background:${(props) => props.theme['gray-600']};
        color:${(props) => props.theme['gray-100']};
        -webkit-font-smoothing:antialiased;
    }

    border-style, input, textarea, button {
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`