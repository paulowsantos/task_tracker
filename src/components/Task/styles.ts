import styled from 'styled-components';
import { shade } from 'polished';

interface DetailsProps {
  isOpen: boolean;
}

interface ButtonProps {
  saveDelete: boolean;
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
      margin-top: 10px;
    }
  }

  div {
    visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
    display: flex;
    flex-direction: column;
    margin: 0 10px 10px 0;
    width: 100%;
    height: ${props => (props.isOpen ? '' : '0px')};

    input {
      visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
      transition: visibility 0.000001s;
      border: 1px solid #000;
      border-radius: 4px;
      padding: 0px 10px;

      &:hover,
      &:focus {
        border: 1px solid #e8bc28;
      }
    }

    button {
      visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
      transition: visibility 0.000001s;
    }

    textarea {
      height: 140px;
      resize: none;
      border: 1px solid #000;
      border-radius: 4px;
      padding: 5px 10px;

      &:hover,
      &:focus {
        border: 1px solid #e8bc28;
      }
    }

    div {
      flex-direction: row;
      margin: 0;
    }

    span {
      text-align: left;
      margin-top: 3px;
    }
  }
`;

export const TimePickerContainer = styled.div<DetailsProps>`
  display: flex;
  align-items: center;
  width: 120px !important;
  visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
  transition: visibility 0.01s;

  > div {
    border-radius: 4px;
    border: 1px solid #000 !important;

    &:hover,
    &:focus {
      border: 1px solid #e8bc28 !important;
      svg {
        color: #e8bc28;
      }
    }

    span {
      margin-top: 0 !important;
    }
    input {
      padding: 0 !important;
      border: 0 !important;
      &:hover {
        border: 0;
      }
    }
  }
`;

export const TimePickerFooter = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-left: 5px;
    width: 50%;
  }
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
  height: 40px;
  background: #d11a2a;
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
  height: 40px;
  background: #e8bc28;
  border-radius: 10px;
  border: 0;
  color: #fff;
  font-size: 14px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#e8bc28')};
  }
`;

export const BottomButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45%;
  height: 40px;
  background: ${props => (props.saveDelete ? '#e8bc28' : '#D11A2A')};
  border-radius: 10px;
  border: 0;
  color: #fff;
  font-size: 14px;
  transition: background-color 0.2s;

  &:hover {
    background: ${props =>
      props.saveDelete ? shade(0.2, '#e8bc28') : shade(0.2, '#D11A2A')};
  }
`;
