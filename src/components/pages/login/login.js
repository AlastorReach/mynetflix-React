import React from 'react';
import Navbar from '../../common/Navbar/navbar';
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

import {
    LoginContent,
    HibrydLogin,
    H1FormTitle,
    Form,
    EmailFormInput,
    InputPlacement,
    EmailFormControls,
    LabelInputId,
    Input,
    PlaceLabel,
} from './content';

const LoginPage = () => (
    <div>
        <Navbar />
        <MainContainer >
            <StoryContainer>
            <StoryContainerBackground>
                <ImgBgContainer>
                    <ImageBackground src={process.env.PUBLIC_URL + '/images/netflix.jpg'}/>
                    <ImageGradient />
                </ImgBgContainer>
                
            </StoryContainerBackground>
            <StoryContainerText>
                <LoginContent>
                    <HibrydLogin>
                        <H1FormTitle>Inicia sesión</H1FormTitle>
                        <Form>
                            <EmailFormInput>
                                <InputPlacement>
                                    <EmailFormControls>
                                        <LabelInputId>
                                            <Input />
                                            <PlaceLabel>Email o número telefónico</PlaceLabel>
                                        </LabelInputId>
                                    </EmailFormControls>
                                </InputPlacement>
                            </EmailFormInput>
                        </Form>
                    </HibrydLogin>
                </LoginContent>
            </StoryContainerText>
            </StoryContainer>
            
        </MainContainer>
    </div>
    
)

export default LoginPage;