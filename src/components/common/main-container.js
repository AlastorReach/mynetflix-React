import styled from 'styled-components';

const Containers = {};

export const MainContainer = styled.div`
        margin: 0 auto;
        max-width: 1820px;
        background-color:#000;
    `;

    export const StoryContainer = styled.div`
        padding: 70px 45px;
        position:relative;
        border-bottom: 8px solid #222222;
        margin-bottom:0;
        background:transparent;
        color: white;
    `;

    export const StoryContainerBackground = styled.div`
        top: -100px;
        position:absolute;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
    `;

        export const ImgBgContainer = styled.div`
            bottom: 0;
            position:absolute;
            top: 0;
            right: 0;
            bottom:0
            left: 0;
        `;

        export const ImageBackground = styled.img`
            width:100%;
            height:100%;
            object-fit:cover;
        `;

       export const ImageGradient = styled.div`
            background: rgba(0, 0, 0, 0.4);
            background-image: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%);
            position:absolute;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
        `;
   export const StoryContainerText = styled.div`
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
      export  const H1 = styled.h1`
            font-size: 3.125rem;
            line-height: 1.1;
            margin-bottom: 0.5rem
        `;

      export  const H2 = styled.h2`
            margin-bottom: 2.5rem;
            font-size: 1.625rem;
            font-weight: normal;
        `;

       export const ButtonsWrapper = styled.div`
            display:flex;
            margin: 25px auto 0;
            justify-content: center;
            flex-wrap: wrap;
            max-width: 400px;
            white-space: nowrap;
            flex-direction: column;
            align-content: center;
        `;
            

               export const Button = styled.button`
                width: 100%;
                margin-top: 0;
                display: block;
                padding: 24px 50px;
                border: 1px solid #e50914;
                background-color: #e50914
                color: #ffffff;
                margin-bottom: 10px;
                `;
    
    export const AnimationContainer = styled.div`
        max-width: 1100px;
        margin: 0 auto;
        display:flex;
        align-items: center;
        justify-content: space-between;
    `;

    Containers.MainContainer = MainContainer;
    Containers.StoryContainer = StoryContainer;
    Containers.StoryContainerBackground = StoryContainerBackground;
    Containers.ImgBgContainer = ImgBgContainer;
    Containers.ImageBackground = ImageBackground;
    Containers.ImageGradient = ImageGradient;
    Containers.StoryContainerText = StoryContainerText;
    Containers.H1 = H1;
    Containers.H2 = H2;
    Containers.ButtonsWrapper = ButtonsWrapper;
    Containers.Button = Button;
    Containers.AnimationContainer = AnimationContainer;

    export default Containers;