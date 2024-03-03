import { SubmitButton, SubmitContainer } from './Cart.styled';
import CartItems from './CartItems';
import UserForm from './UserForm';

const Cart = () => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <UserForm />
        <CartItems />
      </div>
      <SubmitContainer>
        <h2>Total price:</h2>
        <span></span>
        <SubmitButton type="submit">Submit</SubmitButton>
      </SubmitContainer>
    </>
  );
};

export default Cart;
