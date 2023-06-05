import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Title = styled.h1`
  animation: ${fadeInAnimation} 2s ease-in;
  text-align: center;
  margin-bottom: 30px;
`;

export const PreTitle = styled.h1`
  text-align: center;
  margin-bottom: 30px;
`;

export const UnderTitle = styled.h2`
  text-align: center;
  font-size: 28px;
  height: 40px;
`;

export const HomeLink = styled(Link)`
  text-decoration: none;
  margin: 0 6px;
  color: white;

  :hover {
    color: #000000;
  }
`;

export const Section = styled.section`
  padding-top: 40px;
  height: 40em;
  border-radius: 1.1em;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
