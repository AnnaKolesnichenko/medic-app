import { useDispatch, useSelector } from 'react-redux';
import {
  AboutItemDiv,
  CartImage,
  CartItemQuantity,
  CartLi,
  CartPrice,
  CartTitle,
  IconStyled,
  IconStyledTwo,
  QuantitySpan,
} from './CartItem.styled';

import { handleDecreaseItem, handleIncreaseItem } from 'store/cart-slice';

const CartItem = ({ item, id }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

  const handleAddItems = () => {
    dispatch(handleIncreaseItem(item.id));
  };

  const handleRemoveItems = () => {
    dispatch(handleDecreaseItem(item.id));
  };
  return (
    <CartLi key={item.id}>
      <div>
        <CartImage src={item.image} alt={item.title} />
      </div>
      <AboutItemDiv>
        <CartTitle>{item.title}</CartTitle>
        <CartPrice>${item.price * item.quantity}</CartPrice>
        <CartItemQuantity>
          <QuantitySpan>{item.quantity}</QuantitySpan>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {cartItems && <IconStyled onClick={handleAddItems} />}
            {cartItems && <IconStyledTwo onClick={handleRemoveItems} />}
          </div>
        </CartItemQuantity>
      </AboutItemDiv>
    </CartLi>
  );
};

export default CartItem;
