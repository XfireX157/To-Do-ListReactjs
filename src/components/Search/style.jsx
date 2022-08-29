import styled from 'styled-components'

export const Box = styled.div`
    width: 60%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.backgroundColor};
    color: ${props => props.color};
    border-radius: 12px;
    padding: 16px;

    :hover{
        transition: all 0.2s ease-in;
        background-color: #c0c0c0;
    }
    
`

export const InputSearch = styled.input`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    background: transparent;
    color: #F4F4F4;
`

export const icon = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    vertical-align: middle;
`

