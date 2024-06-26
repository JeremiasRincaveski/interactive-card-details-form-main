import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap');
 
 * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Space Grotesk", sans-serif;
  }

  #root {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: "Space Grotesk", sans-serif;
    font-weight: 500;

    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 100%;
      height: 100%;

      @media (min-width: 967px) {
        flex-direction: row;
      }
    }
  }
`