import { useSelector } from 'react-redux';
import { Container } from './UserForm.styled';
import CartItem from './CartItem';
import { CartList, CartTitle } from './CartItems.styled';

const CartItems = ({ getProductsPicked }) => {
  const products = useSelector(state => state.cart.cartItems);

  getProductsPicked(products);
  return (
    <Container>
      <CartTitle>Cart Items:</CartTitle>
      <CartList>
        {products.map(item => (
          <CartItem item={item} />
        ))}
      </CartList>
    </Container>
  );
};

export default CartItems;
