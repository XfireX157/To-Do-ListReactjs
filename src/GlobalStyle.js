import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    list-style: none;
    font-family: Open-Sans, Helvetica, Sans-Serif;
	font: inherit;
	vertical-align: baseline;
  }
`;
 
export default GlobalStyle;