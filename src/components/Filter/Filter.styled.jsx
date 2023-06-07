import { Input } from 'antd';
import styled from 'styled-components';

export const WrapperFiler = styled.div`
  font-size: 20px;
`;

export const FilterInput = styled(Input)`
  height: 40px;
  width: 230px;
  padding: 0 10px;
  font-size: 20px;
  border: 1px solid #000000;
  border-radius: 7px;
  transition: box-shadow cubic-bezier(0.17, 0.67, 0.86, 0.57) 300ms;

  &:hover,
  &:focus {
    box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.1);
  }
`;

export const FilterP = styled.p`
  font-weight: 500;
  margin-bottom: 20px;
`;
