import { useDispatch, useSelector } from 'react-redux';
import {
  ImageStyled,
  ItemStyled,
  PriceStyled,
  TitleStyled,
} from './ShopItem.styled';
import { addItemToCart } from '../../store/cart-slice';

const ShopItem = ({ shop, index }) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cartItems);
  //console.log(cart);

  return (
    <ItemStyled key={index}>
      <ImageStyled src={shop.image} alt={shop.title} />
      <TitleStyled>{shop.title}</TitleStyled>
      <PriceStyled>{shop.price}</PriceStyled>
      <button
        onClick={() => {
          console.log(shop.id);
          dispatch(addItemToCart(shop.id));
        }}
      >
        Buy
      </button>
    </ItemStyled>
  );
};

export default ShopItem;
