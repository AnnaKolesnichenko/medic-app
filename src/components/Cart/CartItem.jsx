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
import { TbTriangleFilled, TbTriangleInvertedFilled } from 'react-icons/tb';

const CartItem = ({ item, id }) => {
  return (
    <CartLi key={item.id}>
      <div>
        <CartImage src={item.image} alt={item.title} />
      </div>
      <AboutItemDiv>
        <CartTitle>{item.title}</CartTitle>
        <CartPrice>${item.price}</CartPrice>
        <CartItemQuantity>
          <QuantitySpan>{item.quantity}</QuantitySpan>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <IconStyled />
            <IconStyledTwo />
          </div>
        </CartItemQuantity>
      </AboutItemDiv>
    </CartLi>
  );
};

export default CartItem;
