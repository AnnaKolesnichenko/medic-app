import ShopItem from './ShopItem';
import { ItemsStyled } from './ShopItem.styled';

const ShopItems = ({ items }) => {
  let shopItems = [];

  for (const value in items) {
    const shop = items[value];

    shopItems.push(shop);
  }

  return (
    <div>
      <ItemsStyled>
        {shopItems.map(shop => (
          <ShopItem shop={shop} key={shop.id} />
        ))}
      </ItemsStyled>
    </div>
  );
};

export default ShopItems;
