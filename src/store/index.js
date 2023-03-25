import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import categoryReducer from './category/categorySlice';
import productsReducer from './category/productsSlice';
import orderReducer, { localStorageMiddlware } from './order/orderSlice';
import modalReducer from './modalDelivery/modalDeliverySlice';
import formDeliveryReducer from './formDelivery/formDeliverySlice';

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    products: productsReducer,
    order: orderReducer,
    modal: modalReducer,
    form: formDeliveryReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(localStorageMiddlware);
  },
});
