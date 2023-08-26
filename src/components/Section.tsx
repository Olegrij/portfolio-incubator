import styled from "styled-components";

type SectionWrapperPropsType = {
    padding?: string
    margin?: string
}

export const SectionWrapper = styled.section<SectionWrapperPropsType>`
    padding ${props => props.padding || "80px 0px"}
`