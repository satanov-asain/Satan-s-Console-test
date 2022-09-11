import React from "react";
import styled from "styled-components";

const StyledFlex = styled.div`
    display: flex;
    flex-direction: ${({direction}) => direction || 'row' };
    align-items: ${({align}) => align || 'stretch'};
    justify-content: ${({justify}) => justify || 'stretch'};
    margin: ${({margin}) => margin || '0'}
`
const Flex = (props) => {
    return <StyledFlex {...props}/>
}
export default Flex;