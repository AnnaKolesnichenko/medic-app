import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px 30px;
  margin-left: 10px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  width: 40%;
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const LabelStyled = styled.label`
  font-size: 14px;
  color: grey;
  margin: 0;
`;

export const InputStyled = styled.input`
  padding: 3px 5px;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid lightgrey;
`;
