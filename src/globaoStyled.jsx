import { createGlobalStyle } from "styled-components"



export const GlobalStyled = createGlobalStyle`
    html {
  height: 100%;
  scroll-behavior: smooth;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  transition: all .4s ease;
}

body {
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0;
  background:#393C49;
  font-family: 'Mulish', "Arial", sans-serif;
}

main {
  flex-grow: 1;
  margin-left: 255px;
}

img {
  vertical-align: middle;
  object-fit: cover;
}
`


