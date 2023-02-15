import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from '../../redux/contacts/operations';
import { fetchContacts } from '../../redux/contacts/selectors';
import styles from './ContactsList.module.css';

export const ContactsList = () => {
  const contacts = useSelector(fetchContacts);

  const dispatch = useDispatch();
  const onDeleteContact = e => {
    dispatch(deleteContacts(e.target.dataset.id));
  };

  return (
    <div className={styles.box}>
      <ul className={styles.list}>
        {contacts.map(({ id, name, number }) => {
          return (
            <li key={id} className={styles.item}>
              <p className={styles.text}>{`${name} : ${number}`}</p>
              <button
                className={styles.btn}
                onClick={onDeleteContact}
                type="button"
                data-id={id}
              >
                Delete contact
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
