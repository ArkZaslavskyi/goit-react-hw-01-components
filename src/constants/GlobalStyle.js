import 'modern-normalize';
import { css } from "@emotion/react";
import { theme } from 'constants';

export const GlobalStyles = css`
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    
    font-family: ${theme.fonts.body};
    line-height: ${theme.lineHeights.body};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
}

img {
    display: block;
    max-width: 100%;
    height: auto;
}

p, ul, li, h1, h2 {
    margin: 0;
    padding: 0;
}

li {
    list-style: none;
}
`;
