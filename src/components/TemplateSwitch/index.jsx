import React from "react";
import styled from "styled-components";
import TemplateOne from "../../pages/Templates/TemplateOne";
import TemplateThree from "../../pages/Templates/TemplateThree";
import TemplateTwo from "../../pages/Templates/TemplateTwo";
import Slider from "react-slick";
import jsPDF from "jspdf";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SwitchTemplate = ({ info, setInfo, education }) => {
    var settings = {
        centerMode: true,
        centerPadding: "250px",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const generatePDF = () => {
        var doc = new jsPDF("p", "pt", "a4");
        doc.html(
            document.querySelector("#ba", {
                callback: function (pdf) {
                    pdf.save("my-cv.pdf");
                },
            })
        );
    };
    return (
        <Wrapper>
            <WrapperBtn>
                <button onClick={generatePDF()}>Download PDF</button>
            </WrapperBtn>
            <Slider {...settings}>
                <WrapTemplate>
                    <TemplateOne
                        info={info}
                        education={education}
                        setInfo={setInfo}
                        id='ba'
                    />
                </WrapTemplate>

                <WrapTemplate>
                    <TemplateTwo
                        info={info}
                        setInfo={setInfo}
                        education={education}
                    />
                </WrapTemplate>

                <WrapTemplate>
                    <TemplateThree />
                </WrapTemplate>
            </Slider>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    margin: 0 5%;
`;
const WrapperBtn = styled.div`
    button {
        background-color: #4caf50; /* Green */
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        border-radius: 20px;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin-bottom: 50px;
        cursor: pointer;
    }
`;

const WrapTemplate = styled.div`
    height: auto !important;
    .slick-slide {
        height: auto;
    }
`;

export default SwitchTemplate;
