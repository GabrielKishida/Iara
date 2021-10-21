import { H3, H4, H5, BodyHeader, FooterTitle} from "../typography";
import { HeaderLink, HeaderTitleLink } from "../button";
import { VSeparator, HSeparator } from "../theme";
import {
  FooterContainer,
  LogoCircle,
  PerfilCircle,
  FooterTextContainer,
} from "./footer.style";
import {SocialMediaButton} from   "../button/button"
import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
import { Col } from "../theme/grid";



export const Footer: React.FC = (props) => {
  
  return (
    <FooterContainer>
      <Col>
        <FooterTitle bold>Iara</FooterTitle>
      </Col>
      <HSeparator/>
      <HSeparator/>
      <FooterTextContainer>
          <BodyHeader>Dúvidas</BodyHeader>
          <BodyHeader>Contatos</BodyHeader>
          <SocialMediaButton></SocialMediaButton>
          <SocialMediaButton></SocialMediaButton>
          <SocialMediaButton></SocialMediaButton>
          <BodyHeader>FAQ</BodyHeader>
          <BodyHeader>Cookies</BodyHeader>
      </FooterTextContainer>
    </FooterContainer>
  );
};
