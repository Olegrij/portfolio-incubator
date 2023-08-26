import React from 'react';
import styled from "styled-components";
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