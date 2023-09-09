import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/profile-photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <StyledLikeH1>oleg<br/>rijikov</StyledLikeH1>
                    <MainTitle>UX | UI Designer & Developer<br/>32 years old, Israel, Rosh-Hain</MainTitle>
                    <span>RU|ENG</span>
                </FlexWrapper>
                <Photo src={photo} alt=""/>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  //min-height: 100vh;
`
const Photo = styled.img`
  max-width: 100%;
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