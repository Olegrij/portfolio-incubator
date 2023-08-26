import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                <SocialIconsList>
                    <SocialIconsItem>
                        <SocialIconLink>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"instagram"}/>
                        </SocialIconLink>
                    </SocialIconsItem>
                    <SocialIconsItem>
                        <SocialIconLink>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"linkedin"}/>
                        </SocialIconLink>
                    </SocialIconsItem>
                    <SocialIconsItem>
                        <SocialIconLink>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"telegram"}/>
                        </SocialIconLink>
                    </SocialIconsItem>
                    <SocialIconsItem>
                        <SocialIconLink>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"vk-logo"}/>
                        </SocialIconLink>
                    </SocialIconsItem>
                </SocialIconsList>
                <Text>Like me on <br/>LinkedIn, Instagram, Behance, Dribble</Text>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  //min-height: 40svh;
`

const SocialIconsList = styled.ul`
  display: flex;
  gap: 32px;
`

const SocialIconsItem = styled.li`

`

const SocialIconLink = styled.a`

`

const Text = styled.span`
  text-align: center;
`