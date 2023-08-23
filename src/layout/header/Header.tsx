import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";

export const Header = () => {
    return (
        <StyledHeader>
            <Menu/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: #90e2fc;
  display: flex;
  justify-content: center;
`