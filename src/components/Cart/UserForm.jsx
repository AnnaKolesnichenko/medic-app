import { useRef } from 'react';
import {
  Container,
  FormStyled,
  InputContainer,
  InputStyled,
  LabelStyled,
} from './UserForm.styled';
import { stagger, useAnimate } from 'framer-motion';

const UserForm = ({ getUserData }) => {
  const [scope, animate] = useAnimate();
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const addressRef = useRef();

  const handleSubmit = e => {
    e.preventDefault();

    const userData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      address: addressRef.current.value,
    };

    if (
      !userData.name.trim() ||
      !userData.email.trim() ||
      !userData.phone.trim() ||
      !userData.address.trim()
    ) {
      console.log('invalid data');
      animate(
        'input',
        { x: [-3, -1, 0, 1, 3, 0] },
        { type: 'spring', duration: 0.1, delay: stagger(0.01) }
      );
      return;
    }
    console.log('SUCCESS');
    console.log(userData);
    console.log('Done');
    getUserData(userData);
  };

  return (
    <Container>
      <FormStyled onSubmit={handleSubmit} ref={scope}>
        <InputContainer>
          <LabelStyled htmlFor="name">Name</LabelStyled>
          <InputStyled type="text" id="name" ref={nameRef} />
        </InputContainer>
        <InputContainer>
          <LabelStyled htmlFor="email">Email</LabelStyled>
          <InputStyled type="text" id="email" ref={emailRef} />
        </InputContainer>
        <InputContainer>
          <LabelStyled htmlFor="phone">Phone</LabelStyled>
          <InputStyled type="number" id="phone" ref={phoneRef} />
        </InputContainer>
        <InputContainer>
          <LabelStyled htmlFor="address">Address</LabelStyled>
          <InputStyled type="text" id="address" ref={addressRef} />
        </InputContainer>
      </FormStyled>
      {/* <SubmitContainer>
        <TotalStyled>Total price:</TotalStyled>
        <span></span>
        <SubmitButton
          type="button"
          as={motion.button}
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', duration: 0.3, stiffness: 400 }}
        >
          Submit
        </SubmitButton>
      </SubmitContainer> */}
    </Container>
  );
};

export default UserForm;
