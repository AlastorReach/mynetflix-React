import React from 'react';
import styled from 'styled-components';

import NeflixLogo from './Svg-Icons/netflix-logo';
import NetflixLogo from './Svg-Icons/netflix-logo';

const MyNetflixLogo = function(props){
    const Container = styled.div`
    width:${props.width};
    display:block;
    fill:#e5160f;
    float: ${props.float || "none"}
    `;

    return(
        <Container>
            <NetflixLogo />
        </Container>
    )
}

export default MyNetflixLogo;