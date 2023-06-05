import { createSlice } from '@reduxjs/toolkit';
import { register, loginization, logOut, refreshUser } from './operations';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;

  toast.error(
    `${action.payload}` === 'Network Error'
      ? `${action.payload}`
      : 'Something went wrong. Check your data and try again'
  );
};

const authSlise = createSlice({
  name: 'auth', // Назва слайса (slice)
  initialState: {
    user: { email: null, password: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
    isLoading: false,
  },

  extraReducers: builder => {
    builder
      .addCase(register.pending, handlePending) // Обробник для pending стану реєстрації
      .addCase(register.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(register.rejected, handleRejected) // Обробник для rejected стану реєстрації

      .addCase(loginization.pending, handlePending) // Обробник для pending стану логінізації
      .addCase(loginization.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(loginization.rejected, handleRejected) // Обробник для rejected стану логінізації

      .addCase(logOut.pending, handlePending) // Обробник для pending стану виходу
      .addCase(logOut.fulfilled, state => {
        state.user = { email: null, password: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(logOut.rejected, handleRejected) // Обробник для rejected стану виходу

      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      }) // Обробник для pending стану оновлення користувача
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
      }); // Обробник для rejected стану оновлення користувача
  },
});

export const authReduser = authSlise.reducer; // Експорт редюсера auth
