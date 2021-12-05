import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";
import { useInsert } from "../../constants/store";

const TemplateTwo = ({ info, setInfo, education }) => {
    const [avatar2, setAvatar2] = useState();
    const [state, actions] = useInsert();

    useEffect(() => {
        return () => {
            avatar2 && URL.revokeObjectURL(avatar2.preview);
        };
    }, [avatar2, state.image]);

    const handlePreviewAvatar2 = (e) => {
        const file = e.target.files[0];

        file.preview = URL.createObjectURL(file);

        setAvatar2(file);
        actions.setImage(file.preview);
    };

    return (
        <WrapperTemplate className='container'>
            <WrapperContent>
                <ContentLeft>
                    <WrapperAvatar>
                        <Name>
                            <input
                                className='name'
                                name='name'
                                type='text'
                                value={state.name}
                                placeholder='John Doe'
                                onChange={actions.insert}
                            />
                            <input
                                className='job'
                                name='position'
                                type='text'
                                placeholder='Web Developer Intern'
                                value={state.position}
                                onChange={actions.insert}
                            />
                        </Name>
                        <Image>
                            <input
                                className='file'
                                type='file'
                                onChange={handlePreviewAvatar2}
                            />
                            <WrapperIMG>
                                {state.image && (
                                    <Img
                                        className='avatar'
                                        src={state.image}
                                        alt=''
                                    />
                                )}
                            </WrapperIMG>
                        </Image>
                    </WrapperAvatar>
                    {/* contact */}
                    <Contact>
                        <div className='box-highlight'>Contact infomation</div>
                        <div className='wrap-inform'>
                            <ul>
                                <li className='birthday'>
                                    <i className='fas fa-calendar-week'></i>{" "}
                                    <input
                                        name='birthday'
                                        className='birthday'
                                        type='text'
                                        placeholder={info.birthday}
                                        onChange={actions.insert}
                                    />
                                </li>
                                <li className='gender'>
                                    <i className='fas fa-male'></i>
                                    <input
                                        className='gender'
                                        name='gender'
                                        type='text'
                                        placeholder='Male/Female'
                                        value={state.gender}
                                        onChange={actions.insert}
                                    />
                                </li>
                                <li className='phone'>
                                    <i className='fas fa-mobile-alt'></i>{" "}
                                    <input
                                        className='phone'
                                        type='text'
                                        placeholder='0123456789'
                                        value={state.phone}
                                        onChange={actions.insert}
                                    />
                                </li>
                                <li className='mail'>
                                    <i className='far fa-envelope'></i>
                                    <input
                                        className='mail'
                                        type='text'
                                        placeholder='johndoe@gmail.com'
                                        value={state.mail}
                                        onChange={actions.insert}
                                    />
                                </li>
                                <li className='address'>
                                    <i className='fas fa-map-marked-alt'></i>
                                    <TextareaAutosize
                                        className='address'
                                        name='address'
                                        type='text'
                                        placeholder='123 Wall Street'
                                        value={state.address}
                                        onChange={actions.insert}
                                        rows='2'
                                    />
                                </li>
                                <li className='facebook'>
                                    <i className='fab fa-facebook-f'></i>{" "}
                                    <input
                                        className='facebook'
                                        name='facebook'
                                        type='text'
                                        placeholder='facebook.com/johndoe'
                                        value={state.facebook}
                                        onChange={actions.insert}
                                    />
                                </li>
                                <li className='github'>
                                    <i className='fab fa-github'></i>{" "}
                                    <input
                                        className='github'
                                        name='github'
                                        type='text'
                                        placeholder='github.com/johndoe'
                                        value={state.github}
                                        onChange={actions.insert}
                                    />
                                </li>
                            </ul>
                        </div>
                    </Contact>
                    <hr />
                    {/* skill */}
                    <div className='box-highlight'>Skill</div>
                    <SkillProgress>
                        <div className='skill'>HTML/CSS</div>
                        <ProgressBar>
                            <div className='inner-progress'></div>
                        </ProgressBar>
                        <div className='skill'>HTML/CSS</div>
                        <ProgressBar>
                            <div className='inner-progress'></div>
                        </ProgressBar>
                        <div className='skill'>HTML/CSS</div>
                        <ProgressBar>
                            <div className='inner-progress'></div>
                        </ProgressBar>
                    </SkillProgress>
                    <hr />
                    {/* sở thích */}
                    <Interests>
                        <div className='box-highlight'>Interests</div>
                        <TextareaAutosize
                            className='Interests'
                            type='text'
                            name='interest'
                            placeholder='I like soccer, music..'
                            value={state.interest}
                            onChange={actions.insert}
                        />
                    </Interests>
                </ContentLeft>

                <ContentRight>
                    <Description>
                        <div className='box-highlight'>Objective</div>
                        <Content>
                            <TextareaAutosize
                                className='Objective'
                                type='text'
                                placeholder={
                                    "Take advantages of sales skills & experience and understanding of market to become a professional Sales Staff and bring a lot value to Customers. From that, I will contribute to development of TOPCV Company."
                                }
                            />
                        </Content>
                    </Description>
                    <hr />
                    <Description>
                        <div className='box-highlight'>Education</div>
                        <Content>
                            <div className='wrap-content'>
                                <input
                                    className='titles'
                                    type='text'
                                    placeholder={education.school}
                                />
                                <div className='time'>
                                    <input
                                        className='time-range'
                                        type='text'
                                        placeholder={education.time}
                                    />
                                </div>
                            </div>
                            <TextareaAutosize
                                className='description'
                                type='text'
                                placeholder={education.description}
                                // placeholder={"as"}
                            />
                        </Content>
                    </Description>
                    <hr />
                    <Description>
                        <div className='box-highlight'>Work experience</div>
                        <Content>
                            <div className='wrap-content'>
                                <input
                                    className='titles'
                                    type='text'
                                    placeholder={"Sales Staff"}
                                />
                                <div className='time'>
                                    <input
                                        className='time-range'
                                        type='text'
                                        placeholder={" June 2014 - Present"}
                                    />
                                </div>
                            </div>
                            <TextareaAutosize
                                className='description'
                                type='text'
                                placeholder={education.description}
                            />
                        </Content>
                        <Content>
                            <div className='wrap-content'>
                                <input
                                    className='titles'
                                    type='text'
                                    placeholder={"Sales Staff"}
                                />
                                <div className='time'>
                                    <input
                                        className='time-range'
                                        type='text'
                                        placeholder={" June 2014 - Present"}
                                    />
                                </div>
                            </div>
                            <TextareaAutosize
                                className='description'
                                type='text'
                                placeholder={education.description}
                            />
                        </Content>
                    </Description>
                    <hr />

                    <hr />
                    <Description>
                        <div className='box-highlight'>Honors & Awards</div>
                        <Content>
                            <div className='description awards'>
                                {/* <strong>2013-2014 :</strong> Scholarship in 2nd
                                semester 2012-2013 and 1st semester 2013-2014 */}
                                <strong>
                                    <input
                                        className='timeYear'
                                        type='text'
                                        placeholder={"2013 -2014"}
                                    />
                                </strong>
                                <TextareaAutosize
                                    className='descriptionStyle'
                                    type='text'
                                    placeholder={education.description}
                                />
                            </div>
                        </Content>
                    </Description>
                    <hr />
                    <Description>
                        <div className='box-highlight'>Certifications</div>
                        <Content>
                            <div className='description awards'>
                                {/* <strong>2013-2014 :</strong> Scholarship in 2nd
                                semester 2012-2013 and 1st semester 2013-2014 */}
                                <strong>
                                    <input
                                        className='timeYear'
                                        type='text'
                                        placeholder={"2013 -2014"}
                                    />
                                </strong>
                                <TextareaAutosize
                                    className='descriptionStyle'
                                    type='text'
                                    placeholder={
                                        "TOEIC Certificate with score 800 issued by TDT"
                                    }
                                />
                            </div>
                        </Content>
                    </Description>
                </ContentRight>
            </WrapperContent>
        </WrapperTemplate>
    );
};

const WrapperTemplate = styled.div`
    height: auto !important;
    input {
        font-size: 1rem;
        background: none;
        border: none;
    }
    textarea {
        font-size: 1rem;
        background: none;
        border: none;
    }
    input::placeholder,
    textarea::placeholder {
        font-size: 1rem;
        color: black;
    }
`;
const WrapperContent = styled.div`
    font-family: "Roboto", sans-serif !important;
    padding: 20px;
    width: 100%;
    height: auto;
    /* min-height: 100vh; */

    background-color: white;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    box-shadow: 9px 9px 16px #0000001f, -9px -9px 16px #0000001f;
    input {
        width: 65%;
    }
    .box-highlight {
        max-width: 100%;
        padding: 10px 1rem;
        color: orange;
        font-size: 1.2rem;
        text-align: left;
        font-weight: bold;
    }
    hr {
        display: block;
        height: 1px;
        border: 0;
        border-top: 1px solid orange;
        margin: auto;
        width: 80%;
    }
`;
//left
const ContentLeft = styled.div`
    width: 35%;
    min-height: 100vh;
    background-color: #fffaf2;
`;
const WrapperAvatar = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
`;
const Contact = styled.div`
    ul {
        padding-left: 18px;
        list-style: none;
        display: flex;
        flex-direction: column;

        li {
            margin: 2px 0;
            display: flex;
            gap: 5px;
            flex-direction: row;
            flex-wrap: nowrap;
            align-items: center;
            justify-content: flex-start;
            input {
                width: auto;
                font-size: 0.8em;
            }
            textarea {
                width: 200px;
            }
            i {
                display: inline-block;
                color: orange;
                width: 2rem;
                height: 1rem;
            }
            a {
                padding: 0px;
                margin: 0px;
                text-decoration: none;
                color: black;
            }
        }
    }
`;

const SkillProgress = styled.div`
    margin: 1rem 1.5rem 1.5rem;
    display: flex;
    flex-direction: column;
    justify-items: center;
    text-align: center;
    align-items: flex-start;
    .skill {
        text-transform: uppercase;
        font-weight: 600;
        font-size: 18px;
        text-align: center;
        padding: 10px 0;
    }
`;
const ProgressBar = styled.div`
    padding: 0;
    width: 80%;
    border: 2px solid orange;
    height: 20px;
    overflow: hidden;

    .inner-progress {
        border-radius: 0 5px 13px 0;
        background-color: orange;
        width: 50%;
        height: 25px;
    }
`;
const Interests = styled.div`
    padding: 0 1.5rem;
    .box-highlight {
        padding: 0;
    }
    textarea {
        /* margin-left: 1.5rem; */
        padding: 0;
        font-size: 16px;
        width: 100%;
    }
`;
const Name = styled.div`
    .name {
        width: 100%;
        min-width: 300px;
        padding: 1rem;
        color: orange;
        font-size: 32px !important;
        font-weight: bold !important;
        text-transform: uppercase;
        background-color: none;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 6px;
    }

    .job {
        text-align: center;
        font-size: 24px !important;
        font-weight: normal;
        text-transform: capitalize;
        color: orange;
    }
    .job::placeholder,
    .name::placeholder {
        font-size: 24px !important;
        color: orange;
    }
`;
const Image = styled.div`
    width: 160px;
    height: 160px;
    background-color: orange;
    border-radius: 50%;
    border: 6px solid black;
    /* overflow: hidden; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
    input {
        position: absolute;
        bottom: -35px;
        left: 25px;
    }
`;
const WrapperIMG = styled.div`
    border-radius: 50%;
    overflow: hidden;
`;
const Img = styled.img`
    width: 148px;
    height: 148px;
    z-index: 3;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
`;
// right
const ContentRight = styled.div`
    width: 64%;
    min-height: 100vh;
    background-color: #fffaf2;
`;

const Description = styled.div`
    width: auto;
    margin: 20px 0px;
`;

const Content = styled.div`
    padding-left: 1.1rem;
    margin: 10px 0px;
    .Objective {
        width: 90%;
        font-size: 1em;
    }
    strong {
        width: 30%;
        .timeYear {
            font-weight: bold;
            width: 100%;
        }
    }

    .descriptionStyle {
        width: 78%;
    }
    .wrap-content {
        width: 98%;
        display: flex;
        justify-content: space-between;
        .titles {
            font-weight: bold;
            font-size: 16px;
        }

        .time {
            margin-top: 10px;
            font-style: italic;
            color: #a8a8a8;
            .time-range,
            .time-range::placeholder {
                text-align: right;
                font-style: italic;
                color: #a8a8a8;
                font-size: 1em;
            }
        }
    }
    .description {
        padding: 5px;
        margin: 5px;
        width: 92%;
        height: auto;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        flex-direction: column;
        .p {
            padding: 0;
            margin: 0 !important;
        }
    }
    .awards,
    .certifications {
        flex-direction: row;
    }
`;

export default TemplateTwo;
