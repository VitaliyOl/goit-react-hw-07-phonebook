import { ContactsForm } from './ContactsForm/ContactsForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import { Container } from './App.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { getContact } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(getContact);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && (
        <div style={{ margin: '20px' }}>
          <b>Loading...</b>
        </div>
      )}
      {error && <b>{error}</b>}
      <ContactsList />
    </Container>
  );
};
