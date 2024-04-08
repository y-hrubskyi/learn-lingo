import { createGlobalStyle } from "styled-components";
import "modern-normalize";

import RobotoRegularWOFF2 from "@/assets/fonts/Roboto-Regular.woff2";
import RobotoRegularWOFF from "@/assets/fonts/Roboto-Regular.woff";
import RobotoItalicWOFF2 from "@/assets/fonts/Roboto-Italic.woff2";
import RobotoItalicWOFF from "@/assets/fonts/Roboto-Italic.woff";
import RobotoMediumWOFF2 from "@/assets/fonts/Roboto-Medium.woff2";
import RobotoMediumWOFF from "@/assets/fonts/Roboto-Medium.woff";
import RobotoBoldWOFF2 from "@/assets/fonts/Roboto-Bold.woff2";
import RobotoBoldWOFF from "@/assets/fonts/Roboto-Bold.woff";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Roboto";
    src: local("Roboto"),
      url(${RobotoRegularWOFF2}) format("woff2"),
      url(${RobotoRegularWOFF}) format("woff");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Roboto";
    src: local("Roboto"),
      url(${RobotoItalicWOFF2}) format("woff2"),
      url(${RobotoItalicWOFF}) format("woff");
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: "Roboto";
    src: local("Roboto"),
      url(${RobotoMediumWOFF2}) format("woff2"),
      url(${RobotoMediumWOFF}) format("woff");
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: "Roboto";
    src: local("Roboto"),
      url(${RobotoBoldWOFF2}) format("woff2"),
      url(${RobotoBoldWOFF}) format("woff");
    font-weight: 700;
    font-style: normal;
  }

  body {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
  
  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  button {
    cursor: pointer;
  }
  
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }`;
