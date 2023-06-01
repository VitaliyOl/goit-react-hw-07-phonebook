import { FilterInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

import debounce from 'lodash.debounce';
import { getContact } from 'redux/selectors';

export default function Filter() {
  const contacts = useSelector(getContact);

  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <FilterInput
      type="text"
      placeholder="search by name..."
      onChange={debounce(handleChange, 500)}
    ></FilterInput>
  );
}
