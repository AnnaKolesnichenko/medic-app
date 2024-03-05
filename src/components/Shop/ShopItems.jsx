import { useEffect, useState } from 'react';
import ShopItem from './ShopItem';
import {
  IconStyled,
  IconStyledTwo,
  ItemsStyled,
  SortBtnsStyled,
} from './ShopItem.styled';
import { Button } from './Shops.styled';
import { motion } from 'framer-motion';

const initial = { color: '#35484f', backgroundColor: '#b4c0c4' };
const hover = {
  scale: 1.1,
  color: 'pink',
  backgroundColor: 'purple',
};

const transition = { type: 'spring', stiffness: 500 };

const ShopItems = ({ items }) => {
  const [itemsShown, setItemsShown] = useState(items);

  useEffect(() => {
    setItemsShown(items);
  }, [items]);

  const upItems = () => {
    const descending = [...items].sort(
      (a, b) => parseFloat(a.price) - parseFloat(b.price)
    );
    setItemsShown(descending);
  };

  const downItems = () => {
    const ascending = [...items].sort(
      (a, b) => parseFloat(b.price) - parseFloat(a.price)
    );
    setItemsShown(ascending);
  };

  return (
    <div>
      <SortBtnsStyled>
        <Button
          onClick={downItems}
          as={motion.button}
          initial={initial}
          whileHover={hover}
          transition={transition}
        >
          Price <IconStyled />
        </Button>
        <Button
          onClick={upItems}
          as={motion.button}
          initial={initial}
          whileHover={hover}
          transition={transition}
        >
          Price <IconStyledTwo />
        </Button>
      </SortBtnsStyled>
      <ItemsStyled>
        {itemsShown.map(shop => (
          <ShopItem shop={shop} key={shop.id} />
        ))}
      </ItemsStyled>
    </div>
  );
};

export default ShopItems;
