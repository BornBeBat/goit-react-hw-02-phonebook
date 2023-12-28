import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  constructor() {
    super();
    this.state = { name: '', number: '' };
  }
  handleChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
    console.log(this.state);
  };
  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const id = nanoid();
    this.props.onSubmit({ name, number, id });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            required
            onChange={this.handleChange}
          />
        </label>
        <label>
          Phone
          <input
            type="tel"
            name="number"
            required
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
