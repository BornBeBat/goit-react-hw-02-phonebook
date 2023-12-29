import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Forma, Input, Label } from './ContactForm.styled';

export class ContactForm extends Component {
  constructor() {
    super();
    this.state = { name: '', number: '' };
  }
  handleChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const id = nanoid();
    this.props.onSubmit({ id, name, number });
    console.log(this.state);
    this.setState({ name: '', number: '' });
    console.log(this.state);
  };
  render() {
    return (
      <>
        <Forma onSubmit={this.handleSubmit}>
          <Label>
            Name
            <Input
              type="text"
              name="name"
              value={this.state.name}
              required
              onChange={this.handleChange}
            />
          </Label>
          <Label>
            Number
            <Input
              type="tel"
              name="number"
              value={this.state.number}
              required
              onChange={this.handleChange}
            />
          </Label>
          <button type="submit">Add contact</button>
        </Forma>
      </>
    );
  }
}
