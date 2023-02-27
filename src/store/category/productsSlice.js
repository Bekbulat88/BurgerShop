import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URI, POSTFIX } from '../../const';

const initialState = {
  products: [],
  error: '',
};

export const productsRequestAsync = createAsyncThunk('products/fetch', (category) => {
  return fetch(`${API_URI}${POSTFIX}/?category=${category}`)
    .then((req) => req.json())
    .catch((error) => ({ error }));
});

const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(productsRequestAsync.pending.type, (state) => {
        state.error = '';
      })
      .addCase(productsRequestAsync.fulfilled.type, (state, action) => {
        state.error = '';
        state.products = action.payload;
      })
      .addCase(productsRequestAsync.rejected.type, (state, action) => {
        state.error = action.payload.error;
      });
  },
});

export default productsSlice.reducer;
