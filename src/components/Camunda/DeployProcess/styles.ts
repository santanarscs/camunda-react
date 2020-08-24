import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const ImportFileContainer = styled.section`
  background: #fff;
  margin-top: 30px;
  border-radius: 5px;
  padding: 64px;
`;

export const Footer = styled.section`
  margin-top: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    display: flex;
    align-items: center;
    font-size: 12px;
    line-height: 18px;
    color: #969cb3;
    svg {
      margin-right: 5px;
    }
  }
  button {
    background: #ff872c;
    color: #fff;
    border-radius: 5px;
    padding: 15px 80px;
    border: 0;
    transition: background-color 0.2s;
    &:hover {
      background: ${shade(0.2, '#ff872c')};
    }
  }
`;