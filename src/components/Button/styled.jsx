import styled from "styled-components";

export const Button = styled.button`
    width: 50%;
    height: 50px;
    border-radius: 2rem;
    font-size: 1.2rem;
    margin: 22px;
    border: 10px;
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.color};
    box-sizing: border-box;
    cursor: pointer;
    transition: all ease-in 0.2s;

    &:hover{
        
        background-color: ${(props) => props.backgroundHover};
    }
`

