import { useDispatch, useSelector } from 'react-redux';
import {
  AboutStyled,
  ButtonStyled,
  ImageStyled,
  ItemStyled,
  MedicineLikedStyled,
  PriceStyled,
  TitleStyled,
} from './ShopItem.styled';
import { addItemToCart, handleLiked } from '../../store/cart-slice';
import { motion } from 'framer-motion';
import Notiflix from 'notiflix';

const ShopItem = ({ shop, index }) => {
  const dispatch = useDispatch();
  const favoured = useSelector(state => state.cart.itemsLiked);

  const handleToggleLiked = () => {
    dispatch(handleLiked(shop.id));
  };

  const included = favoured.map(item => item.id).includes(shop.id);

  const checkAddedToCart = () => {
    Notiflix.Notify.success('Congrats! Your product was added to the cart!');
  };

  return (
    <ItemStyled key={index}>
      <MedicineLikedStyled
        onClick={handleToggleLiked}
        color={included ? 'pink' : '#b4c0c4'}
      />
      <ImageStyled src={shop.image} alt={shop.title} />
      <AboutStyled>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <TitleStyled>{shop.title}</TitleStyled>
          <PriceStyled>${shop.price}</PriceStyled>
        </div>
        <ButtonStyled
          as={motion.button}
          whileHover={{ scale: 1.1, backgroundColor: 'purple', color: 'pink' }}
          transition={{ type: 'spring', duration: 0.3, stiffness: 400 }}
          onClick={() => {
            dispatch(addItemToCart(shop.id));
            checkAddedToCart();
          }}
        >
          add to Cart
        </ButtonStyled>
      </AboutStyled>
    </ItemStyled>
  );
};

export default ShopItem;
