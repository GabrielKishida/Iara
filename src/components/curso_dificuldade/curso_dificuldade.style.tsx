import styled from "styled-components";
import { COLORS, SPACING } from "../theme";
import Card from "react-bootstrap/Card"
import CardGroup from 'react-bootstrap/CardGroup'



export const DificuldadesContainer = styled.div.attrs(() => ({
    className: 'p-5 mb-4'
  }))`
    width: 100%;
    align-items: center;
    margin: auto;
    text-align: center;
  `;

  export const StyledCard = styled(Card).attrs(() => ({
    className: 'hover-zoom'
  }))`
    max-width: 30rem;
    margin: 10px;
    width: 18rem;
    border-radius: 20px;
    
  `;

  export const StyledCardGroup = styled(CardGroup).attrs(() => ({
    className: 'card-group w-75 container hover-zoom'
  }))`
    padding: 10px;
    text-align: center;
    max-width: 56%;
    border-radius: 20px;

  `;