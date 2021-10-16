import styled from 'styled-components';
import { shade } from 'polished';

import { ButtonProps } from './index';

const ButtonContainer = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.width};
  height: ${props => props.height};
  background: ${props => props.background};
  border-radius: 10px;
  border: 0;
  color: #fff;
  font-size: 14px;
  transition: background-color 0.2s;

  &:hover {
    background: ${props => shade(0.2, props.background)};
  }
`;
export default ButtonContainer;
