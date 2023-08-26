import React from 'react';
import styled from "styled-components";
import {SectionWrapper} from "../../../components/Section";
import {SectionTitle} from "../../../components/SectionTitle";

export const About = () => {
    return (
        <SectionWrapper>
            <SectionTitle>About</SectionTitle>
            <AboutText>
                My name is Oleg (32 years old), married and father of three children (Leo, Nikolas and Daniel). We
                living in Israel.
                I graduated from college of graphic design (HackerU) and completed many different courses such as:
                ✅Web-Design ✅XD & Figma (UX/UI) ✅Webflow ✅Wordpress (Flatsome & Elementor) ✅HTML/CSS/JS ✅Graphic Design
                ✅Photoshop ✅Illustrator ✅InDesign
                I continue to progress and improve my skills. I'm always looking for the next big challenge and the
                opportunity to learn and grow. If you have any questions you may have feel free to reach out to me via
                message, and I will get back to you as soon as possible!
            </AboutText>
        </SectionWrapper>

    );
};

export const StyledAbout = styled.section`

`

export const AboutText = styled.text`
  font-size: 18px;
`

