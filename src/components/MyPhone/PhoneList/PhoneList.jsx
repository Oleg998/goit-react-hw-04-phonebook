import css from "./PhoneList.module.css"

const PhoneList = ({ items, deleteName, handelSearce }) => {
  const elements = items.map(({ id, name, number }) => (
    <li key={id}>
      {name} :{number}
      <button
        onClick={() => deleteName(id)}
        type="button"
        className={css.btn_delete}
      >
        Delete
      </button>
    </li>
  ));

  return (
    <div className={css.wrapper} >
      <h2>Contacts</h2>
      <p> Find Cotacts by Name</p>
      <input
        name="filter"
        onChange={handelSearce}
        placeholder="Searce Name"
      ></input>
      <ul className={css.phone_list}>{elements}</ul>
    </div>
  );
}; 


export default PhoneList