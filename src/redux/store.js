import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactSlice';
import { filterReducer } from './filterSlice';
import storage from 'redux-persist/lib/storage';
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
// import { createAction, createReducer } from '@reduxjs/toolkit';

const persistConfig = {
  key: 'contacts',
  storage,
  whiteList: ['contacts'],
};

const rootReducer = combineReducers({
  contacts: contactsReducer.reducer,
  filter: filterReducer.reducer,
});

const contactsPersistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: contactsPersistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// export const createContact = createAction('contact/add', data => {
//   return {
//     payload: {
//       ...data,
//       id: nanoid(),
//     },
//   };
// });

// const initialState = [];

// export const removeContacts = createAction('contact/delete');

// const contactsReducer = createReducer([], {
//   [createContact]: (state, action) => {
//     state.push(action.payload);
//   },
//   [removeContacts]: (state, action) => {
//     console.log(state);
//     return state.filter(contact => contact.id !== action.payload);
//   },
// });

// export const setFilter = createAction('filter/set');

// const filterReducer = createReducer('', {
//   [setFilter]: (state, action) => {
//     // state = action.payload;
//     return (state = action.payload);
//   },
// });
