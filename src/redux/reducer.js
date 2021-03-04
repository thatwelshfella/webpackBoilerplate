import { configureStore } from '@reduxjs/toolkit';

import { reducer as uiStateReducer } from 'Redux/uiState';

const store = configureStore({
  reducer: { uiState: uiStateReducer },
});

export default store;
