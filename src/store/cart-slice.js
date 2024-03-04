import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  allItems: [],
  itemsLiked: [],
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
    handleIncreaseItem(state, action) {
      const id = action.payload;
      const item = state.cartItems.find(item => item.id === id);
      if (item) {
        item.quantity++;
      }
    },
    handleDecreaseItem(state, action) {
      const id = action.payload;
      const itemIndex = state.cartItems.findIndex(item => item.id === id);
      if (itemIndex !== -1) {
        const item = state.cartItems[itemIndex];
        if (item.quantity === 1) {
          state.cartItems.splice(itemIndex, 1);
        } else {
          item.quantity--;
        }
      }
    },
    clearCart(state, action) {
      state.cartItems = [];
    },
    handleLiked(state, action) {
      const id = action.payload;
      const product = state.allItems.find(item => item.id === id);

      if (product) {
        const existingItem = state.itemsLiked.findIndex(item => item.id === id);
        if (existingItem !== -1) {
          state.itemsLiked.splice(existingItem, 1);
        } else {
          state.itemsLiked.push(product);
        }
      }
    },
  },
});

export const {
  addItemToCart,
  handleDecreaseItem,
  handleIncreaseItem,
  clearCart,
  addItems,
  handleLiked,
} = CartSlice.actions;
export const cartSlice = CartSlice.reducer;
