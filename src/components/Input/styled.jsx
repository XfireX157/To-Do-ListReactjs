import styled from "styled-components";

export const Box = styled.div`
    width: 100%;
    height: auto;
    margin: 18px 0;
`

export const Icon = styled.span`
    color: ${(props) => props.colorIcon};
`

export const Input = styled.input`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    border-radius: 8px;
    font-size: 1.25rem;
    padding: 22px 8px;
    color: ${(props) => props.colorInput};
    background-color: ${(props) => props.backgroundInput};

    &::placeholder{
        color: ${(props) => props.colorPlaceHold};
    }
`