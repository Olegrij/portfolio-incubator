import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";


export const About = () => {
    return (
        <AboutWrapper>
            <Container>
                <SectionTitle>About</SectionTitle>
                <AboutTextWrapper>
                    <AboutText>

                    </AboutText>
                </AboutTextWrapper>


            </Container>

        </AboutWrapper>
    );
};

const AboutWrapper = styled.section`
  text-align: center;
`

const AboutTextWrapper = styled.div`
  max-width: 580px;
  width: 100%;
  margin: 0 auto;
`
const AboutText = styled.text`
  font-size: 18px;
  line-height: 32px;
`