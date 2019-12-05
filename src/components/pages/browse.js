import React from 'react';

import Header from '../common/Header/header';
import Navbar from '../common/Navbar/navbar';
import MyNetflixMiniGuide from '../common/MiniGuide/my-netflix-mini-guide';
import MyNetflixMiniGuideEntry from '../common/MiniGuide/my-netflix-mini-guide-entry';

import HomeIcon from '../common/Svg-Icons/home-icon';
import BibliotecaIcon from '../common/Svg-Icons/biblioteca-icon';

const Browse = function(){
    const entries = [
        <MyNetflixMiniGuideEntry to="/browse" icon={<HomeIcon/>}  title="Inicio" isSelected={true} />,
        <MyNetflixMiniGuideEntry to="/library" icon={<BibliotecaIcon/>}  title="Biblioteca" isSelected={false} />,
      ]
    return(
        <div>
            <Header navbar={<Navbar />} />
            <MyNetflixMiniGuide entries={entries}/>
            <h1>Browse</h1>

        </div>
    )
}


export default Browse;