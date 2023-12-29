import React, { Component } from 'react';
import { ListItem } from './ListItem/ListItem';

export class ContactList extends Component {
  handleClick = event => {
    this.props.onClick(event.target.dataset.id);
  };
  render() {
    return (
      <ul>
        {this.props.contacts.map(elem => {
          return (
            <ListItem
              elem={elem}
              onClick={this.handleClick}
              key={elem.id}
              filter={this.props.filter}
            />
          );
        })}
      </ul>
    );
  }
}
