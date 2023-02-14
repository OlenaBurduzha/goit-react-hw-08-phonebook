import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './ContactsFilter.module.css';
import { setQuery } from 'redux/contacts/slice.contacts';

export const ContactsFilter = () => {
  const dispatch = useDispatch();
  const onQueryChenged = query => {
    dispatch(setQuery(query));
  };

  return (
    <>
      <h4 className={styles.label}>Find your contact by name</h4>
      <input
        className={styles.input}
        type="text"
        name="filter"
        placeholder="Enter contact name"
        onChange={e => onQueryChenged(e.target.value)}
      />
    </>
  );
};
