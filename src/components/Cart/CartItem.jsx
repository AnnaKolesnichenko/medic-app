import { AboutItemDiv, CartImage, CartLi, CartTitle } from './CartItem.styled';
import { TbTriangleFilled, TbTriangleInvertedFilled } from 'react-icons/tb';

const CartItem = ({ item, id }) => {
  return (
    <CartLi key={item.id}>
      <div>
        <CartImage src={item.image} alt={item.title} />
      </div>
      <AboutItemDiv>
        <CartTitle>{item.title}</CartTitle>
        <span>{item.price}</span>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <span>{item.quantity}</span>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <TbTriangleFilled />
            <TbTriangleInvertedFilled />
          </div>
        </div>
      </AboutItemDiv>
    </CartLi>
  );
};

export default CartItem;
