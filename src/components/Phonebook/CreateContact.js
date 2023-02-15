import { useState } from 'react';
import toast from 'react-hot-toast';
import { selectContacts } from '../../redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from '../../redux/contacts/operations';
import styles from './CreateContact.module.css';

const shortid = require('shortid');

export function PhonebookForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);

  const onAddContacts = e => {
    e.preventDefault();

    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };

    const normalizeName = newContact.name.toLowerCase();
    const isNameInContact = contacts.find(
      newContact => newContact.name.toLowerCase() === normalizeName
    );
    isNameInContact
      ? toast.success(`${newContact.name} is already in contacts`)
      : dispatch(addContacts(newContact));
    reset();
  };

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case `name`:
        setName(value);
        break;
      case `number`:
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.form} onSubmit={onAddContacts}>
      <h3 className={styles.label}>Phonebook</h3>
      <input
        className={styles.input}
        text="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <input
        className={styles.input}
        placeholder="Number "
        type="tel"
        value={number}
        onChange={handleChange}
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button className={styles.btn} type="submit">
        Add contact
      </button>
    </form>
  );
}
