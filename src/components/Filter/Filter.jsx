import { FilterInput } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import debounce from 'lodash.debounce';

export default function Filter() {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <>
      <FilterInput
        type="text"
        placeholder="search by name..."
        onChange={debounce(handleChange, 500)}
      ></FilterInput>
    </>
  );
}
