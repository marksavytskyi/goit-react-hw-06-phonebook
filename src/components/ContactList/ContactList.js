import PropTypes from 'prop-types';

import { List } from './ContactList.styled';

import ContactItem from './ContactItem';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';

const ContactList = () => {
  const { contacts } = useSelector(getContacts);
  const { filter } = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <>
      <List>
        {contacts.map(({ number, name, id }) => {
          const filterCondition = name
            .toUpperCase()
            .includes(filter.toUpperCase());

          return (
            filterCondition && (
              <ContactItem
                key={id}
                name={name}
                number={number}
                handleDelete={() => dispatch(deleteContact(id))}
              ></ContactItem>
            )
          );
        })}
      </List>
    </>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(Object),
  filter: PropTypes.string,
};
