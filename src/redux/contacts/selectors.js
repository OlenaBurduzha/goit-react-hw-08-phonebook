export const fetchContacts = state => {
  return state.contacts.contacts.filter(contact =>
    contact.name.toLowerCase().includes(state.contacts.query)
  );
};

export const selectContacts = state => state.contacts.contacts;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;
