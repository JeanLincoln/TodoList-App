import styled from "styled-components";
import Check from '../../Assets/Check.svg'

export const Task = styled.div`
    display:flex;
    justify-content:space-between;
    align-items: center;

    width:73.6rem;
    height:7.2rem;
    padding: 1.6rem;
    border-radius: 8px;
    margin-top:2.4rem;

    background-color: ${({theme})=>theme['gray-500']};
    border: 1px solid ${({theme})=>theme['gray-400']};
    color:${({theme})=>theme['gray-100']};

    .taskContent{
        display:flex;
        gap: 1rem; 
    }

    input{
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            user-select: none;

            background-color: white;
            outline: 0;


            cursor: pointer;
            
            height:calc(1.745rem + 2px);
            width:calc(1.745rem + 2px);
            border-radius: 50%;

            border: 2px solid ${({theme})=>theme['blue']};
            box-shadow:none;
            background-color: transparent;

            transition: background ease-in-out .2s;

            &:hover{
                background-color: rgba(30,111,159,.3);
            }

            &:checked{
                background-color: ${({theme})=>theme['purple-dark']};
                background-image: url(${Check});
                background-repeat: no-repeat;
                background-position: center;
                border:hidden;
            }

            &:checked ~ span{
                text-decoration-line: line-through;
                color: ${({theme})=>theme['gray-300']};
            }
        }

    button{
        border:none;
        background-color:transparent;
    }

    svg{
        cursor: pointer;
        color:${({theme})=>theme['gray-300']};

        &:hover{
            color:${({theme})=>theme['danger']};
        }
    }
`