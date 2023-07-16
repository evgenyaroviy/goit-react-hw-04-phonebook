import PropTypes from "prop-types";
import css from "./phonebook.module.css"
import { useState } from "react";
import { nanoid } from 'nanoid';


export const ContactForm = ({ contacts, onCreateContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

    const submitForm = e => {
      console.log(e);
    e.preventDefault();
    let contactExists = false;

    contacts.forEach(contact => {
      if (contact.name === name) {
        contactExists = true;
      }
    });

    if (contactExists) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    onCreateContact(newContact);

    setName('');
    setNumber('');
  };

  const handleChange = e => {
    if (e.target.name === "name") {
      setName(e.target.value);
    }
    if (e.target.name === "number") {
      setNumber(e.target.value);
    }
  };

        return (
            <div>
                <form className={css.form} onSubmit={submitForm}>
                    <label> Name
                        <input
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                            value={name}
                            onChange={handleChange}
                        />
                    </label>
                    <label> Number
                        <input
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                            value={number}
                            onChange={handleChange}
                        />
                    </label>
                    <button className={css.button}>Add contact</button>
                </form>
            </div>
        )
    }



ContactForm.propTypes = {
    contacts: PropTypes.array.isRequired,
    onCreateContact: PropTypes.func.isRequired,
};