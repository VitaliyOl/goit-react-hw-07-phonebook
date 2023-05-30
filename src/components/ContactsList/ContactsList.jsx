import React from 'react';
import { ListButton, ListItem } from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { removeContacts } from 'redux/contactSlice';
import { getContact, getFilter } from 'redux/selectors';

export default function ContactsList() {
  const contacts = useSelector(getContact);

  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const deleteContacts = id => {
    dispatch(removeContacts(id));
  };

  const filterContact = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter);
  });

  return (
    <ul>
      {filterContact.map(contact => {
        return (
          <ListItem key={contact.id}>
            <span>
              {contact.name}: {contact.number}
            </span>
            <ListButton onClick={() => deleteContacts(contact.id)}>
              Delete
            </ListButton>
          </ListItem>
        );
      })}
    </ul>
  );
}
