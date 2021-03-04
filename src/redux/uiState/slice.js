import { createSlice } from '@reduxjs/toolkit';
import InitialState from 'Src/initialState';

const slice = createSlice({
  name: 'uiState',
  initialState: InitialState.uiState,
  reducers: {},
});

export default slice;
