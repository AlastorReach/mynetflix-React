import React from 'react';
import styled from 'styled-components';

class ScrubberProgress extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            video : this.props.video.current,
            leftPosition: 0
        }

        setInterval(() => {
            if(this.props.video != null){
                this.setState({
                    leftPosition : this.state.video.currentTime / this.state.video.duration * 100,
                })
            }
        },1000);
        
    }
    componentDidMount(){
        this.setState({
            video: this.props.video.current,
        })
        
    }

    render(){
        const CurrentProgress = styled.div`
            background: #e50914;
            display: -webkit-box;
            display: -webkit-flex;
            display: -moz-box;
            display: -ms-flexbox;
            display: flex;
            width: ${this.state.leftPosition}%;
            height: 100%;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
        `;

        return(
            <CurrentProgress id="scrubber-progress"/>
        )
    }
}

export default ScrubberProgress;