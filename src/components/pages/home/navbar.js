import React from 'react';
import styled from 'styled-components';

import MyNetflixLogo from '../../common/my-netflix-logo';
import AButton from '../../common/Buttons/a-button';


const NavBar = function(){

    const HeaderWrapper = styled.div`
        height: 4rem;
        background-color: transparent;
        position:relative;
        max-width: 1920px;
        margin: 0 auto;
        padding-top: 20px;
        width:100%;
        top:0;
        left:0;
        right:0;
        bottom:0;
        z-index:10
    `;

    const HomeHeader = styled.div`
        position:relative;
        margin:0 3.5rem;
        height: 100%;
    `;
    return(
        <HeaderWrapper>
            <HomeHeader>
                <MyNetflixLogo width="144px" float="left"/>
                <AButton bgColor="#e50914" link="/login" title="Iniciar sesión"/>
            </HomeHeader>
        </HeaderWrapper>
    )
}

export default NavBar;  