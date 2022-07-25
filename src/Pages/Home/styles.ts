import styled from "styled-components";

export const MainContainer = styled.main`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    gap: 6.4rem;

`

export const FormContainer = styled.div`
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

export const CreatedTasksContainer = styled.div`
    display:flex;
    flex-direction: column;
    gap:2.4rem;

    width:73.6rem;

    

`

export const TaskStatistics = styled.div`
        display: flex;
        justify-content:space-between;
        align-items: flex-start;

        .Statistics{
            display:flex;
            gap: .8rem;

            width:13.9rem;
            
            p,span{
                font-weight: 700;
                color:${({theme})=>theme['blue']};
            }

            span{
                display:flex;
                justify-content:center;
                align-items: center;

                border-radius: .8rem;
                width:2.5rem;
                height:1.9rem;
                font-size: 1.2rem;
                background-color:${({theme})=>theme['gray-400']};
                color:${({theme})=>theme['gray-200']};
            }
        }
        
        .Statistics + .Statistics{
                p{
                    color:${({theme})=>theme['purple']};
                }
            }
`

export const TaskContainer = styled.div`
    

    border-top: 1px solid ${({theme})=>theme['gray-400']};
    color:${({theme})=>theme['gray-300']};
    border-radius: 8px;
    
    .noTaskContainer{
        display:flex;
        flex-direction: column;
        justify-content:center;
        align-items: center;
        gap:1.6rem;
        margin-top:6.4rem;
        svg{
                color:${({theme})=>theme['gray-400']};
        }
        
        strong{
                font-weight:700;
        }
    }


    

`