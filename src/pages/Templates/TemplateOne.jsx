import React from 'react'
import styled from 'styled-components'

const TemplateOne = () => {
    return (
        <WrapperTemplate className="container">
            <WrapperContent>
                <ContentLeft>
                    <WrapperAvatar>
                        <Image>
                            <img src="../images/avatar/Untitled-2.png" alt="" />
                        </Image>
                        <Name>
                            Andrew Johnson{' '}
                            <span className="job">
                                Web Developer Internship
                            </span>
                        </Name>
                    </WrapperAvatar>
                    <Description>
                        <Header>
                            <span>Education</span>
                        </Header>
                        <Content>
                            <div className="wrap-content">
                                <div className="time">
                                    <span className="time-range">
                                        2018-2022
                                    </span>
                                    <span className="place">
                                        Ton Duc Thang University
                                    </span>
                                </div>
                                <div className="description">
                                    <span className="position">
                                        <textarea
                                            name=""
                                            id=""
                                            cols="30"
                                            rows="1"
                                            className="input"
                                        ></textarea>
                                    </span>
                                    <textarea
                                        name=""
                                        id=""
                                        cols="30"
                                        rows="6"
                                        className="input"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="wrap-content">
                                <div className="time">
                                    <span className="time-range">
                                        2018-2022
                                    </span>
                                    <span className="place">
                                        Ton Duc Thang University
                                    </span>
                                </div>
                                <div className="description">
                                    <span className="position">
                                        Computer Science
                                    </span>
                                    <span className="detail">
                                        Lorem ipsum potro anot lang Lorem ipsum
                                        potro anot langLorem ipsum potro anot
                                        lang Lorem ipsum potro anot langLorem
                                        ipsum potro anot lang Lorem ipsum potro
                                        anot lang
                                    </span>
                                </div>
                            </div>
                            <div className="wrap-content">
                                <div className="time">
                                    <span className="time-range">
                                        2018-2022
                                    </span>
                                    <span className="place">
                                        Ton Duc Thang University
                                    </span>
                                </div>
                                <div className="description">
                                    <span className="position">
                                        Computer Science
                                    </span>
                                    <span className="detail">
                                        Lorem ipsum potro anot lang Lorem ipsum
                                        potro anot langLorem ipsum potro anot
                                        lang Lorem ipsum potro anot langLorem
                                        ipsum potro anot lang Lorem ipsum potro
                                        anot lang
                                    </span>
                                </div>
                            </div>
                        </Content>
                    </Description>
                    <Description>
                        <Header>
                            <span>Experience</span>
                        </Header>
                        <Content>
                            <div className="wrap-content">
                                <div className="time">
                                    <span className="time-range">
                                        2018-2022
                                    </span>
                                    <span className="place">
                                        Ton Duc Thang University
                                    </span>
                                </div>
                                <div className="description">
                                    <span className="position">
                                        Computer Science
                                    </span>
                                    <span className="detail">
                                        Lorem ipsum potro anot lang Lorem ipsum
                                        potro anot langLorem ipsum potro anot
                                        lang Lorem ipsum potro anot langLorem
                                        ipsum potro anot lang Lorem ipsum potro
                                        anot lang
                                    </span>
                                </div>
                            </div>
                            <div className="wrap-content">
                                <div className="time">
                                    <span className="time-range">
                                        2018-2022
                                    </span>
                                    <span className="place">
                                        Ton Duc Thang University
                                    </span>
                                </div>
                                <div className="description">
                                    <span className="position">
                                        Computer Science
                                    </span>
                                    <span className="detail">
                                        Lorem ipsum potro anot lang Lorem ipsum
                                        potro anot langLorem ipsum potro anot
                                        lang Lorem ipsum potro anot langLorem
                                        ipsum potro anot lang Lorem ipsum potro
                                        anot lang
                                    </span>
                                </div>
                            </div>
                            <div className="wrap-content">
                                <div className="time">
                                    <span className="time-range">
                                        2018-2022
                                    </span>
                                    <span className="place">
                                        Ton Duc Thang University
                                    </span>
                                </div>
                                <div className="description">
                                    <span className="position">
                                        Computer Science
                                    </span>
                                    <span className="detail">
                                        Lorem ipsum potro anot lang Lorem ipsum
                                        potro anot langLorem ipsum potro anot
                                        lang Lorem ipsum potro anot langLorem
                                        ipsum potro anot lang Lorem ipsum potro
                                        anot lang
                                    </span>
                                </div>
                            </div>
                        </Content>
                    </Description>
                    <div className="liner"></div>
                </ContentLeft>
                <ContentRight>
                    <Contact>
                        <div className="box-highlight">Contact Me</div>
                        <div className="wrap-inform">
                            <div className="icon">
                                <img
                                    src="../images/icons/map-marker.svg"
                                    alt=""
                                />
                            </div>
                            <div className="content">
                                <span className="title">ADDRESS</span>
                                <span>
                                    17 Nguyen Huu Tho, Phuong Tan Phong, Quan 7
                                </span>
                            </div>
                        </div>
                        <div className="wrap-inform">
                            <div className="icon">
                                <img src="../images/icons/globe.svg" alt="" />
                            </div>
                            <div className="content">
                                <span className="title">WEB</span>
                                <span>
                                    17 Nguyen Huu Tho, Phuong Tan Phong, Quan 7
                                </span>
                            </div>
                        </div>
                        <div className="wrap-inform">
                            <div className="icon">
                                <img src="../images/icons/phone.svg" alt="" />
                            </div>
                            <div className="content">
                                <span className="title">PHONE</span>
                                <span>0000000000</span>
                            </div>
                        </div>
                        <div className="box-highlight">Skill</div>
                        <SkillProgress>
                            <div className="skill">HTML/CSS</div>
                            <ProgressBar>
                                <div className="inner-progress"></div>
                            </ProgressBar>
                            <div className="skill">HTML/CSS</div>
                            <ProgressBar>
                                <div className="inner-progress"></div>
                            </ProgressBar>
                            <div className="skill">HTML/CSS</div>
                            <ProgressBar>
                                <div className="inner-progress"></div>
                            </ProgressBar>
                        </SkillProgress>
                    </Contact>
                    <SocialIcons>
                        <img
                            src="../images/icons/instagram-brands.svg"
                            alt=""
                        />
                        <img src="../images/icons/facebook-brands.svg" alt="" />
                        <img src="../images/icons/twitter-brands.svg" alt="" />
                    </SocialIcons>
                </ContentRight>
            </WrapperContent>
        </WrapperTemplate>
    )
}

const WrapperTemplate = styled.div``
const WrapperContent = styled.div`
    width: 100%;
    background-color: black;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    box-shadow: 9px 9px 16px #0000001f, -9px -9px 16px #0000001f;
`
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
`
const ContentRight = styled.div`
    width: 40%;
    padding-top: 25%;
    color: white;
`
const WrapperAvatar = styled.div`
    width: fit-content;
    margin: 2rem;
    margin-left: 50%;
    position: relative;
`
const Image = styled.div`
    width: 160px;
    height: 160px;
    background-color: orange;
    border-radius: 50%;
    border: 6px solid black;

    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
    z-index: 2;
    img {
        width: 65%;
        max-width: 160px;
    }
`
const Name = styled.div`
    width: 100%;
    min-width: 360px;
    padding: 1rem 2rem 1rem 3rem;
    color: white;
    font-size: 32px;
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

    span {
        font-size: 24px;
        font-weight: normal;
        text-transform: capitalize;
    }
`
const Description = styled.div`
    padding-right: 2rem;
`
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
`
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
    .detail {
        font-size: 13px;
    }
`

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
    }
    .title {
        text-transform: uppercase;
        font-weight: bold;
    }
`
const SkillProgress = styled.div`
    padding: 2rem 0 1.5rem;
    .skill {
        text-transform: uppercase;
        font-weight: 600;
        font-size: 26px;
        text-align: center;
        padding: 10px 0;
    }
`
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
`
const SocialIcons = styled.div`
    margin-top: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    img {
        width: 22px;
    }
`
export default TemplateOne
