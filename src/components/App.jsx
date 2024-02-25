import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { ContactForm } from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './ContactFilter/ContactFilter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (name, number) => {

const { contacts } = this.state;

if (contacts.find(contact => contact.name === name)) {
  Report.warning('Warning!', `${name} is already in contacts.`, 'Okay');
  return;
}

if (contacts.find(contact => contact.number === number)) {
  Report.warning('Warning!', `${number} is already in contacts.`, 'Okay');
  return;
}

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  changeFilter = ({ target }) => {
    this.setState({ filter: target.value });
  };

  getContactsFromData = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const contactData = this.getContactsFromData();

    return (
      <>
        <ContactForm onSubmit={this.addContact} />
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={contactData}
          onDeleteContact={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
