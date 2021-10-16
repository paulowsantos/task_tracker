import React, { ReactNode } from 'react';

import ButtonContainer from './styles';

export interface ButtonProps {
  width: string;
  height: string;
  background: string;
  onClick: () => void;
  children: string | ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  width,
  height,
  background,
  onClick,
  children,
}) => {
  return (
    <ButtonContainer
      type="button"
      width={width}
      height={height}
      background={background}
      onClick={onClick}
    >
      {children}
    </ButtonContainer>
  );
};

export default Button;
