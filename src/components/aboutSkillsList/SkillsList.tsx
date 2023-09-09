import React from 'react';
import styled from "styled-components";
import {Skill} from "../../layout/sections/skills/skill/Skill";


export const SkillsList = () => {
    return (
        <StyledSkillsWrapper>
            My name is Oleg (32 years old), married and father of three children (Leo, Nikolas and Daniel).
            We living in Israel. I graduated from college of graphic design (HackerU) and completed many different
            courses.
            I continue to progress and improve my skills. I'm always looking for the next big challenge and
            the opportunity to learn and grow. If you have any questions you may have feel free to reach out to
            me via message, and I will get back to you as soon as possible!
            <ul>
                <li>✅Web-Design</li>
                <li>✅Webflow</li>
                <li>✅Wordpress (Flatsome & Elementor)</li>
            </ul>
            <ul>
                <li>✅HTML/CSS/JS</li>
                <li>✅Graphic Design</li>
                <li>✅Photoshop</li>
                <li>✅Illustrator</li>
            </ul>

        </StyledSkillsWrapper>
    );
};

const StyledSkillsWrapper = styled.div`
    ul{
      display: flex;
      gap: 20px;
    }
`