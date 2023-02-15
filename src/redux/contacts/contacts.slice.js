import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContacts, deleteContacts } from './operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
    query: '',
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.contacts = payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContacts.pending]: handlePending,
    [addContacts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.contacts.push(payload);
    },
    [addContacts.rejected]: handleRejected,
    [deleteContacts.pending]: handlePending,
    [deleteContacts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.contacts = state.contacts.filter(
        contact => contact.id !== payload.id
      );
    },
    [deleteContacts.rejected]: handleRejected,
  },
});

export const { setQuery } = contactsSlice.actions;

export default contactsSlice.reducer;
