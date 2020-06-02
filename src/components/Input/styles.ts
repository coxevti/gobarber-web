import styled, { css } from 'styled-components';

interface InputProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<InputProps>`
  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  border: 2px solid #232129;
  color: #666360;
  display: flex;
  align-items: center;
  & + div {
    margin-top: 8px;
  }
  ${(props: InputProps) =>
    props.isFocused &&
    css`
      color: #ff9000;
      border: 2px solid #ff9000;
    `}
  ${(props: InputProps) =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}
  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;
    &::placeholder {
      color: #666360;
    }
  }
  svg {
    margin-right: 16px;
  }
`;
