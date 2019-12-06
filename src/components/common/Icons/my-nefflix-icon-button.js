import React, { Component } from 'react';
import MyNetflixIcon from '../my-netflix-icon';
import styled from 'styled-components';

class MyNetflixIconButton extends Component {
    render(){
        const Button = styled.button`
            width:40px;
            height:40px;
            box-sizing:border-box;
            background-color: transparent;
            fill: white;
            border: none;
            margin: 0 16px 0 0;
        `;
        return(

                <Button>
                    <MyNetflixIcon icon={this.props.icon}/>
                </Button>
        );
    }
}

export default MyNetflixIconButton;