import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import styles from './ContactList.module.css';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const onDeleteContact = () => dispatch(deleteContact(id));

  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>
        {name}:{number}
      </p>
      <button className={styles.button} onClick={onDeleteContact} type="button">
        Delete contact
      </button>
    </div>
  );
};
