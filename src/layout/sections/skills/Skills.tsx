import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>Skills</SectionTitle>
                <FlexWrapper wrap={"wrap"} gap={"4rem"} justify={"center"}>
                    <Skill iconId={"wordpress"}
                           title={"WORDPRESS"}/>
                    <Skill iconId={"webflow"}
                           title={"WEBFLOW"}/>
                    <Skill iconId={"figma"}
                           title={"WEB DESIGN"}/>
                    <Skill iconId={"react"}
                           title={"REACT"}/>
                    <Skill iconId={"html"}
                           title={"HTML"}/>
                    <Skill iconId={"css"}
                           title={"CSS"}/>
                    <Skill iconId={"javascript"}
                           title={"JAVASCRIPT"}/>
                    <Skill iconId={"typescript"}
                           title={"TYPESCRIPT"}/>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};


const StyledSkills = styled.section`

`