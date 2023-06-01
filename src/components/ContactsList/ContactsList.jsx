import { ListButton, ListItem } from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContact, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

export default function ContactsList() {
  const contacts = useSelector(getContact);

  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const filterContact = contacts.items.filter(contact => {
    return contact.name.toLowerCase().includes(filter);
  });

  return (
    <ul>
      {filterContact.map(({ id, name, phone }) => {
        return (
          <ListItem key={id}>
            <span>
              {name}: {phone}
            </span>
            <ListButton onClick={() => dispatch(deleteContact(id))}>
              Delete
            </ListButton>
          </ListItem>
        );
      })}
    </ul>
  );
}
