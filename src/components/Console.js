import React,{useState} from "react";
import styled from "styled-components";
import Line from "./Line";
import Flex from "./Flex";

const StyledConsole = styled.textarea`
    width: 100%;
    height: 70vh;
    background-color: black;
    font-size: 24px;
    color: ${props => props.color || props.theme.colors.primary };
    border: none;
    resize: none;
    &:focus {
        outline: none;
    }
    @media ${props => props.theme.media.phone} {
        border: 1px solid blue;
    }
    @media ${props => props.theme.media.tablet} {
        border: 1px solid red;
    }
`

const Console = ({color, ...props}) => {
    const [lines, setLines]= useState(["C/users/Asain"]);

    const onKeyPress = e => {
        if(e.charCode === '13'){
            setLines([...lines, "C/users/Asain"])
        }
    }

    return (
        <Flex >
            <Flex direction = "column" margin = "0px 10px">
                {lines.map(line => (
                    <Line color={color}>{line}</Line>
                ))}
            </Flex>
            <StyledConsole onKeyPress={onKeyPress} color={color}{...props}/>
        </Flex>
    )
}

export default Console;