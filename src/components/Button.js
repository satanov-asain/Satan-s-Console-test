import React from "react";
import styled, {css, keyframes} from "styled-components";

const buttonAnimation = keyframes`
    0% {
        transform: rotateX(0deg);
    } 
    100%{
        transform: rotateX(360deg);
    }
`

const StyledButton =  styled.button.attrs(props => ({
    outlined: true
}))`
    padding: 10px 15px;
    font-size: 18px;
    font-style: bold;
    align-self: ${({align}) => align || 'stretch'};
    cursor: pointer;
    transform-origin: top;
    &:hover{
        animation: ${buttonAnimation} 3s ease;
    }
    &:focus {
        outline: none;
    }
    ${({primary}) => primary && css`
        color: ${({color}) => color || 'black'};
        background: ${props => props.background || 'white'};
        border: none;
        border-radius: 5px;
    ` }
    ${({outlined}) => outlined && css`
        border: 5px inset ${({color, ...props}) => color || props.theme.colors.primary} ;
        color: ${({color, ...props}) => color || props.theme.colors.primary};
        background: transparent;
        border-radius: 5px;
    `}
`;

const Button = (props) => {
    return <StyledButton {...props}/>
}

export default Button;
