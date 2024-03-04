import { useEffect, useState } from 'react';
import ShopItem from './ShopItem';
import {
  IconStyled,
  IconStyledTwo,
  ItemsStyled,
  SortBtnsStyled,
} from './ShopItem.styled';
import { Button } from './Shops.styled';

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
        <Button onClick={downItems}>
          Price <IconStyled />
        </Button>
        <Button onClick={upItems}>
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
