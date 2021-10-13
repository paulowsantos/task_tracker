import styled from 'styled-components';
import { shade } from 'polished';

interface DetailsProps {
  isOpen: boolean;
}

export const TaskContainer = styled.button`
  width: 100%;
  border: 0;
  background: #f3f3f3;
  border-radius: 5px;
  padding: 8px;
  text-decoration: none;
  transition: transform 0.2s;
  /* display: inline-block; */

  & + button {
    margin-top: 10px;
  }

  &:hover {
    transform: translateX(7px);
  }
`;

export const TaskHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  div {
    flex: 1;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  div {
    display: flex;
    align-items: center;

    svg {
      color: #e8bc28;
    }
    span {
      /* margin-right: 100px; */
    }
  }

  span {
    margin-right: 10px;
  }
`;

export const OpenButton = styled.button<DetailsProps>`
  height: 10px;
  border: none;
  padding: 0;
  transition: all 500ms;
  margin-bottom: 4px;

  span {
    display: inline-block;
    position: relative;

    &:before,
    &:after {
      display: inline-block;
      position: absolute;
      content: '';
      border-radius: 4px;
      height: 2px;
      background: #e8bc28;
      transition: all 200ms;
      top: -6px;
    }

    &:before {
      left: ${props => (props.isOpen ? '-8px' : '-14px')};
      width: ${props => (props.isOpen ? '18px' : '16px')};
      transform: ${props =>
        props.isOpen ? 'rotate(-45deg)' : 'rotate(25deg)'};
    }
    &:after {
      left: ${props => (props.isOpen ? '-8px' : '-1px')};
      width: ${props => (props.isOpen ? '18px' : '16px')};
      transform: ${props =>
        props.isOpen ? 'rotate(45deg)' : 'rotate(-25deg)'};
    }
  }
`;

export const TaskBody = styled.div<DetailsProps>`
  cursor: initial;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: ${props => (props.isOpen ? '400px' : '0px')};
  transition: all 500ms;
  > * {
    &:first-child {
      margin-top: 20px;
    }
  }

  div {
    visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
    display: flex;
    flex-direction: column;
    margin: 0 10px 10px 0;
    width: 100%;
    height: ${props => (props.isOpen ? '' : '0px')};

    textarea {
      height: 140px;
    }

    div {
      flex-direction: row;
      margin: 0;
    }

    span {
      text-align: left;
    }
  }

  input {
    visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
    transition: visibility 0.000001s;
  }
  button {
    visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
    transition: visibility 0.000001s;
  }
`;

export const TimePickerContainer = styled.div<DetailsProps>`
  display: flex;
  align-items: center;
  height: 40px;
  width: 120px !important;
  visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
  transition: visibility 0.01s;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row !important;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0px 0px 0px !important;
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45%;
  height: 30px;
  background: #d11a2a;
  /* background: #d11a2a !important; */
  border-radius: 10px;
  border: 0;
  color: #fff;
  font-size: 14px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#D11A2A')};
  }
`;

export const SaveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45%;
  height: 30px;
  background: #e8bc28;
  /* background: #e8bc28 !important; */
  border-radius: 10px;
  border: 0;
  color: #fff;
  font-size: 14px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#e8bc28')};
  }
`;
