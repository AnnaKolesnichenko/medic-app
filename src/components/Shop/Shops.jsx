import { AnimatePresence, motion } from 'framer-motion';
import {
  Button,
  ContainerStyled,
  ListStyled,
  TitleStyled,
} from './Shops.styled';
import { useDispatch } from 'react-redux';
import { clearAllItems } from 'store/cart-slice';

const initial = { color: '#35484f', backgroundColor: '#b4c0c4' };
const hover = {
  scale: 1.1,
  color: 'pink',
  backgroundColor: 'purple',
};

const transition = { type: 'spring', stiffness: 500 };

const Shops = ({ onButtonClick }) => {
  const dispatch = useDispatch();

  return (
    <ContainerStyled>
      <TitleStyled>Shops</TitleStyled>
      <AnimatePresence>
        <ListStyled>
          <li>
            {' '}
            <Button
              type="button"
              as={motion.button}
              initial={initial}
              whileHover={hover}
              transition={transition}
              onClick={() => {
                onButtonClick('Drug24');
                dispatch(clearAllItems());
              }}
            >
              Drug 24
            </Button>
          </li>
          <li>
            <Button
              as={motion.button}
              initial={initial}
              whileHover={hover}
              transition={transition}
              type="button"
              onClick={() => {
                onButtonClick('Pharmacy');
                dispatch(clearAllItems());
              }}
            >
              Pharmacy
            </Button>
          </li>
          <li>
            <Button
              type="button"
              as={motion.button}
              initial={initial}
              whileHover={hover}
              transition={transition}
              onClick={() => {
                onButtonClick('EDrug');
                dispatch(clearAllItems());
              }}
            >
              E-drug
            </Button>
          </li>
          <li>
            <Button
              type="button"
              as={motion.button}
              initial={initial}
              whileHover={hover}
              transition={transition}
              onClick={() => {
                onButtonClick('StayWell');
                dispatch(clearAllItems());
              }}
            >
              StayWell
            </Button>
          </li>
          <li>
            <Button
              type="button"
              as={motion.button}
              initial={initial}
              whileHover={hover}
              transition={transition}
              onClick={() => {
                onButtonClick('Medical');
                dispatch(clearAllItems());
              }}
            >
              24/7
            </Button>
          </li>
        </ListStyled>
      </AnimatePresence>
    </ContainerStyled>
  );
};

export default Shops;
