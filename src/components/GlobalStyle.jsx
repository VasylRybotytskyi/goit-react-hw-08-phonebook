import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  ul, h1, h2, h3, h4, h5, h6, li, p {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  body {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #010101;
  background: linear-gradient(to right, #833ab4, #1677ff, #fcb045, #b345fc);
  background-size: 400% 400%;
  animation: gradientAnimation 10s ease infinite;
}

@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

  section {
    padding: 0 15px;
    width: 1000px;
  }
  header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 4px solid;
  border-image: linear-gradient(to right, #833ab4, #1677ff, #fcb045, #b345fc) 47% 0%;

}
`;
