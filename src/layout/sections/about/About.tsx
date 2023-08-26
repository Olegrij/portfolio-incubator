import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";

export const About = () => {
    return (
        <AboutWrapper>
            <SectionTitle>About</SectionTitle>
            <AboutText>
                My name is Oleg (32 years old), married and father of three children (Leo, Nikolas and Daniel). We
                living in Israel. <br/>
                I graduated from college of graphic design (HackerU) and completed many different courses such as: <br/>
                ✅Web-Design ✅XD & Figma (UX/UI) ✅Webflow ✅Wordpress (Flatsome & Elementor) ✅HTML/CSS/JS ✅Graphic
                Design ✅Photoshop ✅Illustrator ✅InDesign <br/>
                I continue to progress and improve my skills. I'm always looking for the next big challenge and the
                opportunity to learn and grow. If you have any questions you may have feel free to reach out to me
                via
                message, and I will get back to you as soon as possible!
            </AboutText>
        </AboutWrapper>
    );
};

const AboutWrapper = styled.div`
  width: 550px;
  text-align: center;
`

const AboutText = styled.text`
  font-size: 18px;
  line-height: 32px;
`

