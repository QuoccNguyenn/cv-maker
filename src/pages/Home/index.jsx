import React, { useState } from "react";
import styled from "styled-components";
import SwitchTemplate from "../../components/TemplateSwitch";
// import InformationField from "../../components/InformationField";
// import TemplateOne from "../Templates/TemplateOne";
// import TemplateTwo from "../Templates/TemplateTwo";

const Home = () => {
    // const [template, setTemplate] = useState(1);
    const [info, setInfo] = useState({
        name: "",
        birthday: "2000",
        gender: "Male",
        position: "Web Developer Internship",
        address: "17 Nguyen Huu Tho, Phuong Tan Phong, Quan 7",
        mail: "abc@abc",
        phone: "012123987129",
    });
    const [education] = useState({
        school: "Ton Duc Thang University",
        time: "2018-2022",
        description:
            "Lorem ipsum potro anot lang Lorem ipsum potro anot langLorem ipsum potro anot lang Lorem ipsum potro anot langLorem ipsum potro anot lang Lorem ipsum potro anot lang",
    });
    console.log("name", info.name);
    return (
        <HomeWrapper>
            <SwitchTemplate
                info={info}
                setInfo={setInfo}
                education={education}
            />
        </HomeWrapper>
    );
};

const HomeWrapper = styled.section`
    margin-top: 4rem;
    width: 100%;
`;

export default Home;
