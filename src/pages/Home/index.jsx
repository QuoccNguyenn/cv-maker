import React, { useState } from "react";
import styled from "styled-components";
import InformationField from "../../components/InformationField";
import TemplateOne from "../Templates/TemplateOne";

const Home = () => {
    const [info, setInfo] = useState({
        name: "Tran Gia Bao",
        gender: "Male",
        position: "Web Developer Internship",
        address: "17 Nguyen Huu Tho, Phuong Tan Phong, Quan 7",
        mail: "abc@abc",
        phone: "012123987129",
    });
    const [education, setEducation] = useState({
        school: "Tran Hung Dao High School",
        time: "2015-2018",
        description:
            "Lorem ipsum potro anot lang Lorem ipsum potro anot langLorem ipsum potro anot lang Lorem ipsum potro anot langLorem ipsum potro anot lang Lorem ipsum potro anot lang",
    });
    return (
        <HomeWrapper>
            <InformationField
                info={info}
                setInfo={setInfo}
                education={education}
                setEducation={setEducation}
            />
            <TemplateOne info={info} education={education} />
        </HomeWrapper>
    );
};

const HomeWrapper = styled.section`
    margin-top: 4rem;
    width: 100%;
`;

export default Home;
