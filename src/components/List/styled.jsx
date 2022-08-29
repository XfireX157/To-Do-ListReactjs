import styled from "styled-components";

export const ListLi = styled.li`
    width: 95%;
    margin: 12px 12px;
    padding: 2rem 0;
    border-radius: 1.2rem;
    color: ${(props) => props.color};
    background-color: ${(props) => props.background};
    display: flex;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;

    ${({active}) => active ?`
        background: blue;
    `: `
    `}
`

export const Box = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
   
    
`

export const BoxButton = styled.div`
    width: 10%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const Btn = styled.button`
    background-color: transparent;
    color: ${(props) => props.color};
    font-size: 1.4rem;
    cursor: pointer;
`