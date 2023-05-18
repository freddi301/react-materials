import React from "react";
import styled from "styled-components/macro";

/**
 * Componente demo per styled component
 */
export function Arcobaleno() {
  return (
    <StyledBorder>
      <StyledBody>
        <StyledRed size={12}>R</StyledRed>
        <StyledGreen size={16}>G</StyledGreen>
        <StyledBlue size={14}>B</StyledBlue>
      </StyledBody>
    </StyledBorder>
  );
}

// gli styled component dovrebbero avere il prefisso Styled

const StyledBorder = styled.div`
  /* https://cssgradient.io/ */
  background: linear-gradient(
    45deg,
    rgba(255, 0, 0, 1) 0%,
    rgba(245, 255, 0, 1) 17%,
    rgba(9, 255, 0, 1) 32%,
    rgba(0, 245, 255, 1) 50%,
    rgba(38, 0, 255, 1) 67%,
    rgba(239, 0, 255, 1) 83%,
    rgba(255, 0, 0, 1) 100%
  );
  border-radius: 8px;
  padding: 4px;
  display: inline-block;
`;

const StyledBody = styled.div`
  display: flex;
  border-radius: 4px;
  overflow: hidden;
`;

// si possono specificare parametri aggiuntivi per il componente styled
// oltre a quelli dell'elemento html presenti di default
const StyledTile = styled.div<{ size: number }>`
  color: white;
  text-shadow: 0px 0px 4px black;
  font-size: ${({ size }) =>
    size}px; /* si può accedere ai parametri aggiuntivi */
  padding: 0.5em;
  opacity: 0.8;
  &:hover {
    transform: scale(1.5);
    opacity: 1;
    transition: 1s;
  }
  user-select: none;
`;

// un componente styled può ereditare da un altro componente styled
const StyledRed = styled(StyledTile)`
  background-color: red;
`;

const StyledGreen = styled(StyledTile)`
  background-color: green;
`;

const StyledBlue = styled(StyledTile)`
  background-color: blue;
`;
