import React from 'react'
import styled from 'styled-components'

const PostCardMedium = ({image, children}) => {
  return (
    <Wrapper>
        {image && <PostImage img={image} />}
        <PostTitle>{children}</PostTitle>
    </Wrapper>
  )
}

export default PostCardMedium

const Wrapper = styled.div`
    display: grid;
    grid-gap: 30px;
`

const PostImage = styled.div`
    width: 100%;
    height: 380px;
    background-image: url(${(props) => props.img});
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
`

const PostTitle = styled.div`
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