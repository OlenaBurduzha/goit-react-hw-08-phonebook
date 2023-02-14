import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectLoading } from 'redux/contacts/selectors';
import { Helmet } from 'react-helmet';
import { ContactEditor } from 'components/ContactEditor/ContactEditor';
import { ContactList } from 'components/ContactList/ContactList';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <ContactEditor />
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactList />
    </>
  );
}
