import styled from "styled-components";
import { COLORS, SPACING } from "../theme";
import Card from "react-bootstrap/Card"



export const DificuldadesContainer = styled.div.attrs(() => ({
    className: 'p-5 mb-4 bg-light'
  }))`
    width: 100%;
    text-align: center;
  `;

  export const StyledCard = styled(Card)`
  
  `;