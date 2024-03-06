import styled from 'styled-components';

export const HistoryContainer = styled.div`
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  border: 0.5px solid #b4c0c4;
  border-radius: 5px;
`;

export const HistoryTitle = styled.p`
  margin: 0;
  margin-bottom: 20px;
  text-align: center;
  color: #35484f;
  font-size: 14px;
  font-weight: 600;
  font-family: 'Raleway', sans-serif;
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7px;
  justify-content: center;
`;

export const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

export const LabelStyled = styled.label`
  font-size: 14px;
  color: grey;
  margin: 0;
  text-transform: capitalize;
`;

export const InputStyled = styled.input`
  padding: 3px 5px;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid #b4c0c4;
`;

export const ButtonStyled = styled.button`
  width: 100px;
  margin-top: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  padding: 6px 12px;
  border-radius: 10px;
  border: 1px solid #b4c0c4;
  color: #35484f;
  background-color: #b4c0c4;
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
`;
