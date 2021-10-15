import styled from 'styled-components';
import { shade } from 'polished';

interface ContainerProps {
  isOpen: boolean;
}

export const ModalBackground = styled.div<ContainerProps>`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.div<ContainerProps>`
  width: 400px;
  height: 150px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin-top: 4%;
    margin-bottom: 0;
  }

  div {
    width: 80%;
    display: flex;
    flex-direction: row !important;
    align-items: center;
    justify-content: space-between;
    margin: 5% 0px 0px 0px !important;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 45%;
      height: 30px;
      background: #999;
      border-radius: 10px;
      border: 0;
      color: #fff;
      font-size: 14px;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#999')};
      }
    }
  }
`;
