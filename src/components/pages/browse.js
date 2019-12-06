import React from 'react';

import Header from '../common/Header/header';
import Navbar from '../common/Navbar/navbar';
import MyNetflixMiniGuide from '../common/MiniGuide/my-netflix-mini-guide';
import MyNetflixMiniGuideEntry from '../common/MiniGuide/my-netflix-mini-guide-entry';

import HomeIcon from '../common/Svg-Icons/home-icon';
import BibliotecaIcon from '../common/Svg-Icons/biblioteca-icon';
import RowContainerMovie from '../common/containerMovie/row-container-movie';
import ContainerMovie from '../common/containerMovie/container-movie';
import Heading from '../common/containerMovie/row-movie-heading';

const Browse = function(){
    const entries = [
        <MyNetflixMiniGuideEntry key="inicio" to="/browse" icon={<HomeIcon/>}  title="Inicio" isSelected={true} />,
        <MyNetflixMiniGuideEntry key="biblioteca" to="/library" icon={<BibliotecaIcon/>}  title="Biblioteca" isSelected={false} />,
      ]
    const children = [
        <ContainerMovie key="1" image="https://image.tmdb.org/t/p/original//ww5aGS5H2tUtckxFFNOJE2790S7.jpg" />,
        <ContainerMovie key="2" image="https://image.tmdb.org/t/p/original//aQLygZOIKai6aaiBAeeKpIWO5nc.jpg" />,
        <ContainerMovie key="3" image="https://image.tmdb.org/t/p/original//mSQjVoZJaZkaHpdLIahh04bfGDr.jpg" />,
        <ContainerMovie key="4" image="https://image.tmdb.org/t/p/original//a1MlbLBk5Sy6YvMbSuKfwGlDVlb.jpg" />,
        <ContainerMovie key="5" image="https://image.tmdb.org/t/p/original//zTxHf9iIOCqRbxvl8W5QYKrsMLq.jpg" />,
        <ContainerMovie key="6" image="https://image.tmdb.org/t/p/original//tLCDKsXo6D84IVFanoElosSEKdp.jpg" />,
        <ContainerMovie key="7" image="https://image.tmdb.org/t/p/original//AbRYlvwAKHs0YuyNO6NX9ofq4l6.jpg" />
    ]
    return(
        <div>
            <Header navbar={<Navbar />} />
            <MyNetflixMiniGuide entries={entries}/>
            <div className="main-content" style={{overflowX: "auto",display: "block",flex: "1",flexBasis: 
            "0.000000001px",marginLeft: "72px", backgroundColor: "#111",gridColumn: "2 / 13",color: "#fff", padding: "10px 30px"}}>
                <Heading>Trending Now</Heading>
                <RowContainerMovie className="row-container-movie" children={children}/>
                <Heading>Top Rated</Heading>
                <RowContainerMovie className="row-container-movie" children={children}/>
                <Heading>Action Movies</Heading>
                <RowContainerMovie className="row-container-movie" children={children}/>
                <Heading>Comedy Movies</Heading>
                <RowContainerMovie className="row-container-movie" children={children}/>
                <Heading>Horror Movies</Heading>
                <RowContainerMovie className="row-container-movie" children={children}/>
            </div>

        </div>
    )
}


export default Browse;