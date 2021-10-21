import styled from "styled-components";
import { COLORS, SPACING } from "../theme";
import Card from "react-bootstrap/Card"
import CardGroup from 'react-bootstrap/CardGroup'
import { Link } from "react-router-dom";


export const CursosContainer = styled.div.attrs(() => ({
    className: 'p-5 mb-4'
  }))`
    width: 100%;
    align-items: center;
    margin: auto;
    text-align: center;
  `;

  export const StyledCard = styled(Card).attrs(() => ({
    className: 'center-screen'
  }))`
    margin: 10px;
    width: 90;
    display: flex;
    align-items: flex-start;
    flex-direction: row;
  `;

  export const StyledCardGroup = styled(CardGroup).attrs(() => ({
    className: 'card-group w-75 container'
  }))`
    padding: 10px;
    text-align: center;
    max-width: 56%;
    border-radius: 20px;

  `;



  export const Stripe = styled.div.attrs(() => ({
    className: 'col'
  }))`
    border-left: 6px solid green;
    height: 80px;
  `;


  export const StyledLink = styled(Link).attrs(() => ({
    className: 'hover-overlay ripple shadow-1-strong'
  }))`

  `;