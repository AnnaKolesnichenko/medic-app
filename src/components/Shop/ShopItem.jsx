import { useDispatch } from 'react-redux';
import {
  AboutStyled,
  ButtonStyled,
  ImageStyled,
  ItemStyled,
  PriceStyled,
  TitleStyled,
} from './ShopItem.styled';
import { addItemToCart } from '../../store/cart-slice';
import { motion } from 'framer-motion';

const ShopItem = ({ shop, index }) => {
  const dispatch = useDispatch();

  return (
    <ItemStyled key={index}>
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
          }}
        >
          add to Cart
        </ButtonStyled>
      </AboutStyled>
    </ItemStyled>
  );
};

export default ShopItem;
