import Filter from './Filter';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

const App = () => {
  return (
    <div
      style={{
        width: '600px',
        borderRadius: '5px',
        margin: '0 auto 0 auto',
        color: '#010101',
        padding: '40px',
        backgroundColor: 'white',
      }}
    >
      <h2 style={{ textAlign: 'center' }}>Phonebook</h2>

      <ContactForm></ContactForm>

      <h2 style={{ textAlign: 'center' }}>Contacts:</h2>

      <Filter></Filter>

      <ContactList></ContactList>
    </div>
  );
};

export default App;
