import { motion } from 'framer-motion';
import {
  Container,
  SubmitButton,
  SubmitContainer,
  TotalAmoutStyled,
  TotalStyled,
} from './Cart.styled';
import CartItems from './CartItems';
import { useEffect, useRef, useState } from 'react';
import { ContainerUserForm, FormStyled } from './UserForm.styled';
import { stagger, useAnimate } from 'framer-motion';
import { useSelector } from 'react-redux';
import Input from './Input';
import { addItemsToDB } from 'services/api-services';

const Cart = () => {
  const cartData = useSelector(state => state.cart.cartItems);
  const [totalCost, setTotalCost] = useState();

  useEffect(() => {
    let total = 0;
    cartData.forEach(item => {
      console.log(item);
      total += item.price * item.quantity;
    });
    setTotalCost(total);
  }, [cartData]);

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
    addItemsToDB({ userData, cartData });
  };

  return (
    <Container>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ContainerUserForm>
          <FormStyled onSubmit={handleSubmit} ref={scope}>
            <Input html="name" type="text" id="name" ref={nameRef} />
            <Input html="email" type="text" id="email" ref={emailRef} />
            <Input html="phone" type="number" id="phone" ref={phoneRef} />
            <Input html="address" type="text" id="address" ref={addressRef} />
          </FormStyled>
        </ContainerUserForm>

        <CartItems />
      </div>
      <SubmitContainer>
        <TotalStyled>Total price:</TotalStyled>
        <TotalAmoutStyled>${totalCost}</TotalAmoutStyled>
        <SubmitButton
          type="submit"
          onClick={handleSubmit}
          as={motion.button}
          initial={{ color: 'black', backgroundColor: 'lightgrey' }}
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
