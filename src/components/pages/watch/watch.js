import React from 'react';
import styled from 'styled-components';

import GeneralIcon from '../../common/Svg-Icons/general-icon';
import ArrowBack from '../../common/Svg-Icons/arrow-back-icon';
import PlayIcon from '../../common/Svg-Icons/play-icon';
import BackTenIcon from '../../common/Svg-Icons/backten-icon';
import GoTenIcon from '../../common/Svg-Icons/goTen-icon';
import VolumeControlIcon from '../../common/Svg-Icons/volume-control-icon';
import NextIcon from '../../common/Svg-Icons/next-icon';
import SeasonsIcon from '../../common/Svg-Icons/seasons.icon';
import SubtitlesIcon from '../../common/Svg-Icons/subtitles-icon';
import FullScreenIcon from '../../common/Svg-Icons/full-screen-icon';

import './style.css';

const Watch = function () {
    const SizingWrapper = styled.div`
        position: absolute;
        top: 0px;
        bottom: 0px;
        right: 0px;
        left: 0px;
        z-index: 1;
        overflow: hidden;
        font-size: 0.6em;
    `;
        const FirstDiv = styled.div`
            width: 1em;
            height: 1em;
            visibility: hidden;
            font-size: 1em;
        `;

        const NetFlixPlayer = styled.div`
            background-color: #000;
            bottom: 0;
            height: 100%;
            left: 0;
            position: absolute;
            right: 0;
            top: 0;
            width: 100%;
            z-index: 1;
        `;

            const NetflixPlayerContainer = styled.div`
                cursor: default;
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                background: #000;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                overflow: hidden;
                z-index: 1;
            `;

            const VideoContainer = styled.div`
                width: 100%;
                height: 100%;
                -webkit-transition: opacity .5s linear;
                -o-transition: opacity .5s linear;
                -moz-transition: opacity .5s linear;
                transition: opacity .5s linear;
            `;

                const VideoContainerFirst = styled.div`
                    position: relative;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                `;

                    const Video = styled.video`
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        margin: auto;
                        width: 100%;
                        height: 100%;
                    `;

                    const PlayerTimedText = styled.div`
                        display: none;
                        direction: ltr;
                    `;

            const PlayerViewWithChildren = styled.div`
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                width: 100%;
                height: 100%;
                display: -webkit-box;
            `;

            const PlayerControlsNeo = styled.div`
                background-color: rgba(0,0,0,0);
                -webkit-transition: background-color .3s ease;
                -o-transition: background-color .3s ease;
                -moz-transition: background-color .3s ease;
                transition: background-color .3s ease;
                display: -webkit-flex;
                display: -moz-box;
                display: -ms-flexbox;
                display: flex;
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                &.active{
                    cursor:default;
                }
            `;

                const PlayerControlsNeoAllControls = styled.div`
                    display: -webkit-box;
                    display: -webkit-flex;
                    display: -moz-box;
                    display: -ms-flexbox;
                    display: flex;
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                `;

                    const PlayerControlsNeoGradientTop = styled.div`
                        opacity: .75;
                        top: 0;
                        background-image: -webkit-gradient(linear,left top,left bottom,color-stop(0,rgba(0,0,0,.7)),to(rgba(0,0,0,0)));
                        background-image: -webkit-linear-gradient(top,rgba(0,0,0,.7) 0,rgba(0,0,0,0) 100%);
                        background-image: -moz-linear-gradient(top,rgba(0,0,0,.7) 0,rgba(0,0,0,0) 100%);
                        background-image: -o-linear-gradient(top,rgba(0,0,0,.7) 0,rgba(0,0,0,0) 100%);
                        background-image: linear-gradient(to bottom,rgba(0,0,0,.7) 0,rgba(0,0,0,0) 100%);
                        position: absolute;
                        left: 0;
                        right: 0;
                        height: 20%;
                        opacity: 0;
                        -webkit-transition: opacity .3s ease;
                        -o-transition: opacity .3s ease;
                        -moz-transition: opacity .3s ease;
                        transition: opacity .3s ease;
                        will-change: opacity;
                    `;

                    const PlayerControlsNeoGradientBottom = styled.div`
                        opacity: .75;
                        bottom: 0;
                        background-image: -webkit-gradient(linear,left bottom,left top,color-stop(0,rgba(0,0,0,.7)),to(rgba(0,0,0,0)));
                        background-image: -webkit-linear-gradient(bottom,rgba(0,0,0,.7) 0,rgba(0,0,0,0) 100%);
                        background-image: -moz-linear-gradient(bottom,rgba(0,0,0,.7) 0,rgba(0,0,0,0) 100%);
                        background-image: -o-linear-gradient(bottom,rgba(0,0,0,.7) 0,rgba(0,0,0,0) 100%);
                        background-image: linear-gradient(to top,rgba(0,0,0,.7) 0,rgba(0,0,0,0) 100%);
                        position: absolute;
                        left: 0;
                        right: 0;
                        height: 20%;
                        opacity: 0;
                        -webkit-transition: opacity .3s ease;
                        -o-transition: opacity .3s ease;
                        -moz-transition: opacity .3s ease;
                        transition: opacity .3s ease;
                        will-change: opacity;
                    `;

                    const ControlsFullHitZone = styled.div`
                        display: -webkit-box;
                        display: -webkit-flex;
                        display: -moz-box;
                        display: -ms-flexbox;
                        display: flex;
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        top: 0;
                        right: 0;
                        bottom: 0;
                        left: 0;
                    `;

                        const CenterScrolls = styled.div`
                            display: -webkit-box;
                            display: -webkit-flex;
                            display: -moz-box;
                            display: -ms-flexbox;
                            display: flex;
                            width: 100%;
                            height: 100%;
                            -webkit-box-align: center;
                            -webkit-align-items: center;
                            -moz-box-align: center;
                            -ms-flex-align: center;
                            align-items: center;
                            -webkit-box-pack: center;
                            -webkit-justify-content: center;
                            -moz-box-pack: center;
                            -ms-flex-pack: center;
                            justify-content: center;
                            opacity: 0;
                            font-size: 4em;
                        `;
                const PlayerControlsNeoCoreControls = styled.div`
                -webkit-transition: opacity .3s ease;
                -o-transition: opacity .3s ease;
                -moz-transition: opacity .3s ease;
                transition: opacity .3s ease;
                `;

                    const LeftControlGoBack = styled.div`
                        margin: 4em;
                        -webkit-align-self: flex-start;
                        -ms-flex-item-align: start;
                        align-self: flex-start;
                        -webkit-box-align: start;
                        -webkit-align-items: flex-start;
                        -moz-box-align: start;
                        -ms-flex-align: start;
                        align-items: flex-start;
                        -webkit-align-content: flex-start;
                        -ms-flex-line-pack: start;
                        align-content: flex-start;
                        display: -webkit-box;
                        display: -webkit-flex;
                        display: -moz-box;
                        display: -ms-flexbox;
                        display: flex;
                        -webkit-box-orient: vertical;
                        -webkit-box-direction: normal;
                        -webkit-flex-direction: column;
                        -moz-box-orient: vertical;
                        -moz-box-direction: normal;
                        -ms-flex-direction: column;
                        flex-direction: column;
                    `;

                        const LeftControlButton = styled.button`
                        font-size: 2.8em;
                        -webkit-transition: opacity .25s,-webkit-transform .25s cubic-bezier(.5,0,.1,1);
                        transition: opacity .25s,-webkit-transform .25s cubic-bezier(.5,0,.1,1);
                        -o-transition: opacity .25s,-o-transform .25s cubic-bezier(.5,0,.1,1);
                        -moz-transition: transform .25s cubic-bezier(.5,0,.1,1),opacity .25s,-moz-transform .25s cubic-bezier(.5,0,.1,1);
                        transition: transform .25s cubic-bezier(.5,0,.1,1),opacity .25s;
                        transition: transform .25s cubic-bezier(.5,0,.1,1),opacity .25s,-webkit-transform .25s cubic-bezier(.5,0,.1,1),-moz-transform .25s cubic-bezier(.5,0,.1,1),-o-transform .25s cubic-bezier(.5,0,.1,1);
                        -webkit-transform: translateZ(0) scale(1);
                        -moz-transform: translateZ(0) scale(1);
                        transform: translateZ(0) scale(1);
                        display: -webkit-box;
                        display: -webkit-flex;
                        display: -moz-box;
                        display: -ms-flexbox;
                        display: flex;
                        -webkit-box-flex: 0;
                        -webkit-flex: 0 0 auto;
                        -moz-box-flex: 0;
                        -ms-flex: 0 0 auto;
                        flex: 0 0 auto;
                        -webkit-box-pack: center;
                        -webkit-justify-content: center;
                        -moz-box-pack: center;
                        -ms-flex-pack: center;
                        justify-content: center;
                        -webkit-box-align: center;
                        -webkit-align-items: center;
                        -moz-box-align: center;
                        -ms-flex-align: center;
                        align-items: center;
                        -webkit-box-sizing: content-box;
                        -moz-box-sizing: content-box;
                        box-sizing: content-box;
                        background: 0 0;
                        border: 0;
                        cursor: pointer;
                        fill: #fff;
                        -webkit-user-select: none;
                        -moz-user-select: none;
                        -ms-user-select: none;
                        user-select: none;
                        -webkit-transition: opacity .3s ease;
                        -o-transition: opacity .3s ease;
                        -moz-transition: opacity .3s ease;
                        transition: opacity .3s ease;
                        &:after{
                            left: 100%;
                            right: auto/*!rtl:ignore*/;
                        }
                        `;

                    const PlayerBottomControls = styled.div`
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        width: 100%;
                        -webkit-box-sizing: border-box;
                        -moz-box-sizing: border-box;
                        box-sizing: border-box;
                        visibility: visible;
                        direction: ltr;
                        -webkit-transition-property: opacity,visibility;
                        -o-transition-property: opacity,visibility;
                        -moz-transition-property: opacity,visibility;
                        transition-property: opacity,visibility;
                        -webkit-transition-duration: .4s,0s;
                        -moz-transition-duration: .4s,0s;
                        -o-transition-duration: .4s,0s;
                        transition-duration: .4s,0s;
                        -webkit-transition-delay: 0s,0s;
                        -moz-transition-delay: 0s,0s;
                        -o-transition-delay: 0s,0s;
                        transition-delay: 0s,0s;
                        -webkit-transition-timing-function: ease-out;
                        -moz-transition-timing-function: ease-out;
                        -o-transition-timing-function: ease-out;
                        transition-timing-function: ease-out;
                    `;

                        const PlayerControlsNeoProgressControl = styled.div`
                        position: relative;
                        -webkit-transition: opacity .2s ease;
                        -o-transition: opacity .2s ease;
                        -moz-transition: opacity .2s ease;
                        transition: opacity .2s ease;
                        `;

                            const PlayerControlsNeoProgressContainer = styled.div`
                                -webkit-box-align: center;
                                -webkit-align-items: center;
                                -moz-box-align: center;
                                -ms-flex-align: center;
                                align-items: center;
                                display: -webkit-box;
                                display: -webkit-flex;
                                display: -moz-box;
                                display: -ms-flexbox;
                                display: flex;
                                padding: .4em 6.6em .4em 7.6em;
                                -webkit-transition: opacity .2s ease;
                                -o-transition: opacity .2s ease;
                                -moz-transition: opacity .2s ease;
                                transition: opacity .2s ease;
                            `;

                                const ProgressControl = styled.div`
                                    width: 100%;
                                    margin: 0 1.5em 0 0;
                                    display: -webkit-box;
                                    display: -webkit-flex;
                                    display: -moz-box;
                                    display: -ms-flexbox;
                                    display: flex;
                                    -webkit-box-align: center;
                                    -webkit-align-items: center;
                                    -moz-box-align: center;
                                    -ms-flex-align: center;
                                    align-items: center;
                                    -webkit-transition: opacity .25s,-webkit-transform .25s cubic-bezier(.5,0,.1,1);
                                    transition: opacity .25s,-webkit-transform .25s cubic-bezier(.5,0,.1,1);
                                    -o-transition: opacity .25s,-o-transform .25s cubic-bezier(.5,0,.1,1);
                                    -moz-transition: transform .25s cubic-bezier(.5,0,.1,1),opacity .25s,-moz-transform .25s cubic-bezier(.5,0,.1,1);
                                    transition: transform .25s cubic-bezier(.5,0,.1,1),opacity .25s;
                                    transition: transform .25s cubic-bezier(.5,0,.1,1),opacity .25s,-webkit-transform .25s cubic-bezier(.5,0,.1,1),-moz-transform .25s cubic-bezier(.5,0,.1,1),-o-transform .25s cubic-bezier(.5,0,.1,1);
                                    -webkit-transform: translateZ(0) scale(1);
                                    -moz-transform: translateZ(0) scale(1);
                                    transform: translateZ(0) scale(1);
                                `;

                                    const ScrubberContainer = styled.div`
                                        width: 100%;
                                        display: -webkit-box;
                                        display: -webkit-flex;
                                        display: -moz-box;
                                        display: -ms-flexbox;
                                        display: flex;
                                        -webkit-box-align: center;
                                        -webkit-align-items: center;
                                        -moz-box-align: center;
                                        -ms-flex-align: center;
                                        align-items: center;
                                        cursor: pointer;
                                        position: relative;
                                        -ms-touch-action: none;
                                        touch-action: none;
                                        height: 3.3em;
                                    `;

                                        const ScrubberBar = styled.div`
                                            -webkit-box-flex: 1;
                                            -webkit-flex-grow: 1;
                                            -moz-box-flex: 1;
                                            -ms-flex-positive: 1;
                                            flex-grow: 1;
                                            -webkit-flex-shrink: 0;
                                            -ms-flex-negative: 0;
                                            flex-shrink: 0;
                                            width: auto;
                                            position: relative;
                                        `;

                                            const Track = styled.div`
                                                height: .5em;
                                                background: #5b5b5b;
                                                position: relative;
                                                -webkit-transition: height .2s ease;
                                                -o-transition: height .2s ease;
                                                -moz-transition: height .2s ease;
                                                transition: height .2s ease;
                                                will-change: height;
                                            `;

                                                const Buffered = styled.div`
                                                    background: rgba(255,255,255,.2);
                                                    display: -webkit-box;
                                                    display: -webkit-flex;
                                                    display: -moz-box;
                                                    display: -ms-flexbox;
                                                    display: flex;
                                                    width: 100%;
                                                    height: 100%;
                                                    position: absolute;
                                                    top: 0;
                                                    right: 0;
                                                    bottom: 0;
                                                    left: 0;
                                                `;

                                                const CurrentProgress = styled.div`
                                                    background: #e50914;
                                                    display: -webkit-box;
                                                    display: -webkit-flex;
                                                    display: -moz-box;
                                                    display: -ms-flexbox;
                                                    display: flex;
                                                    width: 100%;
                                                    height: 100%;
                                                    position: absolute;
                                                    top: 0;
                                                    right: 0;
                                                    bottom: 0;
                                                    left: 0;
                                                `;

                                                const PlayHead = styled.div`
                                                height: 100%;
                                                border-left: solid 1px rgba(255,255,255,.5);
                                                border-right: solid 1px rgba(255,255,255,.5);
                                                margin-left: -1px;
                                                position: absolute;
                                                display: none;
                                                -webkit-transform: translateZ(0);
                                                -moz-transform: translateZ(0);
                                                transform: translateZ(0);
                                                `;

                                            const TrickPlay = styled.div`
                                                left: 407.953px;
                                                -webkit-box-sizing: border-box;
                                                -moz-box-sizing: border-box;
                                                box-sizing: border-box;
                                                padding-bottom: 0;
                                                background: rgba(38,38,38,.85);
                                                -webkit-box-shadow: 0 0 1em rgba(0,0,0,.5);
                                                -moz-box-shadow: 0 0 1em rgba(0,0,0,.5);
                                                box-shadow: 0 0 1em rgba(0,0,0,.5);
                                                pointer-events: none;
                                                display: none;
                                                position: absolute;
                                                bottom: 2.5em;
                                                -webkit-border-radius: .3em;
                                                -moz-border-radius: .3em;
                                                border-radius: .3em;
                                                overflow: hidden;
                                            `;

                                                const TpText = styled.div`
                                                    padding: .5em 0;
                                                    text-align: center;
                                                    font-size: 1.8em;
                                                `;

                                            const ScrubberHead = styled.div`
                                                left: 0%;
                                                top: 0px!important;
                                                position: absolute;
                                                top: 50%;
                                                height: 2.3em;
                                                width: 2.3em;
                                                margin: -1.15em;
                                                background: #e50914;
                                                -webkit-border-radius: 50%;
                                                -moz-border-radius: 50%;
                                                border-radius: 50%;
                                                opacity: 1;
                                                -webkit-transform: scale(1) translateZ(0);
                                                -moz-transform: scale(1) translateZ(0);
                                                transform: scale(1) translateZ(0);
                                                -webkit-transition: -webkit-transform .2s ease;
                                                transition: -webkit-transform .2s ease;
                                                -o-transition: -o-transform .2s ease;
                                                -moz-transition: transform .2s ease,-moz-transform .2s ease;
                                                transition: transform .2s ease;
                                                transition: transform .2s ease,-webkit-transform .2s ease,-moz-transform .2s ease,-o-transform .2s ease;
                                                -webkit-transform-origin: 50% 50%;
                                                -moz-transform-origin: 50% 50%;
                                                -ms-transform-origin: 50% 50%;
                                                -o-transform-origin: 50% 50%;
                                                transform-origin: 50% 50%;
                                                cursor: pointer;
                                            `;

                                const TextControl = styled.div`
                                    -webkit-transition: opacity .25s,-webkit-transform .25s cubic-bezier(.5,0,.1,1);
                                    transition: opacity .25s,-webkit-transform .25s cubic-bezier(.5,0,.1,1);
                                    -o-transition: opacity .25s,-o-transform .25s cubic-bezier(.5,0,.1,1);
                                    -moz-transition: transform .25s cubic-bezier(.5,0,.1,1),opacity .25s,-moz-transform .25s cubic-bezier(.5,0,.1,1);
                                    transition: transform .25s cubic-bezier(.5,0,.1,1),opacity .25s;
                                    transition: transform .25s cubic-bezier(.5,0,.1,1),opacity .25s,-webkit-transform .25s cubic-bezier(.5,0,.1,1),-moz-transform .25s cubic-bezier(.5,0,.1,1),-o-transform .25s cubic-bezier(.5,0,.1,1);
                                    -webkit-transform: translateZ(0) scale(1);
                                    -moz-transform: translateZ(0) scale(1);
                                    transform: translateZ(0) scale(1);
                                    width: 8em;
                                    display: -webkit-box;
                                    display: -webkit-flex;
                                    display: -moz-box;
                                    display: -ms-flexbox;
                                    display: flex;
                                    -webkit-box-orient: vertical;
                                    -webkit-box-direction: normal;
                                    -webkit-flex-direction: column;
                                    -moz-box-orient: vertical;
                                    -moz-box-direction: normal;
                                    -ms-flex-direction: column;
                                    flex-direction: column;
                                    -webkit-box-align: end;
                                    -webkit-align-items: flex-end;
                                    -moz-box-align: end;
                                    -ms-flex-align: end;
                                    align-items: flex-end;
                                `;

                                    const TimeRemaining = styled.time`
                                    font-size: 1.8em;
                                    `;

                        const PlayerControlsNeoButtonControlRow = styled.div`
                            padding: 0 4em;
                            -webkit-box-align: center;
                            -webkit-align-items: center;
                            -moz-box-align: center;
                            -ms-flex-align: center;
                            align-items: center;
                            display: -webkit-box;
                            display: -webkit-flex;
                            display: -moz-box;
                            display: -ms-flexbox;
                            display: flex;
                        `;

                            const PlayButton = styled.button`
                            
                            `;

                            const VolumeContainer = styled.div`

                            `;

                                const PopupWrapper = styled.div`
                                    width: 100%;
                                    right: 0;
                                    left: auto/*!rtl:ignore*/;
                                    opacity: 0;
                                    position: absolute;
                                    pointer-events: none;
                                    -webkit-transform: scale(.95) translateZ(0);
                                    -moz-transform: scale(.95) translateZ(0);
                                    transform: scale(.95) translateZ(0);
                                    -webkit-transition: opacity 160ms ease,visibility 0s linear 160ms,-webkit-transform .2s ease;
                                    transition: opacity 160ms ease,visibility 0s linear 160ms,-webkit-transform .2s ease;
                                    -o-transition: opacity 160ms ease,visibility 0s linear 160ms,-o-transform .2s ease;
                                    -moz-transition: opacity 160ms ease,transform .2s ease,visibility 0s linear 160ms,-moz-transform .2s ease;
                                    transition: opacity 160ms ease,transform .2s ease,visibility 0s linear 160ms;
                                    transition: opacity 160ms ease,transform .2s ease,visibility 0s linear 160ms,-webkit-transform .2s ease,-moz-transform .2s ease,-o-transform .2s ease;
                                    visibility: hidden;
                                    will-change: transform,opacity;
                                    bottom: 3.5em;
                                    margin: -.5em;
                                    padding: .5em;
                                    right: .5em/*!rtl:ignore*/;
                                `;

                            const VideoTitle = styled.div`
                                -webkit-box-flex: 1;
                                -webkit-flex-grow: 1;
                                -moz-box-flex: 1;
                                -ms-flex-positive: 1;
                                flex-grow: 1;
                                -webkit-box-sizing: border-box;
                                -moz-box-sizing: border-box;
                                box-sizing: border-box;
                                margin: 0 1.5em;
                                overflow: hidden;
                                padding: 0 0 1.68em 0;
                            `;

                                const EllipsizeText = styled.div`
                                    width: 100%;
                                    direction: ltr;
                                    text-overflow: ellipsis;
                                    overflow: hidden;
                                    white-space: nowrap;
                                    line-height: normal;
                                `;

                                    const InfoSerie = styled.h4`
                                        font-size: 2.2em;
                                        padding: 0;
                                        margin: 0 .5em 0 0;
                                        white-space: nowrap;
                                        display: inline-block;
                                    `;

                                    const SeasonNumberEpisodeNumber = styled.span`
                                        font-size: 2em;
                                        padding-right: .5em;
                                        color: #adadad;
                                        display: inline-block;
                                    `;

                                    const SpanVideoTitle = styled.span`
                                        font-size: 2em;
                                        padding-right: .5em;
                                        color: #adadad;
                                        display: inline-block;
                                    `;

                            const NextEpisode = styled.div`

                            `;

                            const SeasonsInfo = styled.div`
                            
                            `;

                            const SubtitlesInfo = styled.div`
                            
                            `;


                                                
    return (
        <div className="nf-kb-nav-wrapper">
            <SizingWrapper>
                <FirstDiv />
                    <NetFlixPlayer>
                        <NetflixPlayerContainer>
                            <GeneralIcon />
                            <VideoContainer>
                                <VideoContainerFirst>
                                    <Video></Video>
                                    <PlayerTimedText />
                                </VideoContainerFirst>
                            </VideoContainer>
                            <PlayerViewWithChildren />
                            <PlayerControlsNeo>
                                <PlayerControlsNeoAllControls>
                                    <PlayerControlsNeoGradientTop />
                                    <PlayerControlsNeoGradientBottom />
                                    <ControlsFullHitZone>
                                        <CenterScrolls />
                                    </ControlsFullHitZone>   
                                </PlayerControlsNeoAllControls>
                                <PlayerControlsNeoCoreControls>
                                    <LeftControlGoBack>
                                        <LeftControlButton >
                                            <ArrowBack />
                                        </LeftControlButton>
                                    </LeftControlGoBack>
                                    <PlayerBottomControls>
                                        <PlayerControlsNeoProgressControl>
                                            <PlayerControlsNeoProgressContainer>
                                                <ProgressControl>
                                                    <ScrubberContainer>
                                                        <ScrubberBar>
                                                            <Track>
                                                                <Buffered />
                                                                <CurrentProgress />
                                                                <PlayHead />
                                                            </Track>
                                                            <TrickPlay>
                                                                <div className="tp-image">
                                                                    <img src="" />
                                                                </div>
                                                                <TpText>17:47</TpText>
                                                            </TrickPlay>
                                                            <ScrubberHead />
                                                        </ScrubberBar>
                                                    </ScrubberContainer>
                                                </ProgressControl>
                                                <TextControl>
                                                    <TimeRemaining />
                                                </TextControl>
                                            </PlayerControlsNeoProgressContainer>
                                        </PlayerControlsNeoProgressControl>
                                        <PlayerControlsNeoButtonControlRow>
                                            <PlayButton className="player-controls--control-element nfp-button-control touchable " >
                                                <PlayIcon />
                                            </PlayButton>
                                            <PlayButton className="player-controls--control-element nfp-button-control touchable " >
                                                <BackTenIcon />
                                            </PlayButton>
                                            <PlayButton className="player-controls--control-element nfp-button-control touchable " >
                                                <GoTenIcon />
                                            </PlayButton>
                                            <VolumeContainer className="player-controls--control-element nfp-button-control touchable">
                                            <PlayButton className="player-controls--control-element nfp-button-control touchable " >
                                                <VolumeControlIcon/>
                                            </PlayButton>
                                            <PopupWrapper className="touchable"/>
                                            </VolumeContainer>
                                            <VideoTitle className="player-controls--control-element">
                                                <EllipsizeText>
                                                    <InfoSerie>
                                                        Breaking Bad
                                                    </InfoSerie>
                                                    <SeasonNumberEpisodeNumber>
                                                        T:01E:01
                                                    </SeasonNumberEpisodeNumber>
                                                    <SpanVideoTitle>
                                                        FeLiNa
                                                    </SpanVideoTitle>
                                                </EllipsizeText>
                                            </VideoTitle>
                                            <NextEpisode className="player-controls--control-element nfp-button-control touchable">
                                                <PlayButton className="player-controls--control-element nfp-button-control touchable " >
                                                    <NextIcon />
                                                </PlayButton>
                                                <PopupWrapper className="touchable"/>
                                            </NextEpisode>
                                            <SeasonsInfo className="player-controls--control-element nfp-button-control touchable">
                                                <PlayButton className="player-controls--control-element nfp-button-control touchable " >
                                                    <SeasonsIcon />
                                                </PlayButton>
                                                <PopupWrapper className="touchable"/>
                                            </SeasonsInfo>
                                            <SubtitlesInfo className="player-controls--control-element nfp-button-control touchable ">
                                                <PlayButton className="player-controls--control-element nfp-button-control touchable " >
                                                    <SubtitlesIcon />
                                                </PlayButton>
                                                <PopupWrapper className="touchable"/>
                                            </SubtitlesInfo>
                                            <PlayButton className="player-controls--control-element nfp-button-control touchable " >
                                                    <FullScreenIcon />
                                            </PlayButton>
                                        </PlayerControlsNeoButtonControlRow>
                                    </PlayerBottomControls>
                                </PlayerControlsNeoCoreControls>
                            </PlayerControlsNeo>
                        </NetflixPlayerContainer>
                    </NetFlixPlayer>
            </SizingWrapper>
        </div>
    )
}

export default Watch;