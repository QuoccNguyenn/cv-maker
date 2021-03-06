import React from "react";
import styled from "styled-components";

import InputAvatar from "../../components/InputAvatar";
import FieldInfo from "../../components/FieldInfo";
import { useInsert } from "../../constants/store";

const TemplateThree = () => {
    const [state, actions] = useInsert();
    return (
        <WrapperTemplate className='container'>
            <WrapperContent>
                <Header>
                    <HeaderInfo>
                        <InputName
                            type='text'
                            name='name'
                            placeholder='Fullname'
                            value={state.name}
                            onChange={actions.insert}
                        />
                        <InputPosition
                            type='text'
                            name='position'
                            placeholder='Position'
                            value={state.position}
                            onChange={actions.insert}
                        />
                    </HeaderInfo>

                    <HeaderAvatar>
                        <InputAvatar />
                    </HeaderAvatar>
                </Header>

                <Content>
                    <LeftContent>
                        <FieldInfo
                            title='Contact Information'
                            fields={["phone", "facebook", "mail", "github"]}
                            types={["text", "text", "text", "text"]}
                        />
                        <FieldInfo
                            title='Education'
                            fields={["2018-2022"]}
                            types={["textarea"]}
                        />
                        <FieldInfo
                            title='Skills'
                            fields={[
                                "Business Process Improvement",
                                "Vendor Management",
                                "Project Scheduling",
                                "Sales Analysis",
                            ]}
                            types={[
                                "textarea",
                                "textarea",
                                "textarea",
                                "textarea",
                            ]}
                        />
                        <FieldInfo
                            title='Summary'
                            fields={["Conclusion"]}
                            types={["textarea"]}
                        />
                    </LeftContent>

                    <RightContent>
                        <FieldInfo
                            title='Experience'
                            fields={[
                                "2018-2022 - present",
                                "2004-09 - 2006-12",
                            ]}
                            types={["textarea", "textarea"]}
                        />
                        <FieldInfo
                            title='Certifications'
                            fields={["2015-05", "2014-04"]}
                            types={["text", "text"]}
                        />
                    </RightContent>
                </Content>
            </WrapperContent>
        </WrapperTemplate>
    );
};

const WrapperTemplate = styled.div`
    height: auto !important;
`;
const WrapperContent = styled.div`
    width: 100%;
    background-color: #e2f0ee;
`;
const Header = styled.div`
    height: 136px;
    background-color: #2dbcad;
    display: flex;
`;
const HeaderInfo = styled.div`
    padding: 0 16px;
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;
const HeaderAvatar = styled.div`
    flex: 1;
    padding: 4px;
`;
const InputName = styled.input`
    font-size: 28px;
    font-weight: 550;
    text-transform: uppercase;
    color: #fff;
    padding: 4px 16px;
    border-radius: 6px;
    outline: none;
    border: none;
    background-color: transparent;

    &:focus {
        background-color: #fff;
        color: #333;
    }
`;
const InputPosition = styled.input`
    font-size: 16px;
    color: #fff;
    padding: 2px 16px;
    border-radius: 4px;
    outline: none;
    border: none;
    background-color: transparent;

    &:focus {
        background-color: #fff;
        color: #333;
    }
`;
const Content = styled.div`
    display: flex;
`;
const LeftContent = styled.div`
    flex: 1;
`;
const RightContent = styled.div`
    flex: 1;
`;

export default TemplateThree;
