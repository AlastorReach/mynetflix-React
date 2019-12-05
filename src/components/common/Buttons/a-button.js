import React from 'react';
import styled from 'styled-components';

const AButton = function(props){
    
    const { bgColor, link, title} = props;
    const Button = styled.a`
        background-color: ${bgColor};
        line-height: normal;
        padding: 7px 17px;
        font-weight: 400;
        font-size: 1rem;
        float: right;
        color: white
    `;

    return(
    <Button href={link}>{title}</Button>
    )
}

export default AButton;