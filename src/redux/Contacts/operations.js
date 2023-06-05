import axios from 'axios'; // Імпорт модуля axios для виконання HTTP-запитів
import { createAsyncThunk } from '@reduxjs/toolkit'; // Імпорт функції createAsyncThunk з Redux Toolkit

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/'; // Встановлення базового URL для HTTP-запитів

// Створення асинхронної thunk для отримання контактів
export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts', // Назва дії (action)
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/contacts'); // Виконання GET-запиту до /contacts
      return response.data; // Повернення отриманих даних
    } catch (e) {
      return rejectWithValue(e.message); // Повернення помилки з значенням для відхилення з помилкою
    }
  }
);

// Створення асинхронної thunk для видалення контакту
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact', // Назва дії (action)
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/contacts/${id}`); // Виконання DELETE-запиту до /contacts/{id}
      return response.data; // Повернення отриманих даних
    } catch (e) {
      return rejectWithValue(e.message); // Повернення помилки з значенням для відхилення з помилкою
    }
  }
);

// Створення асинхронної thunk для додавання контакту
export const addContact = createAsyncThunk(
  'contacts/addContact', // Назва дії (action)
  async (subscriber, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/contacts`, subscriber); // Виконання POST-запиту до /contacts з переданим об'єктом контакту
      return response.data; // Повернення отриманих даних
    } catch (e) {
      return rejectWithValue(e.message); // Повернення помилки з значенням для відхилення з помилкою
    }
  }
);

// Створення асинхронної thunk для редагування контакту
export const redactContatc = createAsyncThunk(
  'contacts/redactContatc', // Назва дії (action)
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`/contacts/${data.id}`, {
        // Виконання PATCH-запиту до /contacts/{id} з переданими полями для оновлення
        name: data.name,
        number: data.number,
      });
      return response.data; // Повернення отриманих даних
    } catch (e) {
      return rejectWithValue(e.message); // Повернення помилки з значенням для відхилення з помилкою
    }
  }
);
