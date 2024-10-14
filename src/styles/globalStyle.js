import { createGlobalStyle } from 'styled-components';
import backgroundWeb from "../images/image-background.png"

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-image: url(${backgroundWeb});
    background-size: center; 
    background-position: -2vw 17vh; 
    background-repeat: no-repeat;
    height: 100vh;
    width: 100vw;
  }
  
  @media (max-width: 768px) {
      body {
        background-image: url(${backgroundWeb});
        background-size: 500px;
        height: 50%;
        width: 100vw;
      }
    }
`;