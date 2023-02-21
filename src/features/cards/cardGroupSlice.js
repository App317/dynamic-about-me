import { createSlice } from '@reduxjs/toolkit';
import { CARDGROUP } from '../../app/shared/CARDGROUP';

const initialState = {
  cardGroupArray: CARDGROUP,
};

const cardGroupSlice = createSlice({
  name: 'cardGroup',
  initialState,
});

export const cardGroupReducer = cardGroupSlice.reducer;

export const selectAllCards = (state) => {
  return state.cardGroup.cardGroupArray;
};

export const selectCardById = (id) => (state) => {
  return state.cardGroup.cardGroupArray.find(
    (card) => card.id === parseInt(id)
  );
};
