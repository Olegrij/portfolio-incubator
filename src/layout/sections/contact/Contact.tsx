import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";

export const Contact = () => {
    return (
        <StyledContact>
            <SectionTitle>Contact</SectionTitle>
            <StyledForm>Name
                <Field placeholder={"Name"}/>
                <Field placeholder={"Email"}/>
                <Field placeholder={"Message"} as={"textarea"}/>
                <Button type={"submit"}>Send message</Button>
            </StyledForm>
        </StyledContact>
    );
};

const StyledContact = styled.div`
  min-height: 40svh;
`
const StyledForm = styled.form`
  width: 500px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0 auto;
`
const Field = styled.input`

`