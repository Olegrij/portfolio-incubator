import React from 'react';
import {SectionTitle} from "../../../../components/SectionTitle";
import styled from "styled-components";
import {type} from "os";



type ProjectPropsType = {
    src: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <Image src={props.src} alt=""/>
            <Link href={"#"}></Link>
        </StyledProject>
    );
};

const StyledProject = styled.div`
  width: 1000px;
  max-width: 100%;
`
const Image = styled.img`
  width: 1000px;
  height: 530px;
  object-fit: cover;
  object-position: center center;
`
const Link = styled.a`
  
`