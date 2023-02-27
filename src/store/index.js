import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import categoryReducer from './category/categorySlice';
import productsReducer from './category/productsSlice';
import orderReducer, { localStorageMiddlware } from './order/orderSlice';

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    products: productsReducer,
    order: orderReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(localStorageMiddlware);
  },
});
