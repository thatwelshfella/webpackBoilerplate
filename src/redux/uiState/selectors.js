import { createSelector } from '@reduxjs/toolkit';

export const getUiState = state => state.uiState;

export const getTitle = createSelector(getUiState, uiState => uiState.title);
