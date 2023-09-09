import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";

type SkillPropsType = {
    iconId: string
    title: string
}
export const Skill = (props: SkillPropsType) => {
    return (
        <FlexWrapper direction={"column"} wrap={"wrap"}>
            <StyledSkill>
                <Icon iconId={props.iconId} width={"90px"} height={"90px"} viewBox={"0 0 90 90"}/>
                <SkillTitle>{props.title}</SkillTitle>
            </StyledSkill>
        </FlexWrapper>

    );
};

const StyledSkill = styled.div`
  width: 200px;
  text-align: center;
  padding: 1rem;
`

const SkillTitle = styled.h3`
  margin-top: 1rem;
`