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
    clearAllItems(state, action) {
      state.allItems = [];
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find(item => item.id === id);

      if (existingItem) {
        state.cartItems.splice(existingItem, 1);
      }
    },
    handleLiked(state, action) {
      const id = action.payload;
      const product = state.allItems.find(item => item.id === id);
      const existingLiked = state.itemsLiked.find(item => item.id === id);

      if (existingLiked) {
        state.itemsLiked.splice(existingLiked, 1);
      }

      if (product) {
        const existingItem = state.itemsLiked.findIndex(item => item.id === id);
        if (existingItem !== -1) {
          state.itemsLiked.splice(existingItem, 1);
          //product.isLiked = false;
        } else {
          const product = state.allItems.find(item => item.id === id);
          if (product) {
            state.itemsLiked.push({ ...product, isLiked: true });
            //product.isLiked = true;
          }
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
  clearAllItems,
  removeItemFromCart,
  addItems,
  handleLiked,
} = CartSlice.actions;
export const cartSlice = CartSlice.reducer;
