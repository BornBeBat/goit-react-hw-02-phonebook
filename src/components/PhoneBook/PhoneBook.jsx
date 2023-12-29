import React, { Component } from 'react';
import { ContactForm, ContactList, Filter } from 'components';

export class PhoneBook extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
    };
  }
  updateFilter = event => {
    this.setState({ filter: event.target.value });
  };
  handleFormSubmit = data => {
    JSON.stringify(this.state.contacts).includes(data.name)
      ? alert(`${data.name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, data],
        }));
  };
  hendleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(elem => elem.id !== id),
    }));
  };
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleFormSubmit} />
        <h2>Contacts</h2>
        <Filter onChange={this.updateFilter} />
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          onClick={this.hendleDeleteContact}
        />
      </div>
    );
  }
}
