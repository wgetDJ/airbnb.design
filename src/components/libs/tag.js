import styled from 'styled-components'

export default styled.div`
    & a {
        text-decoration: none;
        color: var(--dark-gray);
    }

    & a:hover {
        text-decoration: underline;
        text-underline-offset: 2px;
    }    
`