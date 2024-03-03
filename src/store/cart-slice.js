import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  allItems: [],
};

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItems(state, action) {
      const itemsToAdd = action.payload;
      let shopItems = [];

      for (const value in itemsToAdd) {
        const shop = itemsToAdd[value];

        shopItems.push(shop);
      }

      const existingItemsIds = state.allItems.map(item => item.id);

      const newItems = shopItems.filter(
        item => !existingItemsIds.includes(item.id)
      );

      state.allItems = state.allItems.concat(newItems);
      console.log(state.allItems);
    },
    addItemToCart(state, action) {
      const id = action.payload;
      let product = state.allItems.find(item => item.id === id);

      if (!product) {
        console.log('no product of the kind');
      }

      if (product) {
        const existingItem = state.cartItems.find(item => item.id === id);

        if (existingItem) {
          existingItem.quantity++;
        } else {
          state.cartItems.push({ ...product, quantity: 1 });
        }
      } else {
        alert('There is no such product');
      }
    },
    //     handleIncreaseItem(state, action) {
    //       const id = action.payload;
    //       const item = state.items.find((item) => item.id === id);
    //       if (item) {
    //         item.quantity++;
    //       }
    //     },
    //     handleDecreaseItem(state, action) {
    //       const id = action.payload;
    //       const itemIndex = state.items.findIndex((item) => item.id === id);
    //       if (itemIndex !== -1) {
    //         const item = state.items[itemIndex];
    //         if (item.quantity === 1) {
    //           state.items.splice(itemIndex, 1);
    //         } else {
    //           item.quantity--;
    //         }
    //       }
    //     },
    //     clearCart(state, action) {
    //       state.items = [];
    //     },
  },
});

export const {
  addItemToCart,
  handleDecreaseItem,
  handleIncreaseItem,
  clearCart,
  addItems,
} = CartSlice.actions;
export const cartSlice = CartSlice.reducer;
