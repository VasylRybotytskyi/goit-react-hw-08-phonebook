import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/'; // Встановлення базового URL для запитів axios

const setAuthHeader = (
  token // Функція для встановлення заголовка авторизації з токеном
) => (axios.defaults.headers.common.Authorization = `Bearer ${token}`);

const cleanAuthHeader = () =>
  // Функція для очищення заголовка авторизації
  (axios.defaults.headers.common.Authorization = '');

export const register = createAsyncThunk(
  'auth/register',
  async (user, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/signup', user); // Виконання POST-запиту на створення нового користувача
      setAuthHeader(response.data.token); // Встановлення заголовка авторизації з отриманим токеном
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const loginization = createAsyncThunk(
  'auth/loginization',
  async (user, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/login', user); // Виконання POST-запиту на вхід користувача
      setAuthHeader(response.data.token); // Встановлення заголовка авторизації з отриманим токеном
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (user, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout', user); // Виконання POST-запиту на вихід користувача
      cleanAuthHeader(); // Очищення заголовка авторизації
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, { getState, rejectWithValue }) => {
    const { token } = getState().auth; // Отримання токена зі стану
    token && setAuthHeader(token); // Встановлення заголовка авторизації, якщо токен існує

    try {
      const response = await axios.get('/users/current'); // Виконання GET-запиту на отримання поточного користувача
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
