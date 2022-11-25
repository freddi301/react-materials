import React from "react";
import logo from "src/logo.svg";
import styled, { ThemeProvider, css } from "styled-components/macro";
import { useMyTheme } from "src/theme/mytheme";
import { ThemeSwitcher } from "src/theme/ThemeSwitcher";
import { Arcobaleno } from "src/Arcobaleno";
import {
  TitleChanger,
  EasterCatLuca,
  EasterCatLoris,
  EasterCatVlad,
  AltF4Prank
} from "src/TitleChanger";
import { LikeCounter, Calcolatrice, CounterCoppie } from "src/LikeCounter";
import { TodoListA } from "src/todolist/TodoListA";
import meme from "src/distracted-boyfriend.jpg";
import { TodoListB } from "src/todolist/TodoListB";
import { TodoListC } from "src/todolist/TodoListC";
/**
 * App root component
 */
const App = () => {
  const [themeName, theme, setThemeName] = useMyTheme(); // utilizziamo la custom hook del nostro tema
  return (
    <ThemeProvider
      theme={theme} /* forniamo agli styled component il contesto del tema*/
    >
      <StyledContainer>
        <StyledHeader>
          <img
            src={logo}
            alt="logo"
            css={css`
              width: 2em;
              height: 2em;
              vertical-align: middle;
              margin-right: 0.5em;
            `}
          />
          Workshop (React + Hooks + TypeScript)
        </StyledHeader>
        <div>
          <StyledImageEmbed src={meme} />
          <StyledSection>
            <StyledSectionHeader>Counter</StyledSectionHeader>
            <LikeCounter />
            {false && <Calcolatrice />}
            {false && <CounterCoppie />}
          </StyledSection>
          <StyledSection>
            <StyledSectionHeader>Title Changer</StyledSectionHeader>
            <TitleChanger />
            {false && (
              <>
                Loris: <EasterCatLoris />
                Luca: <EasterCatLuca />
                Vlad: <EasterCatVlad />
              </>
            )}
            {false && <AltF4Prank />}
          </StyledSection>
          <StyledSection>
            <StyledSectionHeader>styled-components</StyledSectionHeader>
            <Arcobaleno />
          </StyledSection>
          <StyledSection>
            <StyledSectionHeader>Theme Switcher</StyledSectionHeader>
            <ThemeSwitcher current={themeName} onChange={setThemeName} />
          </StyledSection>
          <StyledSection>
            <StyledSectionHeader>Todo List A</StyledSectionHeader>
            <TodoListA />
          </StyledSection>
          <StyledSection>
            <StyledSectionHeader>Todo List B</StyledSectionHeader>
            <TodoListB />
          </StyledSection>
          <StyledSection>
            <StyledSectionHeader>Todo List C</StyledSectionHeader>
            <TodoListC />
          </StyledSection>
          <StyledImageEmbed src="https://imgs.xkcd.com/comics/real_programmers.png" />
          <StyledFooter>{copyLeft} Frederik Batuna - October 2019</StyledFooter>
        </div>
      </StyledContainer>
    </ThemeProvider>
  );
};

export default App;

// il tema è accessibile tramite la prop theme
const StyledContainer = styled.div`
  background-color: ${({ theme: { backgroundColor } }) => backgroundColor};
  color: ${({ theme: { textColor } }) => textColor};
  font-family: "Roboto Mono", monospace;
  margin: 2em;
  border-radius: 8px;
  padding: 2em;
`;

const StyledHeader = styled.h1`
  text-align: center;
  position: sticky;
  top: 0;
  background-color: ${({ theme: { backgroundColor } }) => backgroundColor};
  border-bottom: 1px solid ${({ theme: { borderColor } }) => borderColor};
  margin: -1em -1em 0 -1em;
  border-radius: 8px 8px 0px 0px;
  padding: 1em;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.65); /* https://www.cssmatic.com/box-shadow */
`;

const StyledSection = styled.div`
  margin-bottom: 64px;
`;

const StyledSectionHeader = styled.h2`
  border-bottom: 1px solid ${({ theme: { borderColor } }) => borderColor};
`;

const StyledImageEmbed = styled.img`
  border-radius: 8px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  max-width: 100%;
  margin-top: 1em;
  margin-bottom: 1em;
`;

const StyledFooter = styled.div`
  border-top: 1px solid ${({ theme: { borderColor } }) => borderColor};
  text-align: center;
  margin-left: -2em;
  margin-right: -2em;
  padding: 1em;
`;

// si possono utilizzare anche direttamente le istanze dei componenti
// https://it.wikipedia.org/wiki/Copyleft
const copyLeft = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 980 980"
    css={css`
      width: 1em;
      vertical-align: middle;
    `}
  >
    <circle
      cx="490"
      cy="490"
      r="440"
      fill="none"
      css={css`
        stroke: ${({ theme: { textColor } }) => textColor};
        stroke-width: 100;
      `}
    />
    <path
      d="M219,428H350a150,150 0 1 1 0,125H219a275,275 0 1 0 0-125z"
      css={css`
        fill: ${({ theme: { textColor } }) => textColor};
        stroke: ${({ theme: { textColor } }) => textColor};
      `}
    />
  </svg>
);
