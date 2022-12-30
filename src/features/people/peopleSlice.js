import { createSlice } from '@reduxjs/toolkit';
import { PEOPLE } from '../../app/shared/PEOPLE';

const initialState = {
  peopleArray: PEOPLE,
};

const peopleSlice = createSlice({
  name: 'people',
  initialState,
});

export const peopleReducer = peopleSlice.reducer;

export const selectAllPeople = (state) => {
  return state.people.peopleArray;
};

export const selectPeopleById = (id) => (state) => {
  return state.people.peopleArray.find((person) => person.id === parseInt(id));
};
