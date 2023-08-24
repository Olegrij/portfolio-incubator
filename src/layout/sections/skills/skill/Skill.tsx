import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";

export const Skill = () => {
    return (
        <StyledSkill>
            <Icon iconId={"codesvg"}/>
            <SkillTitle>html5</SkillTitle>
            <SkillText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi esse facilis fugiat
                necessitatibus quod veritatis voluptatem.
                Assumenda beatae consectetur deserunt distinctio est, impedit neque pariatur quia, rem, soluta
                tenetur unde!
            </SkillText>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
  
`

const SkillTitle = styled.h3`
  
`

const SkillText = styled.div`
  
`