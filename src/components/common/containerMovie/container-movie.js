import React from 'react';
import styled from 'styled-components';


const ContainerMovie = function(props){
    const Container = styled.div`
        opacity: 1;
        cursor:pointer;
        transition:all 450ms;
        transform:center left;
        padding-top:2rem;
        padding-bottom:2rem;
        height:8.5rem;
        min-height:0
        &:hover{transform:scale(1.5);opacity:1}


        @media only screen and (max-width: 74em){
            &{height:8.5rem}
        }
        @media only screen and (max-width: 37.5em){
            &{height:4rem}
        }
        &:not(:last-child){padding-right:.5rem}
    `;

    const ImageMovie = styled.img`
        height: 100%;
    `;
        console.log(props.image);
    return(
        <Container className="container-movie">
            <ImageMovie src={props.image} />
        </Container>
    )
}

export default ContainerMovie;


/*.movieShowcase__container--movie{opacity:.3}
.movieShowcase__container:hover .movieShowcase__container--movie:hover{transform:scale(1.5);opacity:1}
.movieShowcase__container:hover>*{transform:translate3d(-6rem, 0, 0)}
@media only screen and (max-width: 74em){
    .movieShowcase__container:hover>*{transform:translate3d(-5rem, 0, 0)}
}
@media only screen and (max-width: 37.5em){
    .movieShowcase__container:hover>*{transform:translate3d(-3rem, 0, 0)}
}
.movieShowcase__container--movie:hover ~ .movieShowcase__container--movie{transform:translate3d(6rem, 0, 0)}

@media only screen and (max-width: 74em){
    .movieShowcase__container--movie:hover ~ .movieShowcase__container--movie{transform:translate3d(4.5rem, 0, 0)}
}
kk
@media only screen and (max-width: 37.5em){
    .movieShowcase__container--movie:hover ~ .movieShowcase__container--movie{transform:translate3d(2.8rem, 0, 0)}
}
ll
.movieShowcase__container:hover>.movieShowcase__container--movie__netflix{transform:translate3d(-1rem, 0, 0)}
.movieShowcase__container--movie__netflix:hover ~ .movieShowcase__container--movie__netflix{transform:translate3d(1rem, 0, 0)}
.movieShowcase__container:hover .movieShowcase__container--movie__netflix{opacity:.3}
.movieShowcase__container:hover .movieShowcase__container--movie__netflix:hover{transform:scale(1.1);opacity:1}
ff
.movieShowcase__container--movie{cursor:pointer;transition:all 450ms;transform:center left;padding-top:3.5rem;padding-bottom:4rem;height:21.5rem;min-height:0}


rr



.movieShowcase__container--movie-image{height:100%}
.movieShowcase__container--movie__netflix{min-height:0;padding-top:3rem;padding-bottom:4rem;padding-right:1rem;height:52rem;cursor:pointer;transition:all 450ms;transform:center left}
@media only screen and (max-width: 74em){
    .movieShowcase__container--movie__netflix{height:42rem}
}
@media only screen and (max-width: 37.5em){
    .movieShowcase__container--movie__netflix{height:34rem}
}*/