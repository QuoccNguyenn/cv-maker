import React from "react";
import styled from "styled-components";
import DetailInform from "./components/DetailInform";
import EducationInfo from "./components/EducationInfo";

const InformationField = ({ info, setInfo, education, setEducation }) => {
    return (
        <Wrapper className='container'>
            <DetailInform info={info} setInfo={setInfo} />
            {/* Personal information */}
            <EducationInfo education={education} setEducation={setEducation} />
            {/* Education */}
            {/* Experiment
                - skill
                - position + time
            */}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    padding: 1rem 0 3rem;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1.5rem;
`;

export default InformationField;
