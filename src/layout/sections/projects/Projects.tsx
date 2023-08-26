import React from 'react';
import {SectionWrapper} from "../../../components/Section";
import {SectionTitle} from "../../../components/SectionTitle";
import project1 from '../../../assets/images/project-1.jpg'
import project2 from '../../../assets/images/project-2.jpg'
import project3 from '../../../assets/images/project-3.jpg'


import {FlexWrapper} from "../../../components/FlexWrapper";
import {Project} from "./project/Project";


export const Projects = () => {
    return (
        <SectionWrapper>
            <SectionTitle>Portfolio</SectionTitle>
            <FlexWrapper direction={"column"} gap={"20px"}>
                <Project src={project1}/>
                <Project src={project2}/>
                <Project src={project3}/>
            </FlexWrapper>
        </SectionWrapper>
    );
};
