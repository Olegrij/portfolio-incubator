import React from 'react';
import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";
import {Container} from "../../components/Container";

const items = ["Home", "About me", "Skills", "Portfolio", "Contacts"]

export const Header = () => {
    return (
        <Container>
            <StyledHeader>
                <Menu menuItems={items}/>
            </StyledHeader>
        </Container>

    );
};

const StyledHeader = styled.header`
  background-color: #90e2fc;
  display: flex;
  justify-content: center;
`