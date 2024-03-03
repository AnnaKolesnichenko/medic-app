import { CartImage, CartLi, CartTitle } from './CartItem.styled';

const CartItem = ({ item, id }) => {
  return (
    <CartLi key={item.id}>
      <div>
        <CartImage src={item.image} alt={item.title} />
      </div>
      <div>
        <CartTitle>{item.title}</CartTitle>
        <span>{item.price}</span>
        <div>{item.quantity}</div>
      </div>
    </CartLi>
  );
};

export default CartItem;
