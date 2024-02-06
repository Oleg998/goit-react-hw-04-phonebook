import { useState, useEffect, useRef } from 'react';

import { nanoid } from 'nanoid';

import PhoneForm from './MyPhone/PhoneForm/PhoneForm';

import PhoneList from './MyPhone/PhoneList/PhoneList';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const data = JSON.parse(localStorage.getItem('myPhoneBook'));
    return data || [];
  });

  const firstRender = useRef(true);

  useEffect(() => {
    if(!firstRender.current){
    localStorage.setItem('myPhoneBook', JSON.stringify(contacts))};
  }, [contacts]);

  useEffect(() =>{ (firstRender.current = false)}, []);

  const [filter, setFilter] = useState('');

  const isDulecate = ({ name }) => {
    const normalazeName = name.toLowerCase();
    const dublicate = contacts.find(item => {
      const normalizedCurrentName = item.name.toLowerCase();
      return normalazeName === normalizedCurrentName;
    });
    return Boolean(dublicate);
  };

  const addForPhenebook = data => {
    if (isDulecate(data)) {
      return alert(`Name {data.name} and ${data.number} already in Phonebook`);
    }
    setContacts(prevContacts => {
      const newContact = { id: nanoid(), ...data };
      return [...contacts, newContact];
    });
  };

  const deleteName = id => {
    setContacts(prevContacts => prevContacts.filter(item => item.id !== id));
  };
  const handelSearce = ({ target }) => {
    setFilter(target.value);
  };
  const getFilerName = () => {
    if (!filter) {
      return contacts;
    }
    const normalazeNameFilter = contacts.filter.toLowerCase();
    const filterName = contacts.filter(({ name }) => {
      const filterCurentName = name.toLowerCase();
      return filterCurentName.includes(normalazeNameFilter);
    });
    return filterName;
  };

  const items = getFilerName();
  return (
    <div>
      <PhoneForm onSubmit={addForPhenebook} />

      <PhoneList
        items={items}
        deleteName={deleteName}
        handelSearce={handelSearce}
      />
    </div>
  );
};
