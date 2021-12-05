import React from "react";
import styled from "styled-components";

const DetailInform = ({ info, setInfo }) => {
    return (
        <Wrapper>
            <Title>Personal Details</Title>
            <WrapInfo>
                <Header>Full name</Header>
                <input
                    type='text'
                    value={info.name}
                    name='name'
                    onChange={setInfo}
                />
                <Header>Birthday</Header>
                <input
                    type='text'
                    value={info.birthday}
                    name='birthday'
                    onChange={setInfo}
                />
                <Header>Gender</Header>
                <input
                    type='text'
                    value={info.gender}
                    name='gender'
                    onChange={setInfo}
                />
                <Header>Position</Header>
                <input
                    type='text'
                    value={info.position}
                    name='position'
                    onChange={setInfo}
                />
                <Header>Address</Header>
                <input
                    type='text'
                    value={info.address}
                    name='address'
                    onChange={setInfo}
                />
                <Header>Mail</Header>
                <input
                    type='text'
                    value={info.mail}
                    name='mail'
                    onChange={setInfo}
                />
                <Header>Phone</Header>
                <input
                    type='text'
                    value={info.phone}
                    name='phone'
                    onChange={setInfo}
                />
            </WrapInfo>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    
`;
const Title = styled.div`
    font-size: 22px;
    font-weight: bold;
    
`;
const WrapInfo = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
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
