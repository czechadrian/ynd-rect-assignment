import styled from 'styled-components';
import { Button, Input } from 'antd';

export const Layout = styled.div`
  width: 480px;
  padding: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
  @media (max-width: 800px) {
    height: 700px;
  }
  @media (min-width: 801px) {
    height: 95%;
  }
`;

export const InputStyled = styled(Input)`
  width: 100%;
  background-color: #e8e8e8;
  margin-bottom: 1rem;
  color: #707070;
  :: placeholder {
    color: #707070;
  }
`;

export const ButtonStyled = styled(Button)`
  width: 100%;
`;
export const ShowingResultsStyled = styled.span`
  width: 100%;
  padding: 0.5rem;
  font-size: 1.25rem;
`;
