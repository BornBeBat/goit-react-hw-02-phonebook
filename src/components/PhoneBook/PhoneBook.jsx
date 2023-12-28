import React, { Component } from 'react';
import { ContactForm } from 'components/PhoneBookForm/PhoneBookForm';

export class PhoneBook extends Component {
  constructor() {
    super();
    this.state = { contacts: [] };
  }
  handleFormSubmit = data => {
    console.log(data);
    this.state.contacts.push(data);
    console.log(this.state);
  };
  render() {
    return (
      <>
        <div>
          <h2>Phonebook</h2>
          <ContactForm onSubmit={this.handleFormSubmit} />
        </div>
      </>
    );
  }
}
