import {
  Container,
  FormStyled,
  InputContainer,
  InputStyled,
  LabelStyled,
} from './UserForm.styled';

const UserForm = () => {
  return (
    <Container>
      <FormStyled>
        <InputContainer>
          <LabelStyled htmlFor="name">Name</LabelStyled>
          <InputStyled type="text" id="name" />
        </InputContainer>
        <InputContainer>
          <LabelStyled htmlFor="email">Email</LabelStyled>
          <InputStyled type="text" id="email" />
        </InputContainer>
        <InputContainer>
          <LabelStyled htmlFor="phone">Phone</LabelStyled>
          <InputStyled type="number" id="phone" />
        </InputContainer>
        <InputContainer>
          <LabelStyled htmlFor="address">Address</LabelStyled>
          <InputStyled type="text" id="address" />
        </InputContainer>
      </FormStyled>
    </Container>
  );
};

export default UserForm;
