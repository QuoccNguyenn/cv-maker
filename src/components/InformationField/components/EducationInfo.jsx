import React from "react";
import styled from "styled-components";

const EducationInfo = ({ education, setEducation }) => {
    const handleChange = (e) => {
        setEducation({ ...education, [e.target.name]: e.target.value });
    };
    return (
        <Wrapper>
            <Title>Education Details</Title>
            <WrapInfo>
                <Content>
                    <Header>High School</Header>
                    <input
                        type='text'
                        value={education.school}
                        name='school'
                        onChange={handleChange}
                    />
                </Content>
                <Content>
                    <Header>Time</Header>
                    <input
                        type='text'
                        value={education.time}
                        name='time'
                        onChange={handleChange}
                    />
                </Content>
                <Content>
                    <Header>Description</Header>
                    <textarea
                        name='description'
                        id='1'
                        cols='30'
                        rows='10'
                        onChange={handleChange}
                    ></textarea>
                </Content>
            </WrapInfo>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 25%;
`;
const Title = styled.div`
    font-size: 22px;
    font-weight: bold;
`;
const WrapInfo = styled.div`
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1rem;

    input,
    textarea {
        background-color: #697c958a;
        color: white;
        border-radius: 4px;
        border: 1px solid black;
        padding: 5px 4px;
        font-size: 14px;
        font-weight: 500;
    }
`;
const Content = styled.div``;
const Header = styled.div`
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
    padding: 3px 0;
`;

export default EducationInfo;
