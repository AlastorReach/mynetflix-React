import React from 'react';
import styled from 'styled-components';

class ScrubberHead extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            video : props.video,
            leftPosition: 0,
        }

        setInterval(() => {
            this.setState({
                leftPosition : this.state.video.currentTime / this.state.video.duration * 100,
            })
        },1000);
    }

    componentDidMount(){
        this.setState({
            video: this.props.video.current
        })
    }

    render(){
        console.log(this.state.leftPosition);
        const Head = styled.div`
            left: ${this.state.leftPosition}%;
            top: 0px!important;
            position: absolute;
            top: 50%;
            height: 2.3em;
            width: 2.3em;
            margin: -1em;
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
        return(
            <Head />
        )
    }
}

export default ScrubberHead;