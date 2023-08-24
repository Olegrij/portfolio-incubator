import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My title</SectionTitle>
            <FlexWrapper wrap={"wrap"} gap={"1rem"} justify={"center"}>
                <Skill iconId={"code"}
                       title={"HTML5"}
                       description={"HTML5 represents the fifth revision of the HyperText Markup Language, the standard programming language for describing the structure and presentation of web pages. It introduces new elements, attributes, and behaviors that allow for more diverse and powerful web applications, including features like video playback without requiring external plugins."}/>
                <Skill iconId={"css"}
                       title={"CSS3"}
                       description={"CSS3 is the third version of the Cascading Style Sheets specification. It brings an array of advanced visual and animation effects, allowing developers to design websites with sophisticated layouts, transitions, transformations, and animations. Features such as rounded corners, gradients, and shadow effects, which previously required image assets or complex scripting, can now be achieved natively with CSS3."}/>
                <Skill iconId={"figma"}
                       title={"WEB DESIGN"}
                       description={"Web design encompasses a variety of disciplines and skills in the creation and maintenance of websites. It involves producing a visual representation of a website's interface, considering aspects such as layout, colors, fonts, and imagery. A web designer's primary goal is to create user-friendly, aesthetically pleasing websites that offer an optimal user experience across various devices and browsers."}/>
                <Skill iconId={"react"}
                       title={"REACT"}
                       description={"React is a JavaScript library developed by Facebook for building user interfaces. It allows developers to create reusable UI components and manage the state of web applications effectively. With its virtual DOM, React ensures efficient updates and rendering, making it a favorite choice for single-page applications and complex UIs."}/>
                <Skill iconId={"styledComp"}
                       title={"STYLED COMPONENTS"}
                       description={"Styled Components is a library for React and React Native that allows developers to use component-level CSS styling via tagged template literals. It integrates the best parts of ES6 and CSS, offering a clean and modern way to style React components without the cascade or specificity issues often associated with traditional stylesheets."}/>
                <Skill iconId={"typescript"}
                       title={"TYPESCRIPT"}
                       description={"TypeScript is a superset of JavaScript that adds static typing to the language. Developed by Microsoft, TypeScript helps catch errors early, offers improved code refactoring, and makes codebases more maintainable and scalable. It provides developers with powerful tools like interfaces, type annotations, and enums, ensuring robust and type-safe code development."}/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`

`