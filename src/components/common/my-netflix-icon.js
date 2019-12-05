import React from 'react';
import styled from 'styled-components';

const MyNetflixIcon =  function(props){
    const Icon = styled.div`
    color: white;
    display:inline-flex;
    fill:white;
    height: ${props.height}
    `
    return(
        <Icon>
            {props.icon}
        </Icon>
    )
}

export default MyNetflixIcon;