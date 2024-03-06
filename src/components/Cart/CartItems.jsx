import { useSelector } from 'react-redux';
import { ContainerStyled } from './CartItems.styled';
import CartItem from './CartItem';
import { CartList, CartTitle } from './CartItems.styled';

const CartItems = () => {
  const products = useSelector(state => state.cart.cartItems);

  return (
    <ContainerStyled>
      <CartTitle>Cart Items:</CartTitle>

      <CartList>
        {products.map(item => (
          <CartItem item={item} />
        ))}
      </CartList>
    </ContainerStyled>
  );
};

export default CartItems;
