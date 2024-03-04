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
  margin-right: 10px;
  color: #35484f;
`;

export const TotalAmoutStyled = styled.span`
  margin-right: 20px;
  font-family: 'Raleway', sans-serif;
  font-size: 18px;
  font-weight: bold;
  color: #35484f;
`;

export const SubmitButton = styled.button`
  padding: 12px 18px;
  //box-sizing: border-box;
  width: 100px;
  background-color: #b4c0c4;
  border: none;
  border-radius: 10px;
  font-family: 'Raleway', sans-serif;
  font-size: 14px;
  font-weight: bold;
  color: #35484f;
`;
