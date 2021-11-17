import React from "react";
import styled from "styled-components";
import TemplateOne from "../Templates/TemplateOne";

const Home = () => {
    return (
        <HomeWrapper>
            <TemplateOne />
        </HomeWrapper>
    );
};

const HomeWrapper = styled.section`
    margin-top: 4rem;
    width: 100%;
`;

export default Home;
