import PropTypes from "prop-types";
import css from "./phonebook.module.css"
// import { useState } from "react";
import { nanoid } from 'nanoid';


export const ContactForm = () => {
    //     name: '',
    //     number: ''
    // useState

    const submitForm = (e) => {
        e.preventDefault();
        const { name, number } = this.state;
        let contactExists = false;

        this.props.contacts.forEach(contact => {
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
        this.props.onCreateContact(newContact);
        this.setState({
            name: '',
            number: ''
        })
    }


    const handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
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
                            value={this.state.name}
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
                            value={this.state.number}
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