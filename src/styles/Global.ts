import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html {
    font-size: 16px;
    box-sizing: border-box;
}

body {
    margin: 0;
    font-size: 16px;
}

*, *:before, *:after {
    box-sizing: inherit;
}
`;
