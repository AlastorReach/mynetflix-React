import React from 'react';
import styled from 'styled-components';

import MyNetflixIconButton from '../Icons/my-nefflix-icon-button';
import MenuIcon from '../Svg-Icons/menu-icon';
import MyNetflixLogo from '../my-netflix-logo';

const Navbar = function(){

    const Navbar = styled.div`
        background-color: #272727;
        height: 56px;
        display:flex;
        align-items: center;
        padding: 0 16px;
    `;
    return(
    <Navbar>
            <MyNetflixIconButton icon={<MenuIcon />} />
            <MyNetflixLogo width="72px"/>
    </Navbar>
    )
}
export default Navbar;