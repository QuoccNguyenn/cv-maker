import React, { useState } from "react";
import styled from "styled-components";
import TemplateOne from "../../pages/Templates/TemplateOne";
import TemplateThree from "../../pages/Templates/TemplateThree";
import TemplateTwo from "../../pages/Templates/TemplateTwo";

const SwitchTemplate = ({ info, education }) => {
    const [template, setTemplate] = useState(1);
    const templates = [
        {
            template: "1",
        },
        {
            template: "2",
        },
        {
            template: "3",
        },
        // {
        //     template: "4",
        // },
    ];
    const RenderTemplate = ({ templateNum }) => {
        switch (templateNum) {
            case 1:
                return <TemplateOne info={info} education={education} />;
            case 2:
                return <TemplateTwo info={info} education={education} />;
            case 3:
                return <TemplateThree />;

            default:
                return <TemplateOne info={info} education={education} />;
        }
    };
    return (
        <Wrapper className='container'>
            <SelectionList>
                {templates.map((item, index) => (
                    <span onClick={() => setTemplate(index + 1)} key={index}>
                        {index + 1}
                    </span>
                ))}
            </SelectionList>
            <WrapTemplate>
                <RenderTemplate templateNum={template} />
            </WrapTemplate>
        </Wrapper>
    );
};

const Wrapper = styled.div``;
const SelectionList = styled.div`
    background-color: #595959;

    padding: 1rem 2rem;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 3px;
    span {
        color: white;
        font-weight: 600;
        padding: 5px 10px;
        border-radius: 3px;
        border: 1px solid white;
        cursor: pointer;
    }
`;
const WrapTemplate = styled.div``;

export default SwitchTemplate;
