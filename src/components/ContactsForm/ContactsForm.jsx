import {
  Container,
  FormLabel,
  FormInput,
  FormButton,
} from './ContactsForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContact } from 'redux/selectors';
import { addContact } from 'redux/operations';

export const ContactsForm = () => {
  const contacts = useSelector(getContact);

  const dispatch = useDispatch();

  const handleAddContact = ({ name, phone }) => {
    contacts.items.filter(contact => contact.name === name).length
      ? alert(` is already in contact`)
      : dispatch(addContact({ name, phone }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    const { name, phone } = e.target.elements;

    const data = {
      name: name.value,
      phone: phone.value,
    };

    handleAddContact(data);

    name.value = '';
    phone.value = '';

    // const { elements } = e.target;

    // const name = elements.name.value;
    // const phone = elements.number.value;

    // handleAddContact({ name, phone });

    // elements.name.value = '';
    // elements.number.value = '';
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <FormLabel>
          Name
          <FormInput
            type="text"
            name="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormLabel>
        <FormLabel>
          Phone
          <FormInput
            type="tel"
            name="phone"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FormLabel>

        <FormButton type="submit">Add contact</FormButton>
      </form>
    </Container>
  );
};
