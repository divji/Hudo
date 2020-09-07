import { createGlobalStyle } from 'styled-components';

export function fontFace(name, fontWeight = 'normal', fontStyle = 'normal'){
    return `
      @font-face{
          font-family: "${name}";
          src: url(${require('./JosefinSans-Medium.ttf')});
          font-style: ${fontStyle};
          font-weight: ${fontWeight};
      }
  `;
}

export const GlobalStyle = createGlobalStyle`
  ${fontFace('JosefinSans', 'normal', 'normal')}
  
  * {
    box-sizing: border-box;
  }

  a {
    color: snow;
    text-decoration: none;
    font-size: 20px;
  }

  body {
    font-family: 'JosefinSans';
    margin: 0;
    padding: 0;
  }
  ul {
      padding: 0;
      margin: 0;
  }
`;
