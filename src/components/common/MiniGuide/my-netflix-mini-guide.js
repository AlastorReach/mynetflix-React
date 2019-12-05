import React, { Component } from 'react';
import styled from 'styled-components';





class MyNetflixMiniGuide extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const MiniGuide = styled.div`
            position: fixed;
            left:0;
            top: 56px
            bottom: 0;
            background-color: #272727;
            width: 72px;
        `;
        return(
            <MiniGuide>
                {this.props.entries}
            </MiniGuide>
        )
    }
}

export default MyNetflixMiniGuide;