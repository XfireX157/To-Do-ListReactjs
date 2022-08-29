import styled from "styled-components";

export const Button = styled.button`
    position: fixed;
    bottom: 0;
    left: 92%;
    color: #4190df;
    font-size: 4rem;
    background: transparent;
    cursor: pointer;
    z-index: 10;

    &:hover{
        transition: all 0.2s ease-in;
        color: #29629b;
    }
`