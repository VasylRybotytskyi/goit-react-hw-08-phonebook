import { configureStore } from '@reduxjs/toolkit'; // Імпорт функції configureStore з Redux Toolkit
import { authReduser } from './Authorization/authSlice'; // Імпорт редюсера authReduser з файлу authSlise.js
import { contactsReduser } from './Contacts/contactsSlice'; // Імпорт редюсера contactsReduser з файлу contactsSlice.js
import { filterReducer } from './Contacts/filterSlice'; // Імпорт редюсера filterReducer з файлу filterSlice.js
import storage from 'redux-persist/lib/storage'; // Імпорт модуля storage з redux-persist для роботи з локальним сховищем
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'; // Імпорт функцій та констант з redux-persist

// Конфігурація для redux-persist
const persistConfig = {
  key: 'auth', // Ключ для збереження даних в локальному сховищі
  storage, // Використовуємо підключений модуль storage
  whitelist: ['token'], // Вказуємо, які дані зберігати в локальному сховищі
};

// Створення Redux store з використанням Redux Toolkit
export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReduser), // Використовуємо persistReducer для збереження стану authReduser в локальному сховищі
    filter: filterReducer, // Редюсер filterReducer
    contacts: contactsReduser, // Редюсер contactsReduser
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], // Ігноруємо певні дії, щоб уникнути помилок серіалізації
      },
    }),
});

export const persistor = persistStore(store); // Створення persistor для Redux store
