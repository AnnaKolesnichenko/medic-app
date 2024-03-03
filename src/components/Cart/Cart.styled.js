import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

export const SubmitContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 15px 30px;
`;

export const TotalStyled = styled.h2`
  font-size: 15px;
  font-family: 'Raleway', sans-serif;
  margin: 0;
  margin-right: 15px;
  color: gray;
`;

export const SubmitButton = styled.button`
  padding: 10px 15px;
  //box-sizing: border-box;
  width: 100px;
  background-color: lightgray;
  border: 0.2px solid lightgrey;
  border-radius: 10px;
  font-family: 'Raleway', sans-serif;
`;
