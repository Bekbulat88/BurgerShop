import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { API_URI, POSTFIX } from '../../const';

const initialState = {
  category: [],
  error: '',
  activeCategory: 0,
};

export const categoryRequestAsync = createAsyncThunk('category/fetch', async () => {
  // return fetch(`${API_URI}${POSTFIX}/category`)
  //   .then((req) => req.json())
  //   .catch((error) => ({ error }));
  let promise = await fetch(`${API_URI}${POSTFIX}/category`);
  let response = await promise.json();
  return response;
});

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    changeCategory(state, action) {
      state.activeCategory = action.payload.indexCategory;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(categoryRequestAsync.pending, (state) => {
        state.error = '';
      })
      .addCase(categoryRequestAsync.fulfilled, (state, action) => {
        state.category = action.payload;
        state.error = '';
      })
      .addCase(categoryRequestAsync.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
  //   {
  //     [categoryRequestAsync.pending.type]: (state) => {
  //       state.error = '';
  //     },
  //     [categoryRequestAsync.fulfilled.type]: (state, action) => {
  //       state.error = '';
  //       state.category = action.payload;
  //     },
  //     [categoryRequestAsync.rejected.type]: (state, action) => {
  //       state.error = action.payload.error;
  //     },
  //   },
});

export const { changeCategory } = categorySlice.actions;
export default categorySlice.reducer;
