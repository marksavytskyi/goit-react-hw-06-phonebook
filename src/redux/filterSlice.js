import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

const { createSlice } = require('@reduxjs/toolkit');

export const filterSlice = createSlice({
  name: 'filter',
  initialState: { filter: '' },
  reducers: {
    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },
});

const persistConfig = {
  key: 'filter',
  storage,
};

export const persistedFilterReducer = persistReducer(
  persistConfig,
  filterSlice.reducer
);

export const { filterContacts } = filterSlice.actions;
