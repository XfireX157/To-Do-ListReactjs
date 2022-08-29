import styled from "styled-components";

export const ListUl = styled.ul`
    position: relative;
    max-width: 95%; 
    max-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    box-sizing: border-box;
    overflow-y: scroll;
    row-gap: 12px;
    margin-top: 30px;
`

export const OpenButton = styled.div`   
    width: 90%;
    margin: auto;
   
   button{
        border-radius: 50%;
        font-size: 2rem;
        width: 70px;
        height: 70px;
        color:#fff;
        background-color:#4190df;
        cursor: pointer;
        
        :hover{
            transition: all 0.2s ease-in-out;
            background-color: #2d659c;
        }
    }
`