import styled from "styled-components";

export const MainContainer = styled.main`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    gap: 6.4rem;
    margin-top:4rem;

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
                width:16.5rem;
                p{   
                    
                    color:${({theme})=>theme['purple']};
                }

                span{
                    width:5.2rem;
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

