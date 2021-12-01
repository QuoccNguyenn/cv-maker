import React, { useState } from "react";
import styled from "styled-components";
import TemplateOne from "../../pages/Templates/TemplateOne";
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
        // {
        //     template: "3",
        // },
        // {
        //     template: "4",
        // },
    ];
    const RenderTemplate = ({ templateNum }) => {
        switch (templateNum) {
            case 1:
                return <TemplateOne info={info} education={education} />;
                break;
            case 2:
                return <TemplateTwo info={info} education={education} />;
                break;

            default:
                break;
        }
    };
    return (
        <Wrapper className='container'>
            <SelectionList>
                {templates.map((item, index) => (
                    <span onClick={() => setTemplate(index + 1)}>
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
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
    max-width: 250px;
    span {
        padding: 5px 10px;
        border-radius: 3px;
        border: 1px solid gray;
    }
`;
const WrapTemplate = styled.div``;

export default SwitchTemplate;