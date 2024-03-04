import React from 'react';
import { InputContainer, LabelStyled, InputStyled } from './Input.styled';

const Input = React.forwardRef(({ html, type, id }, ref) => {
  return (
    <InputContainer>
      <LabelStyled htmlFor={html}>{html}</LabelStyled>
      <InputStyled type={type} id={id} ref={ref} />
    </InputContainer>
  );
});

export default Input;
