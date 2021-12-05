import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";
import { useInsert } from "../../constants/store";

const TemplateOne = ({ info, education, setInfo }) => {
    const [avatar, setAvatar] = useState();
    const [state, actions] = useInsert();

    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview);
        };
    }, [avatar, state.image]);

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0];

        file.preview = URL.createObjectURL(file);

        setAvatar(file);
        actions.setImage(file.preview);
    };

    return (
        <WrapperTemplate className='container'>
            <WrapperContent>
                <ContentLeft>
                    <WrapperAvatar>
                        <Image>
                            <input
                                className='file'
                                type='file'
                                onChange={handlePreviewAvatar}
                            />
                            <WrapperIMG>
                                {avatar && (
                                    <Img
                                        className='avatar'
                                        src={state.image}
                                        alt=''
                                    />
                                )}
                            </WrapperIMG>
                        </Image>
                        <Name>
                            <input
                                name='name'
                                className='name'
                                type='text'
                                placeholder='John Doe'
                                value={state.name}
                                onChange={actions.insert}
                            />
                            <input
                                className='job'
                                type='text'
                                placeholder='Web Developer Intern'
                                name='position'
                                value={state.position}
                                onChange={actions.insert}
                            />
                        </Name>
                    </WrapperAvatar>
                    <Description>
                        <Header>
                            <span>Education</span>
                        </Header>
                        <Content>
                            <div className='wrap-content'>
                                <div className='time'>
                                    <span className='time-range'>
                                        <input
                                            className='time'
                                            type='text'
                                            placeholder={education.time}
                                        />
                                    </span>
                                    <span>
                                        <input
                                            className='place'
                                            type='text'
                                            placeholder={education.school}
                                        />
                                    </span>
                                </div>
                                <div className='description'>
                                    <span>
                                        <input
                                            className='position'
                                            type='text'
                                            placeholder={"Computer Science"}
                                        />
                                    </span>

                                    <TextareaAutosize
                                        className='detail'
                                        type='text'
                                        placeholder={
                                            " langLorem ipsum potro anot lang Lorem ipsum potro anot langLorem ipsum potro anot lang Lorem ipsum potro anot lang"
                                        }
                                    />
                                </div>
                            </div>
                            <div className='wrap-content'>
                                <div className='time'>
                                    <span className='time-range'>
                                        <input
                                            className='time'
                                            type='text'
                                            placeholder={education.time}
                                        />
                                    </span>
                                    <span>
                                        <input
                                            className='place'
                                            type='text'
                                            placeholder={education.school}
                                        />
                                    </span>
                                </div>
                                <div className='description'>
                                    <span className='position'>
                                        <input
                                            className='position'
                                            type='text'
                                            placeholder={"Computer Science"}
                                        />
                                    </span>

                                    <TextareaAutosize
                                        className='detail'
                                        type='text'
                                        placeholder={
                                            "Ba anot anot lang Lorem ipsum potro anot langLorem ipsum potro anot lang Lorem ipsum potro anot lang"
                                        }
                                    />
                                </div>
                            </div>
                            <div className='wrap-content'>
                                <div className='time'>
                                    <span className='time-range'>
                                        <input
                                            className='time'
                                            type='text'
                                            placeholder={education.time}
                                        />
                                    </span>
                                    <span>
                                        <input
                                            className='place'
                                            type='text'
                                            placeholder={education.school}
                                        />
                                    </span>
                                </div>
                                <div className='description'>
                                    <span>
                                        <input
                                            className='position'
                                            type='text'
                                            placeholder={"Computer Science"}
                                        />
                                    </span>

                                    <TextareaAutosize
                                        className='detail'
                                        type='text'
                                        placeholder={
                                            "Lorum potro psum potro anot lang Lorem ipsum potro anot langLorem ipsum potro anot lang Lorem ipsum potro anot lang"
                                        }
                                    />
                                </div>
                            </div>
                        </Content>
                    </Description>
                    <Description>
                        <Header>
                            <span>Experience</span>
                        </Header>
                        <Content>
                            <div className='wrap-content'>
                                <div className='time'>
                                    <span className='time-range'>
                                        <input
                                            className='time'
                                            type='text'
                                            placeholder={education.time}
                                        />
                                    </span>
                                    <span>
                                        <input
                                            className='place'
                                            type='text'
                                            placeholder={education.school}
                                        />
                                    </span>
                                </div>
                                <div className='description'>
                                    <span>
                                        <input
                                            className='position'
                                            type='text'
                                            placeholder={"Computer Science"}
                                        />
                                    </span>

                                    <TextareaAutosize
                                        className='detail'
                                        type='text'
                                        placeholder={
                                            " langLorem ipsum potro anot lang Lorem ipsum potro anot langLorem ipsum potro anot lang Lorem ipsum potro anot lang"
                                        }
                                    />
                                </div>
                            </div>
                            <div className='wrap-content'>
                                <div className='time'>
                                    <span className='time-range'>
                                        <input
                                            className='time'
                                            type='text'
                                            placeholder={education.time}
                                        />
                                    </span>
                                    <span>
                                        <input
                                            className='place'
                                            type='text'
                                            placeholder={education.school}
                                        />
                                    </span>
                                </div>
                                <div className='description'>
                                    <span className='position'>
                                        <input
                                            className='position'
                                            type='text'
                                            placeholder={"Computer Science"}
                                        />
                                    </span>

                                    <TextareaAutosize
                                        className='detail'
                                        type='text'
                                        placeholder={
                                            "Ba anot anot lang Lorem ipsum potro anot langLorem ipsum potro anot lang Lorem ipsum potro anot lang"
                                        }
                                    />
                                </div>
                            </div>
                            <div className='wrap-content'>
                                <div className='time'>
                                    <span className='time-range'>
                                        <input
                                            className='time'
                                            type='text'
                                            placeholder={education.time}
                                        />
                                    </span>
                                    <span>
                                        <input
                                            className='place'
                                            type='text'
                                            placeholder={education.school}
                                        />
                                    </span>
                                </div>
                                <div className='description'>
                                    <span>
                                        <input
                                            className='position'
                                            type='text'
                                            placeholder={"Computer Science"}
                                        />
                                    </span>

                                    <TextareaAutosize
                                        className='detail'
                                        type='text'
                                        placeholder={
                                            "Lorum potro psum potro anot lang Lorem ipsum potro anot langLorem ipsum potro anot lang Lorem ipsum potro anot lang"
                                        }
                                    />
                                </div>
                            </div>
                        </Content>
                    </Description>
                    <div className='liner'></div>
                </ContentLeft>
                <ContentRight>
                    <Contact>
                        <div className='box-highlight'>Contact Me</div>
                        <div className='wrap-inform'>
                            <div className='icon'>
                                <img
                                    src='../images/icons/map-marker.svg'
                                    alt=''
                                />
                            </div>
                            <div className='content'>
                                <span className='title'>ADDRESS</span>
                                <TextareaAutosize
                                    name='address'
                                    className='address'
                                    type='text'
                                    placeholder='123 Wall Street'
                                    value={state.address}
                                    onChange={actions.insert}
                                />
                            </div>
                        </div>
                        <div className='wrap-inform'>
                            <div className='icon'>
                                <img src='../images/icons/globe.svg' alt='' />
                            </div>
                            <div className='content'>
                                <span className='title'>WEB</span>
                                <input
                                    className='address'
                                    name='address'
                                    type='text'
                                    placeholder='johndoe@gmail.com'
                                    value={state.mail}
                                    onChange={actions.insert}
                                />
                            </div>
                        </div>
                        <div className='wrap-inform'>
                            <div className='icon'>
                                <img src='../images/icons/phone.svg' alt='' />
                            </div>
                            <div className='content'>
                                <span className='title'>PHONE</span>
                                <input
                                    className='address'
                                    type='text'
                                    placeholder='0123456789'
                                    value={state.phone}
                                    onChange={actions.insert}
                                />
                            </div>
                        </div>
                        <div className='box-highlight'>Skill</div>
                        <SkillProgress>
                            <div className='skill'>
                                {" "}
                                <input
                                    type='text'
                                    placeholder='Skills'
                                    // value=''
                                />
                            </div>
                            <ProgressBar>
                                <div className='inner-progress'></div>
                            </ProgressBar>
                            <div className='skill'>
                                <input
                                    type='text'
                                    placeholder='Skills'
                                    // value=''
                                />
                            </div>
                            <ProgressBar>
                                <div className='inner-progress'></div>
                            </ProgressBar>
                            <div className='skill'>
                                <input
                                    type='text'
                                    placeholder='Skills'
                                    // value=''
                                />
                            </div>
                            <ProgressBar>
                                <div className='inner-progress'></div>
                            </ProgressBar>
                        </SkillProgress>
                    </Contact>
                    <SocialIcons>
                        <img
                            src='../images/icons/instagram-brands.svg'
                            alt=''
                        />
                        <img src='../images/icons/facebook-brands.svg' alt='' />
                        <img src='../images/icons/twitter-brands.svg' alt='' />
                    </SocialIcons>
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
    width: 100%;
    background-color: black;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    box-shadow: 9px 9px 16px #0000001f, -9px -9px 16px #0000001f;
`;
const ContentLeft = styled.div`
    width: 60%;
    background-color: white;
    textarea {
        width: 100%;
        font-weight: 300;
        line-height: 1.5;
    }
    .liner {
        height: 25px;
        width: 100%;
        background-color: orange;
    }
`;
const ContentRight = styled.div`
    width: 40%;
    padding-top: 25%;
    color: white;
`;
const WrapperAvatar = styled.div`
    width: fit-content;
    margin: 2rem;
    margin-left: 50%;
    position: relative;
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
        top: -30px;
        left: 35px;
    }
`;

const Img = styled.img`
    width: 148px;
    height: 148px;
    z-index: 3;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
`;
const WrapperIMG = styled.div`
    border-radius: 50%;
    overflow: hidden;
`;
const Name = styled.div`
    width: 100%;
    min-width: 430px;
    padding: 1rem 2rem 1rem 3rem;
    color: white;
    font-size: 28px;
    font-weight: bold;
    text-transform: uppercase;
    background-color: orange;

    position: absolute;
    left: 100%;
    top: 50%;
    transform: translate(-30px, -50%);
    z-index: 1;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 6px;

    input {
        width: 100%;
    }

    .name,
    .name::placeholder {
        width: 100%;
        min-width: 300px;
        padding: 0.5rem;
        color: black;
        font-size: 28px !important;
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

    .job,
    .job::placeholder {
        text-align: center;
        font-size: 22px !important;
        font-weight: normal;
        text-transform: capitalize;
        color: black;
    }
`;
const Description = styled.div`
    padding-right: 2rem;
`;
const Header = styled.div`
    width: 100%;
    font-size: 26px;
    font-weight: bold;
    text-align: right;
    text-transform: uppercase;
    letter-spacing: 3px;
    background-color: orange;
    padding: 0.5rem 1rem;
    box-shadow: 9px 9px 16px #00000038, -9px -9px 16px #0000001f;
`;
const Content = styled.div`
    padding: 10px 1.5rem;
    .wrap-content {
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        padding: 1rem 5px;
    }
    .time,
    .description {
        width: 50%;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        flex-direction: column;
    }
    .place {
        text-transform: capitalize;
    }
    .position {
        text-transform: uppercase;
        textarea {
            text-transform: uppercase;
            font-weight: 600;
        }
    }
    .detail,
    .detail::placeholder {
        width: 100%;
        font-size: 13px;
        line-height: 1;
    }
`;

const Contact = styled.div`
    padding: 0 3rem;
    .box-highlight {
        max-width: 100%;
        border: 4px solid orange;
        padding: 10px 1rem;
        text-transform: uppercase;
        font-size: 28px;
        text-align: center;
    }
    .wrap-inform {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 6px;
        padding: 1.5rem;
    }
    .icon {
        padding: 10px;
        img {
            width: 22px;
        }
    }
    .content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        gap: 5px;
        input,
        input::placeholder,
        textarea,
        textarea::placeholder {
            color: white;
        }
    }
    .title {
        text-transform: uppercase;
        font-weight: bold;
    }
`;
const SkillProgress = styled.div`
    padding: 2rem 0 1.5rem;
    .skill {
        padding: 10px 0;
    }
    input {
        max-width: 100%;
        color: white;
        text-transform: uppercase;
        font-weight: 600;
        font-size: 26px;
        text-align: center;
    }
    input::placeholder {
        color: #ffffffaa;
        font-size: 26px;
    }
`;
const ProgressBar = styled.div`
    padding: 0;
    width: 100%;
    border: 2px solid orange;
    height: 25px;
    overflow: hidden;

    .inner-progress {
        background-color: orange;
        width: 50%;
        height: 25px;
    }
`;
const SocialIcons = styled.div`
    margin-top: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    img {
        width: 22px;
    }
`;
export default TemplateOne;
