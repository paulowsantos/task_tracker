import styled, { css } from 'styled-components';
import { lighten } from 'polished';

interface ContainerProps {
  listOpen: boolean;
}
export const Container = styled.button<ContainerProps>`
  border: 0;
  height: 0;
  ${props => (props.listOpen ? '80px' : '0px')};
  ul {
    width: 100%;
    height: ${props => (props.listOpen ? '80px' : '0px')};
    box-shadow: inset 0 0 0 3rem rgba(255, 255, 255, 0.5);
    border-radius: 4px;
    list-style-type: none;
    transform: scale(0);
    li {
      margin-top: 0.5rem;
      transition: 250ms cubic-bezier(0.42, 0.83, 0.49, 1.35) transform;
      transform: scale(0);
      button {
        display: block;
        text-align: left;
        width: 100%;
        border: 1px solid #000;
        border-radius: 5px;
        font-size: 14px;
        padding: 0px 5px;
        background: ${lighten(0.2, '#445e69')};
        color: #fff;
        transition: 250ms ease all;
        &:hover,
        &:focus,
        &:focus-within {
          box-shadow: inset 0 0 0 3rem rgba(0, 0, 0, 0.1);
        }
      }
    }
  }
  ${props =>
    props.listOpen &&
    css`
      button {
        opacity: 1 !important;
      }
      ul {
        transform: scale(1);
        transition-delay: 150ms;
        li {
          transform: scale(1);
        }
        li:nth-child(1) {
          transition-delay: 150ms;
        }
        li:nth-child(2) {
          transition-delay: 300ms;
        }
        li:nth-child(3) {
          transition-delay: 450ms;
        }
      }
    `}
`;

export const Header = styled.button`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #000;
  border-radius: 5px;
  font-size: 16px;
  padding: 1px 10px;
  background: #fff;
  outline: none;

  div {
    font-size: 16px;
  }

  svg {
    margin-left: 10px;
  }
`;
