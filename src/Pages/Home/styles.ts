import styled from "styled-components";

export const FormContainer = styled.form`
    display:flex;
    justify-content:center;
    align-items:center;
    gap: 0.8rem;

    margin-top: -2.6rem;

    input {
        width:63.8rem;
        height:5.4rem;
        border-radius:.8rem;

        border: 0.1rem solid ${({theme})=>theme['gray-700']};
        background: ${({theme})=>theme['gray-500']};
        color: ${({theme})=>theme['gray-100']};

        font-family: 'Inter',sans-serif;
        font-weight: 400;
        font-size: 1.6rem;

        padding: 1.6rem 0 1.6rem 1.6rem;
        

        &::placeholder{
            font-family: 'Inter',sans-serif;
            font-weight: 400;
            font-size: 1.6rem;
            color: ${({theme})=>theme['gray-300']};
        }
    }

    button{
        display:flex;
        align-items: center;
        justify-content:center;
        gap:.8rem;

        height:5.2rem;
        width:9rem;

        
        border-radius: 0.8rem;
        font-size: 1.4rem;
        border-color: ${({theme})=>theme['gray-700']};
        background-color:${({theme})=>theme['blue-dark']};
        color:${({theme})=>theme['gray-100']};;

        font-family: 'Inter',sans-serif;
        font-weight: 700;

        cursor: pointer;
        transition: background ease 0.3s;

        &:hover{
            background-color:${({theme})=>theme['blue']};
        }

    }

    
`