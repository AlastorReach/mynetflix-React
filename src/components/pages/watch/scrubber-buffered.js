import React from 'react';
import styled from 'styled-components';

class ScrubberBuffered extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            video : this.props.video.current,
            leftPosition: 0
        }

        setInterval(() => {
            this.setState({
                leftPosition : this.state.video.buffered / this.state.video.duration * 100,
            })
        },1000);
    }

    componentDidMount(){
        this.setState({
            video: this.props.video.current
        })
    }

    render(){
        const Buffered = styled.div`
            background: rgba(255,255,255,.2);
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
            left: 0
        `;
        return(
            <Buffered />
        )
    }
}

export default ScrubberBuffered;