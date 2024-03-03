import { useSelector } from 'react-redux';
import { Container } from './UserForm.styled';
import CartItem from './CartItem';

const CartItems = () => {
  const products = useSelector(state => state.cart.cartItems);
  console.log(products);
  return (
    <Container>
      <span>Cart Items</span>
      <ul>
        {products.map(item => (
          <CartItem item={item} />
        ))}
      </ul>
    </Container>
  );
};

export default CartItems;
