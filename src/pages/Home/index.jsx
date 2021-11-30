import React from 'react'
import styled from 'styled-components'
import TemplateTwo from '../Templates/TemplateTwo'

const Home = () => {
    return (
        <HomeWrapper>
            <TemplateTwo />
        </HomeWrapper>
    )
}

const HomeWrapper = styled.section`
    margin-top: 4rem;
    width: 100%;
`

export default Home
