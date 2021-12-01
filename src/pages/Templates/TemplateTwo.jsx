import React from "react";
import styled from "styled-components";

const TemplateTwo = ({ info, education }) => {
    return (
        <WrapperTemplate className='container'>
            <WrapperContent>
                <ContentLeft>
                    <WrapperAvatar>
                        <Name>
                            {info.name} <p className='job'>{info.position}</p>
                        </Name>
                        <Image>
                            <div>
                                <img
                                    src='../images/avatar/Untitled-2.png'
                                    alt=''
                                />
                            </div>
                        </Image>
                    </WrapperAvatar>
                    {/* contact */}
                    <Contact>
                        <div className='box-highlight'>Contact infomation</div>
                        <div className='wrap-inform'>
                            <ul>
                                <li className='birthday'>
                                    <i class='fas fa-calendar-week'></i>{" "}
                                    17/3/2000
                                </li>
                                <li className='sex'>
                                    <i class='fas fa-male'></i> {info.gender}
                                </li>
                                <li className='phone'>
                                    <i class='fas fa-mobile-alt'></i>{" "}
                                    {info.phone}
                                </li>
                                <li className='mail'>
                                    <i class='far fa-envelope'></i> {info.mail}
                                </li>
                                <li className='address'>
                                    <i class='fas fa-map-marked-alt'></i> 52/13
                                    {info.phone}
                                </li>
                                <li className='facebook'>
                                    <i class='fab fa-facebook-f'></i>{" "}
                                    <a href='>https://fb.com'>
                                        https://fb.com{" "}
                                    </a>{" "}
                                </li>
                                <li className='github'>
                                    <i class='fab fa-github'></i>{" "}
                                    <a href='https://github.com'>
                                        https://github.com{" "}
                                    </a>{" "}
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
                        <p>I like soccer, music..</p>
                    </Interests>
                </ContentLeft>

                <ContentRight>
                    <Description>
                        <div className='box-highlight'>Objective</div>
                        <Content>
                            <div className='description'>
                                Take advantages of sales skills & experience and
                                understanding of market to become a professional
                                Sales Staff and bring a lot value to Customers.
                                From that, I will contribute to development of
                                TOPCV Company.
                            </div>
                        </Content>
                    </Description>
                    <hr />
                    <Description>
                        <div className='box-highlight'>Education</div>
                        <Content>
                            <div className='wrap-content'>
                                <div className='titles'>{education.school}</div>
                                <div className='time'>
                                    <span className='time-range'>
                                        {education.time}
                                    </span>
                                </div>
                            </div>
                            <div className='description'>
                                {education.description}
                            </div>
                        </Content>
                    </Description>
                    <hr />
                    <Description>
                        <div className='box-highlight'>Work experience</div>
                        <Content>
                            <div className='wrap-content'>
                                <div className='titles'>Sales Staff</div>
                                <div className='time'>
                                    <span className='time-range'>
                                        June 2014 - Present
                                    </span>
                                </div>
                            </div>
                            <div className='description'>
                                Main responsibilities: - Write and upload
                                product advertising post via Facebook, Forum...
                                - Introduce, consult products and answer
                                customers' queries via phone and email. - Assist
                                to control goods in and out - Attend Sales Skill
                                Course in the Company
                            </div>
                        </Content>
                        <Content>
                            <div className='wrap-content'>
                                <div className='titles'>Sales Staff</div>
                                <div className='time'>
                                    <span className='time-range'>
                                        June 2014 - Present
                                    </span>
                                </div>
                            </div>
                            <div className='description'>
                                Main responsibilities: - Write and upload
                                product advertising post via Facebook, Forum...
                                - Introduce, consult products and answer
                                customers' queries via phone and email. - Assist
                                to control goods in and out - Attend Sales Skill
                                Course in the Company
                            </div>
                        </Content>
                    </Description>
                    <hr />
                    <Description>
                        <div className='box-highlight'>Activities</div>
                        <Content>
                            <div className='wrap-content'>
                                <div className='titles'>
                                    Member of US Ambassador
                                </div>
                                <div className='time'>
                                    <span className='time-range'>
                                        Jan 2014- Feb 2014
                                    </span>
                                </div>
                            </div>
                            <div className='description'>
                                - Organize monthly events, network with US
                                alumni <br />- Share how to hunt scholarships
                                and US student's life experiences to all
                                students who have received offers from US
                                universities
                            </div>
                        </Content>
                    </Description>
                    <hr />
                    <Description>
                        <div className='box-highlight'>Honors & Awards</div>
                        <Content>
                            <div className='description awards'>
                                <strong>2013-2014 :</strong> Scholarship in 2nd
                                semester 2012-2013 and 1st semester 2013-2014
                            </div>
                        </Content>
                    </Description>
                    <hr />
                    <Description>
                        <div className='box-highlight'>Certifications</div>
                        <Content>
                            <div className='description certifications'>
                                <strong>2014 :</strong> TOEIC Certificate with
                                score 800 issued by TDT
                            </div>
                        </Content>
                    </Description>
                    <hr />
                </ContentRight>
            </WrapperContent>
        </WrapperTemplate>
    );
};
const WrapperTemplate = styled.div``;
const WrapperContent = styled.div`
    font-family: "Roboto", sans-serif !important;
    padding: 20px;
    width: 100%;
    min-height: 100vh;

    background-color: white;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    box-shadow: 9px 9px 16px #0000001f, -9px -9px 16px #0000001f;
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
    height: 100vh;
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
            display: block;
            margin: 2px 0;
            i {
                display: inline-block;
                color: orange;
                width: 2rem;
                height: 1rem;
            }
            a {
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
    p {
        padding-left: 1.5rem;
    }
`;
const Name = styled.div`
    width: 100%;
    min-width: 360px;
    padding: 1rem 2rem 1rem 3rem;
    color: orange;
    font-size: 32px;
    font-weight: bold;
    text-transform: uppercase;
    background-color: none;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;
    p {
        text-align: left;
        font-size: 24px;
        font-weight: normal;
        text-transform: capitalize;
    }
`;
const Image = styled.div`
    width: 160px;
    height: 160px;
    background-color: white;
    border-radius: 50%;
    border: 3px solid orange;

    display: flex;
    align-items: center;
    justify-content: center;
    div {
        width: 95%;
        height: 95%;
        border-radius: 50%;
        background-color: orange;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            margin: 5px;
            width: 65%;
            max-width: 160px;
        }
    }
`;

// right
const ContentRight = styled.div`
    width: 64%;
    height: 100vh;
    background-color: #fffaf2;
`;

const Description = styled.div`
    width: 100%;
    margin: 20px 0px;
`;

const Content = styled.div`
    padding-left: 1.1rem;
    margin: 10px 0px;
    .wrap-content {
        width: 98%;
        display: flex;
        justify-content: space-between;
        .titles {
            font-weight: bold;
            font-size: 16px;
        }
        .time {
            font-style: italic;
            color: #a8a8a8;
        }
    }
    .description {
        padding: 5px;
        width: 92%;
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
