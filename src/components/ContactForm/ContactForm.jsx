import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  contactNameId = nanoid();
  contactNumberId = nanoid();

  handleChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    const { name, number } = this.state;
    e.preventDefault();
    this.props.onSubmit(name, number);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="mb-3">
          <label htmlFor={this.contactNameId} className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
            id={this.contactNameId}
            className="form-control"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor={this.contactNumberId} className="form-label">
            Number
          </label>
          <input
            type="tel"
            name="number"
            onChange={this.handleChange}
            value={this.state.number}
            id={this.contactNumberId}
            disabled={!this.state.name}
            className="form-control"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={!this.state.name || !this.state.number}
        >
          Add contact
        </button>
      </form>
    );
  }
}
