import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <Wrapper>
        <Logo>
            <a href='#'>
                <img src='./airbnb_design_logo.svg'></img>
            </a>
        </Logo>

        <Nav>
            <a href='#'><i class="gg-search"></i></a>
            <a href='#'>Projects</a>
            <a href='#'>Videos</a>
            <a href='#'>Events</a>
            <a href='#'>Articles</a>
        </Nav>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

const Logo = styled.div`
    align-items: left;
    
    & a {
        text-decoration: none;
    }
    & img {
        width: 100px;
    }
`

const Nav = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row-reverse;

    & a {
        text-decoration: none;
        font-size: 15px;
        margin-left: 30px;
        color: var(--dark-gray);
        font-weight: 400;
        border-bottom: 2px solid var(--white);
    }
    & a:hover {
        border-bottom: 2px solid var(--dark-gray);
    }
    & a:first-child:hover {
        border-bottom: 2px solid var(--white);
    }
`