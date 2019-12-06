import React from 'react';
import styled from 'styled-components';
import Navbar from './navbar';

const Home = function(){
    const MainContainer = styled.div`
        margin: 0 auto;
        max-width: 1820px;
        background-color:#000;
    `;

    const StoryContainer = styled.div`
        padding: 70px 45px;
        position:relative;
        border-bottom: 8px solid #222222;
        margin-bottom:0;
        background:transparent;
        color: white;
    `;

    const StoryContainerBackground = styled.div`
        top: -100px;
        position:absolute;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
    `;

        const ImgBgContainer = styled.div`
            bottom: 0;
            position:absolute;
            top: 0;
            right: 0;
            bottom:0
            left: 0;
        `;

        const ImageBackground = styled.img`
            width:100%;
            height:100%;
            object-fit:cover;
        `;

        const ImageGradient = styled.div`
            background: rgba(0, 0, 0, 0.4);
            background-image: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%);
            position:absolute;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
        `;
    const StoryContainerText = styled.div`
        position:relative;
        width:100%;
        padding:75px 0;
        max-width:640px;
        margin:0 auto;
        text-align:center;
        z-index:1
        font-size: 1.625rem;
        font-weight: normal;
    `;
        const H1 = styled.h1`
            font-size: 3.125rem;
            line-height: 1.1;
            margin-bottom: 0.5rem
        `;

        const H2 = styled.h2`
            margin-bottom: 2.5rem;
            font-size: 1.625rem;
            font-weight: normal;
        `;

        const ButtonsWrapper = styled.div`
            display:flex;
            margin: 25px auto 0;
            justify-content: center;
            flex-wrap: wrap;
            max-width: 400px;
            white-space: nowrap;
            flex-direction: column;
            align-content: center;
        `;
            

                const Button = styled.button`
                width: 100%;
                margin-top: 0;
                display: block;
                padding: 24px 50px;
                border: 1px solid #e50914;
                background-color: #e50914
                color: #ffffff;
                margin-bottom: 10px;
                `;
    
    const AnimationContainer = styled.div`
        max-width: 1100px;
        margin: 0 auto;
        display:flex;
        align-items: center;
        justify-content: space-between;
    `;

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