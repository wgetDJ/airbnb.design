import React from 'react'
import styled from 'styled-components'

const LatestPost = ({image, children}) => {
  return (
    <Wrapper>
        {image && <PostImage img={image} />}
        <PostDetails>{children}</PostDetails>
    </Wrapper>
  )
}

export default LatestPost

const Wrapper = styled.div`
    width: calc(100% - 48px);
    margin: 30px 24px;
`

const PostImage = styled.div`
    width: 100%;
    height: 600px;
    background-image: url(${(props) => props.img});
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
`

const PostDetails = styled.div`
    max-width: calc(50% - 24px);
    margin-left: 24px;
    margin-top: -80px;
    background-color: var(--white);
    padding: 40px;

    font-size: 30px;

    & a {
        text-decoration: none;
        line-height: 40px;
        color: var(--light-gray);
    }
    & a b {
        color: var(--dark-gray);
    }
    & a:hover {
        text-decoration: underline;
        text-decoration-color: var(--dark-gray);
        text-decoration-thickness: 2px;
        text-underline-offset: 2px;
    }
`

// const Title = styled.div`
//     font-size: 30px;

//     & a {
//         text-decoration: none;
//         line-height: 40px;
//         color: var(--light-gray);
//     }
//     & a b {
//         color: var(--dark-gray);
//     }
//     & a:hover {
//         text-decoration: underline;
//         text-decoration-color: var(--dark-gray);
//         text-decoration-thickness: 2px;
//         text-underline-offset: 2px;
//     }
// `