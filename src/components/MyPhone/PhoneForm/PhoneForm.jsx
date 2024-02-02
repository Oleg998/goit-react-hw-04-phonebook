import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './PhoneForm.module.css';

const INITIAL_STATE = {
  contacts: [],
  filter: '',
  name: '',
  number: '',
};

class PhoneForm extends Component {
  state = { ...INITIAL_STATE };
  nameId = nanoid();
  numbId = nanoid();

  addForPhenebook = () => {};

  handelChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handelSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, number } = this.state;
    const { nameId, numbId, handelSubmit, handelChange } = this;
    return (
      <form onSubmit={handelSubmit} className={css.form}>
        <h1 className={css.titel}>Phonebook</h1>
        <div>
          <label htmlFor={nameId}>Name</label>
          <input
            pattern="^[a-zA-Zа-яА-Я]+(([' \\\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            value={name}
            onChange={handelChange}
            className={css.input}
            id={nameId}
            type="text"
            name="name"
            required
            placeholder="Enter you name "
          ></input>
        </div>

        <div>
          <label htmlFor={numbId}>Number </label>
          <input
            pattern="(\+?\d{1,4}[ \-]?)?(\(?\d{1,3}\)?[ \-]?)?\d{1,4}[ \-]?\d{1,4}[ \-]?\d{1,9}"
            title="Enter the correct phone number"
            value={number}
            onChange={handelChange}
            className={css.input}
            id={numbId}
            type="tel"
            name="number"
            required
            placeholder="Enter you number "
          ></input>
        </div>

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default PhoneForm;
