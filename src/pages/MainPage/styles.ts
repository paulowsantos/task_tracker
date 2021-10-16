import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div``;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 80px 60px 0px;

  div {
    display: flex;
    align-items: center;
    margin-left: 3%;

    img {
      height: 40px;
    }

    h1 {
      white-space: nowrap;
      margin-bottom: 0;
    }
  }

  button {
    font-size: 18px;
    font-weight: 700;
    margin-right: 3%;

    svg {
      margin-right: 15px;
    }
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  margin-left: 40px;
`;

export const States = styled.div`
  display: flex;
  align-items: top;
  justify-content: space-evenly;
  margin-top: 50px;
`;

export const State = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  width: 25%;
`;

export const StateHeader = styled.div`
  background: ${lighten(0.2, '#445e69')};
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px 10px 0px 0px;
  height: 80px;
  padding: 0 20px;

  span {
    font-size: 18px;
    font-weight: 400;
  }
`;

export const ListContainer = styled.div`
  flex: 1;
  padding: 10px;
  background: ${lighten(0.5, '#445e69')};
  border-radius: 0px 0px 10px 10px;
`;
