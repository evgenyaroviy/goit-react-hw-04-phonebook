import { useState, useEffect } from "react";
import { ContactForm } from "./Phonebook/ContactForm";
import { ContactList } from "./Contacts/ContactList";
import { Filter } from "./Filter/Filter";
import { NotificationMessage } from "./NotificationMessage/NotificationMessage";


export const App = () => {

  const [contacts, setContacts] = useState(() => JSON.parse(localStorage.getItem('contacts')) || []);
  const [filtered, setFiltered] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const submitForm = newContact => {
    setContacts([...contacts, newContact]);
  };

  const filterContact = e => {
    setFiltered(e.target.value);
  };

  const delContact = contactId => {
    
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filtered.toLowerCase())
    );
    return (
      <div>

        <h1>Phonebook</h1>
        <ContactForm
          contacts={contacts}
          onCreateContact={submitForm}
        />


        <h2>Contacts</h2>
        {contacts.length !== 0 ? (
          <>
            <Filter contacts={[contacts, filtered]} onChangeFilter={filterContact} />
            <ContactList
              filteredContacts={filteredContacts}
              delContact={delContact}
            />
          </>
        ) : (
          <NotificationMessage />
        )}

      </div >
    );
  
}