import { createSlice } from '@reduxjs/toolkit';
import { logOut } from 'redux/Authorization/operations';

// Створення slice (зрізу) з використанням createSlice з Redux Toolkit
export const filterSlice = createSlice({
  name: 'filter', // Назва зрізу
  initialState: '', // Початковий стан для filter
  reducers: {
    filtration: (state, action) => {
      return (state = action.payload); // Редуктор, який змінює значення filter на значення з action.payload
    },
  },
  extraReducers: builder => {
    builder.addCase(logOut.fulfilled, state => {
      return (state = ''); // Редуктор, який очищує значення filter при виконанні logOut
    });
  },
});

export const { filtration } = filterSlice.actions; // Експорт action creators зі slice
export const filterReducer = filterSlice.reducer; // Експорт редюсера filterReducer
