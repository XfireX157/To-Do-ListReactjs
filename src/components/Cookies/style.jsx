import styled from "styled-components";

export const Container = styled.section`
    position: relative;
    max-width: 100%;
    height: auto;
    position: fixed;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #0e0d0d;
    color: #f4f4f4;
    opacity: 0.9;
    padding: 26px;

    a{
        color: #249ce2;   
    }
`

export const Close = styled.button`
    position: absolute;
    right: 20px;
    top: 10px;
    background-color: transparent;
    color: #f4f4f4;
    cursor: pointer;
    font-size: 1.4rem;

    &:hover{
        transition: all 0.1s ease-in;
        font-size: 1.5rem;
    }
`

export const BoxInfo = styled.div`
    width: 50%;
    text-align: left;
`

export const BoxConfig = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const Btn = styled.button`
    padding: 12px;
    margin: 0 12px 0 12px;
    cursor: pointer;
    border-radius: 6px;
    color: ${props => props.primary ? "#FFF": "#000"};
    background-color: ${props => props.primary ? "#000" : "#fff"};
    border: ${props => props.primary ? "2px solid #FFF" : ""};


    &:hover{
        transition: all 0.2s ease-in-out;
        background-color: ${props => props.primary ? "#000000" : "#bdbdbd"};
    }
`