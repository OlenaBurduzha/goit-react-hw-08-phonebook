import React from 'react';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import styles from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);

  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p className={styles.text}>{`${name} : ${number}`}</p>
        </li>
      ))}
    </ul>
  );
};
