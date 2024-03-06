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
  margin-bottom: 40px;
  text-align: center;
  color: #35484f;
  font-size: 14px;
  font-weight: 600;
  font-family: 'Raleway', sans-serif;
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: row;
  gap: 30px;
  justify-content: center;
`;

export const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
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
