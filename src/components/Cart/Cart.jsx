import { motion } from 'framer-motion';
import {
  Container,
  SubmitButton,
  SubmitContainer,
  TotalStyled,
} from './Cart.styled';
import CartItems from './CartItems';
import { useRef } from 'react';
import {
  FormStyled,
  InputContainer,
  InputStyled,
  LabelStyled,
} from './UserForm.styled';
//import { stagger, useAnimate } from 'framer-motion';

const Cart = () => {
  // const getUserData = data => {
  //   console.log({ data });
  // };

  const getProductsPicked = products => {
    console.log(products);
  };

  //const [scope, animate] = useAnimate();
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const addressRef = useRef();

  const userData = {
    name: nameRef.current.value,
    email: emailRef.current.value,
    phone: phoneRef.current.value,
    address: addressRef.current.value,
  };

  console.log(userData);

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
      // animate(
      //   'input',
      //   { x: [-3, -1, 0, 1, 3, 0] },
      //   { type: 'spring', duration: 0.1, delay: stagger(0.01) }
      // );
      return;
    }
    console.log('SUCCESS');
    console.log(userData);
    console.log('Done');
    //getUserData(userData);
  };

  return (
    <Container>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Container>
          <FormStyled onSubmit={handleSubmit}>
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
        <CartItems getProductsPicked={getProductsPicked} />
      </div>
      <SubmitContainer>
        <TotalStyled>Total price:</TotalStyled>
        <span></span>
        <SubmitButton
          type="submit"
          as={motion.button}
          whileHover={{ scale: 1.1, backgroundColor: 'purple', color: 'pink' }}
          transition={{ type: 'spring', duration: 0.3, stiffness: 400 }}
        >
          Submit
        </SubmitButton>
      </SubmitContainer>
    </Container>
  );
};

export default Cart;
