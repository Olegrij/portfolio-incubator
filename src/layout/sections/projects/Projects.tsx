import React from 'react';

import {SectionTitle} from "../../../components/SectionTitle";
import project1 from '../../../assets/images/project-1.jpg'
import project2 from '../../../assets/images/project-2.jpg'
import project3 from '../../../assets/images/project-3.jpg'


import {FlexWrapper} from "../../../components/FlexWrapper";
import {Project} from "./project/Project";
import styled from "styled-components";


export const Projects = () => {
    return (
        <ProjectWrapper>
            <SectionTitle>Portfolio</SectionTitle>
            <FlexWrapper direction={"column"} gap={"20px"}>
                <Project src={project1}/>
                <Project src={project2}/>
                <Project src={project3}/>
            </FlexWrapper>
        </ProjectWrapper>
    );
};

const ProjectWrapper = styled.section`

`