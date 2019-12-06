import React from 'react';
import styled from 'styled-components';

const RowContainerMovie = function(props){
    const Row = styled.div`
        overflow-y: hidden;
        transition: transform 450ms;
        overflow-x: scroll;
        display: flex;
        width: 95vw;
        overflow: -moz-scrollbars-horizontal;
        grid-template-columns: repeat(20, 1fr);
        column-gap: 0;
       
        &:hover .container-movie{transform:translate3d(-3rem, 0, 0);}
        & .container-movie:hover ~ .container-movie{transform:translate3d(3rem, 0, 0);}
        & .container-movie:hover{transform:scale(1.3);opacity:1}

    `;

    return(
        <Row>
        {props.children}
        </Row>
    )
};
export default RowContainerMovie;