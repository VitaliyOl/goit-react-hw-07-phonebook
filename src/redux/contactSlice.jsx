import { createSlice, nanoid } from '@reduxjs/toolkit';

export const contactsReducer = createSlice({
  name: 'contact',
  initialState: [],
  reducers: {
    createContact: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: data => {
        return {
          payload: {
            ...data,
            id: nanoid(),
          },
        };
      },
    },
    removeContacts(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { createContact, removeContacts } = contactsReducer.actions;
