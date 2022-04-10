import { createGlobalStyle } from 'styled-components';
// @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;700&family=Roboto:wght@300;400;500;700&family=Ubuntu:wght@300;400;500;700&display=swap');

export const BaseStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: inherit;
    box-sizing: border-box;
    font-variant-numeric: lining-nums;
    -webkit-font-smoothing: antialiased;
    outline: none;
  }

  html {
    box-sizing: border-box;
    font-size: 100%;
  }

  body {
    font-family: sans-serif
  }

  body,
  html,
  li,
  ol,
  ul {
    margin: 0;
    padding: 0;
  }

  ol,
  ul,
  li {
    list-style: none;
  }

  

  button, input {
    overflow: visible;
  }

  input {
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    cursor: text;
    border-image: initial;
    font: 400 13.3333px Arial;
    /* -webkit-rtl-ordering: logical;
    -webkit-writing-mode: horizontal-tb;
    writing-mode:horizontal-tb; */
    text-rendering: auto;
  }
`;
