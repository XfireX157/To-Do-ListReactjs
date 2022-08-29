import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    list-style: none;
    outline: none;
    font-family: Open-Sans, Helvetica, Sans-Serif;
	  font: inherit;
	  vertical-align: baseline;
  }

    /* width */
  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #1f1f3f;
    border-radius: 15px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #1f1f67;
  }
`;

export default GlobalStyle;