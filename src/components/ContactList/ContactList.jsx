import React, { Component } from 'react';
import { ListItem } from './ListItem/ListItem';
import { List } from './ContactList.styled';

export class ContactList extends Component {
  handleClick = event => {
    this.props.onClick(event.target.dataset.id);
  };
  render() {
    return (
      <List>
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
      </List>
    );
  }
}
