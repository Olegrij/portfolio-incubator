import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/profile-photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionWrapper} from "../../../components/Section";

export const Main = () => {
    return (
        <StyledMain>
            <SectionWrapper padding={"40px 0px"}>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <StyledLikeH1>oleg<br/>rijikov</StyledLikeH1>
                    <MainTitle>UX | UI Designer & Developer<br/>32 years old, Israel, Rosh-Hain</MainTitle>
                    <span>RU|ENG</span>
                </FlexWrapper>
            </SectionWrapper>
            <Photo src={photo} alt=""/>
        </StyledMain>
    );
};

const StyledMain = styled.div`
  //min-height: 100vh;
`
const Photo = styled.img`
  width: 1000px;
  height: 600px;
  object-fit: cover;
`
const MainTitle = styled.h1`
  font-size: 18px;
  font-weight: 400;
`

const StyledLikeH1 = styled.span`
  font-size: 48px;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 54px;
`