import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";

const items = ["Home", "About me", "Skills", "Portfolio", "Contacts"]

export const Header = () => {
    return (
        <StyledHeader>
            <Menu menuItems={items}/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: #90e2fc;
  display: flex;
  justify-content: center;
`