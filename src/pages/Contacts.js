import { Helmet } from 'react-helmet';
import { PhonebookForm } from '../components/Phonebook/CreateContact';
import { ContactsList } from '../components/Contacts/ContactsList';
import { Filter } from '../components/Filter/Filter';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchContacts } from '../redux/contacts/operations';
import { selectIsLoading } from '../redux/contacts/selectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <PhonebookForm />

      <Filter />
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactsList />
    </>
  );
};

export default Contacts;
