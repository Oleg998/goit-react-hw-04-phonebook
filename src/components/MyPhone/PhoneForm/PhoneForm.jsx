import { useState, useMemo } from 'react';
import { nanoid } from 'nanoid';
import css from './PhoneForm.module.css';

const INITIAL_STATE = {
  contacts: [],
  filter: '',
  name: '',
  number: '',
};

const PhoneForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...INITIAL_STATE });
  const nameId = useMemo(()=>nanoid(),[]);
  const numbId = useMemo(() => nanoid(), []);

  const handelChange = ({ target }) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });
  };

  const handelSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ ...INITIAL_STATE });
  };
  const { name, number } = state;
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
};

export default PhoneForm;
