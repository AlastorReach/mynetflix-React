import React from 'react';
import Navbar from './navbar';
import {
    MainContainer,
    StoryContainer,
    StoryContainerBackground,
    ImgBgContainer,
    ImageBackground,
    ImageGradient,
    StoryContainerText,
    H1,
    H2,
    ButtonsWrapper,
    Button,
    AnimationContainer
} from '../../common/main-container';

const Home = function(){

    
    return(
        <div>
            <Navbar />
            <MainContainer>
                <StoryContainer>
                    <StoryContainerBackground>
                        <ImgBgContainer>
                            <ImageBackground src={process.env.PUBLIC_URL + '/images/netflix.jpg'}/>
                            <ImageGradient />
                        </ImgBgContainer>
                    </StoryContainerBackground>
                    <StoryContainerText>
                        <H1>Programas y películas sin límite y mucho más</H1>
                        <H2>Disfruta donde quieras. Cancela en cualquier momento</H2>
                        <ButtonsWrapper>
                            <div>
                                <div>
                                    <form action="signup">
                                        <Button>
                                            <span style={{fontSize: "1.625rem"}}>PROBAR AHORA</span>
                                        </Button>
                                        <Button style={{backgroundColor: "transparent", border: "1px solid #ffffff"}}>
                                            <span style={{fontSize: "1.625rem"}}>OBTEN INFORMACIÓN</span>
                                        </Button>
                                    </form>
                                </div>
                            </div>
                        </ButtonsWrapper>
                    </StoryContainerText> 
                </StoryContainer>
                <StoryContainer>
                    <AnimationContainer>
                        <StoryContainerText style={{margin: "-5% 0", width: "52%"}}>
                            <H1>Disfruta en tu TV.</H1>
                            <H2>Puedes ver en smart TV, PlayStation, Xbox, Chromecast, 
                                Apple TV, reproductores de Blu-ray y más.</H2>
                            <ButtonsWrapper>
                            <Button style={{backgroundColor: "transparent", border: "1px solid #ffffff"}}>
                                    PROBAR AHORA
                            </Button>
                            </ButtonsWrapper>
                        </StoryContainerText>
                        <AnimationContainer style={{width: "48%"}}>
                            <ImgBgContainer style={{position: "relative"}}>
                            <img alt="" className="our-story-card-img"  style={{width: "100%", height: "auto", position: "relative", zIndex: "2"}}
                            src={process.env.PUBLIC_URL + "/images/tv.png"} data-uia="our-story-card-img"/>
                            <AnimationContainer style={{width: "100%", height: "100%", maxWidth: "73%",maxHeight: "54%", position: "absolute", top: "48%", left: "50%", transform: "translate(-50%, -50%)", zIndex: "1"}}>
                            <video style={{width: "100%",height: "100%"}} className="our-story-card-video" autoPlay={true} playsInline="" muted="" loop={true}><source src={process.env.PUBLIC_URL + "/videos/video-tv-0819.m4v"} type="video/mp4"/></video>
                            </AnimationContainer>
                            </ImgBgContainer>
                        </AnimationContainer>
                    </AnimationContainer>
                </StoryContainer>
            </MainContainer>
        </div>
    )
}

export default Home;