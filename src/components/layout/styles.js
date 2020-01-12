import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  /* 
  * Purpose:
  * Assign height: "100%" to
  * html, body, #___gatsby &  
  * div with role="group"
  */

  html, body, #___gatsby {
    height: 100%;
  }

  body {
    margin: 0px;
  }

  div[role="group"][tabindex] {
    height: 100%;
  }
`
