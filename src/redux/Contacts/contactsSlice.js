import { createSlice } from '@reduxjs/toolkit'; // Імпорт функції createSlice з Redux Toolkit для створення редюсера

import {
  fetchContacts,
  deleteContact,
  addContact,
  redactContatc,
} from './operations'; // Імпорт функцій fetchContacts, deleteContact, addContact, redactContatc з файлу operations.js

import { toast } from 'react-toastify'; // Імпорт модуля toast з react-toastify для показу повідомлень
import 'react-toastify/dist/ReactToastify.css'; // Імпорт CSS-стилів для react-toastify
import { logOut } from 'redux/Authorization/operations'; // Імпорт функції logOut з файлу operations.js в папці redux/Authorization

// Функція, яка встановлює значення isLoading в true і очищує поле error у стані
const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

// Функція, яка обробляє випадок відхилення (rejected) зі значенням помилки
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;

  // Виклик функції toast.error з повідомленням про помилку
  toast.error(
    `${action.payload}` === 'Network Error'
      ? `${action.payload}`
      : 'Something went wrong. Check your data and try again'
  );
};

// Створення редюсера з використанням createSlice з Redux Toolkit
const contactSlise = createSlice({
  name: 'contacts',
  initialState: {
    items: [], // Початковий стан для політура items
    isLoading: false, // Початковий стан для політура isLoading
    error: null, // Початковий стан для політура error
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending) // Обробка випадку pending для fetchContacts
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      }) // Обробка випадку fulfilled для fetchContacts
      .addCase(fetchContacts.rejected, handleRejected) // Обробка випадку rejected для fetchContacts

      .addCase(deleteContact.pending, handlePending) // Обробка випадку pending для deleteContact
      .addCase(deleteContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          task => task.id === action.payload.id
        );
        state.items.splice(index, 1);
        state.isLoading = false;
        state.error = null;
      }) // Обробка випадку fulfilled для deleteContact
      .addCase(deleteContact.rejected, handleRejected) // Обробка випадку rejected для deleteContact

      .addCase(addContact.pending, handlePending) // Обробка випадку pending для addContact
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.unshift(action.payload);
        state.isLoading = false;
        state.error = null;
      }) // Обробка випадку fulfilled для addContact
      .addCase(addContact.rejected, handleRejected) // Обробка випадку rejected для addContact

      .addCase(redactContatc.pending, handlePending) // Обробка випадку pending для redactContatc
      .addCase(redactContatc.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          task => task.id === action.payload.id
        );
        state.items.splice(index, 1);
        state.items.unshift(action.payload);
        state.isLoading = false;
        state.error = null;
      }) // Обробка випадку fulfilled для redactContatc
      .addCase(redactContatc.rejected, handleRejected) // Обробка випадку rejected для redactContatc
      .addCase(logOut.fulfilled, state => {
        state.items = [];
        state.error = null;
        state.isLoading = false;
      }); // Обробка випадку fulfilled для logOut
  },
});

export const contactsReduser = contactSlise.reducer; // Експорт редюсера contactsReduser
