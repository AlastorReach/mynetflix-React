import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import  MyNetflixIcon from '../my-netflix-icon';

const MyNetFlixMiniGuideEntry = function(props){
    const backgroundColor = props.isSelected ? "#3e3e3e" : "#272727";
    const Container = styled.div`
        background-color: ${backgroundColor};
        display: inline-block;
    `;
    const Span = styled.span`
        color: white;
        font-size: 12px;
        font-weight: 400;
    `;
    return(
        <Container>
            <Link to={props.to} 
            style={{
                display: "flex",
                width: "72px",
                height: "72px",
                flexDirection: "column",
                justifyContent: "center",
            }}>
                <MyNetflixIcon icon={props.icon} height="25px" />
                <Span>{props.title}</Span>
            </Link>
            
        </Container>
    );
}

export default MyNetFlixMiniGuideEntry;