import React from "react";
import styled from "styled-components";

const DetailInform = ({ info, setInfo }) => {
    const handleChange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value });
    };
    return (
        <Wrapper>
            <Title>Personal Details</Title>
            <WrapInfo>
                <Header>Full name</Header>
                <input
                    type='text'
                    value={info.name}
                    name='name'
                    onChange={handleChange}
                />
                <Header>Gender</Header>
                <input
                    type='text'
                    value={info.gender}
                    name='gender'
                    onChange={handleChange}
                />
                <Header>Position</Header>
                <input
                    type='text'
                    value={info.position}
                    name='position'
                    onChange={handleChange}
                />
                <Header>Address</Header>
                <input
                    type='text'
                    value={info.address}
                    name='address'
                    onChange={handleChange}
                />
                <Header>Mail</Header>
                <input
                    type='text'
                    value={info.mail}
                    name='mail'
                    onChange={handleChange}
                />
                <Header>Phone</Header>
                <input
                    type='text'
                    value={info.phone}
                    name='phone'
                    onChange={handleChange}
                />
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

    input {
        background-color: #697c958a;
        color: white;
        width: 100%;
        border-radius: 4px;
        border: 1px solid black;
        padding: 5px 4px;
        font-size: 14px;
        font-weight: 500;
    }
`;
const Header = styled.div`
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
    padding: 3px 0;
`;

export default DetailInform;
