import React, { useEffect } from 'react';
import { ListButton, ListItem } from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { removeContacts } from 'redux/contactSlice';
import { getContact, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

export default function ContactsList() {
  const contacts = useSelector(getContact);

  console.log(contacts);

  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  // const filterContact = contacts.filter(contact => {
  //   return contact.name.toLowerCase().includes(filter);
  // });

  return (
    <ul>
      {/* {contacts.map(({ id, name, phone }) => (
        <ListItem key={id}>
          <span>
            {name}: {phone}
          </span>
          <ListButton onClick={() => dispatch(deleteContact(id))}>
            Delete
          </ListButton>
        </ListItem>
      ))} */}

      {/* {filterContact.map(contact => {
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
      })} */}
    </ul>
  );
}
