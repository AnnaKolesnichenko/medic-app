import { AnimatePresence, motion } from 'framer-motion';
import {
  Button,
  ContainerStyled,
  ListStyled,
  TitleStyled,
} from './Shops.styled';

const Shops = ({ onButtonClick }) => {
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
              initial={{ color: 'grey', backgroundColor: 'lightgray' }}
              whileHover={{
                scale: 1.1,
                color: 'pink',
                backgroundColor: 'purple',
              }}
              transition={{ type: 'spring', stiffness: 500 }}
              onClick={() => onButtonClick('Drug24')}
            >
              Drug 24
            </Button>
          </li>
          <li>
            <Button
              as={motion.button}
              initial={{ color: 'grey', backgroundColor: 'lightgray' }}
              whileHover={{
                scale: 1.1,
                color: 'pink',
                backgroundColor: 'purple',
              }}
              transition={{ type: 'spring', stiffness: 500 }}
              type="button"
              onClick={() => onButtonClick('Pharmacy')}
            >
              Pharmacy
            </Button>
          </li>
          <li>
            <Button
              type="button"
              as={motion.button}
              initial={{ color: 'grey', backgroundColor: 'lightgray' }}
              whileHover={{
                scale: 1.1,
                color: 'pink',
                backgroundColor: 'purple',
              }}
              transition={{ type: 'spring', stiffness: 500 }}
              onClick={() => onButtonClick('EDrug')}
            >
              E-drug
            </Button>
          </li>
          <li>
            <Button
              type="button"
              as={motion.button}
              initial={{ color: 'grey', backgroundColor: 'lightgray' }}
              whileHover={{
                scale: 1.1,
                color: 'pink',
                backgroundColor: 'purple',
              }}
              transition={{ type: 'spring', stiffness: 500 }}
              onClick={() => onButtonClick('StayWell')}
            >
              StayWell
            </Button>
          </li>
          <li>
            <Button
              type="button"
              as={motion.button}
              initial={{ color: 'grey', backgroundColor: 'lightgray' }}
              whileHover={{
                scale: 1.1,
                color: 'pink',
                backgroundColor: 'purple',
              }}
              transition={{ type: 'spring', stiffness: 500 }}
              onClick={() => onButtonClick('Medical')}
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
