import { createSlice } from '@reduxjs/toolkit';

const homeMenuSlice = createSlice({
  name: 'homeMenu',
  initialState: {
    hoverText: null,
    opacity: [1, 1, 1, 1],
  },
  reducers: {
    setHoverText: (state, action) => {
      state.hoverText = action.payload;
      state.opacity[action.payload] = 1; //update opacity for hovered elements
    },
    clearHoverText: (state) => {
      state.hoverText = null;
      state.opacity = [1, 1, 1, 1]; //reset opacity
    },
    setOpacity: (state, action) => {
      state.opacity = action.payload;
    },
  },
});

export const homeMenuReducer = homeMenuSlice.reducer;

export const { setHoverText, clearHoverText, setOpacity } =
  homeMenuSlice.actions;

export const handleHover = (index) => (dispatch) => {
  dispatch(setHoverText(index));
};

export const handleLeave = () => (dispatch) => {
  dispatch(clearHoverText());
  dispatch(setOpacity(1));
};
