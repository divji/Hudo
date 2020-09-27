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

  body {
    font-family: 'JosefinSans';
    margin: 0;
    padding: 0;
    height: 100vh;
    background-color: #2A272F;
  }
  
  h1,h2,h3,h4,ul,p {
    margin: 0;
    padding: 0;
  }

  button {
    outline: none;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  
  a {
    text-decoration: none;
    font-size: 20px;
    &:focus {
      color: coral;
    } 
  }

  .nav__item {
    display: flex;
    color: #181818;
    padding: 30px;
    width: 100%;
    height: 100%;
    align-items: center;
  }

  .nav__item:hover {
    background-color: coral;
    color: snow;
    transition: ease all 0.2s;                      
  }

  .header__logo {
    height: inherit;
    width: 40px;
    align-items: center;
    transform: rotate(0deg);
    transition: ease 1s all;
  }

  .header__logo:hover {
    transform: rotate(15deg);
    transition: ease 1s all;
  }

  .nav__logo {
    margin-right: 50px;
  }

  .main-image {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }

  .fab {
     font-size: 60px;
     color: #5C7AFF;
     padding: 0 25px 0 0;
  }

  .fab:hover {
    color: coral;
  }

  .personal {
    color: #5C7AFF;
    font-size: 30px;
  }

  .heading_span {
    font-size: 40px;
    display: block;
    margin-bottom: 10px;
  }

  .current {
    color: coral;
  }

  @media(max-width: 768px) {
    .nav__logo {
      display: flex;
    }

    .fab {
      display: inline;  
   }

   .nav__item {
      display: flex;
      justify-content: center;
   }
  }
`;
