import React from 'react';
import { useDispatch } from 'react-redux';
import { setQuery } from '../../redux/contacts/contacts.slice';
import styles from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const onChangeFilter = query => {
    dispatch(setQuery(query));
  };

  return (
    <div className={styles.box}>
      <form className={styles.form}>
        <p className={styles.label}>Contacts</p>
        <h4 className={styles.label}>Find your contact by name</h4>
        <input
          type="text"
          className={styles.input}
          name="filter"
          placeholder="Search"
          onChange={e => onChangeFilter(e.target.value)}
        />
      </form>
    </div>
  );
};
