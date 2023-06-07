import { configureStore } from '@reduxjs/toolkit';
import { authReduser } from './Authorization/authSlice';
import { contactsReduser } from './Contacts/contactsSlice';
import { filterReducer } from './Contacts/filterSlice';
import storage from 'redux-persist/lib/storage'; // це для локалстореджа
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'auth', // Ключ для збереження даних в локальному сховищі
  storage, // Використовуємо підключений модуль storage
  whitelist: ['token'], // Вказуємо, які дані зберігати в локальному сховищі
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReduser),
    filter: filterReducer,
    contacts: contactsReduser, // Редюсер contactsReduser
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
