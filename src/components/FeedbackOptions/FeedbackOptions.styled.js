import styled from 'styled-components';
export const ConstainerButton = styled.div`
  padding: 10px;
`;
export const Button = styled.button`
  width: 120px;
  height: 40px;
  margin-left: 10px;
  border-radius: 5px;
  background-color: ${getRandomHexColor};
`;


export function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  