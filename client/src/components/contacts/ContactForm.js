import React, { useContext, useEffect, useState } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {

  const contactContext = useContext(ContactContext);
  const { addContact, current, updateContact, clearCurrent} = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current)
    } else {
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "personal",
      });
    }
  }, [contactContext, current])

    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
    })

    const { name, email, phone, type } = contact;

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact)
    }
    clearAll();
  }
  const clearAll = () => {
    clearCurrent()
  }

    const onChange = e => setContact({...contact, [e.target.name]: e.target.value})

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">{ !current ? 'Add Contact' : 'Edit Contact' }</h2>
      <input
        type="text"
        placeholder="Home"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Phone"
        name="phone"
        value={phone}
        onChange={onChange}
      />
      <h5>Contact Type</h5>
      <input
        type="radio"
        name="type"
        value="personal"
        checked={type === "personal"}
        onChange={onChange}
      />{" "}
      Personal{" "}
      <input
        type="radio"
        name="type"
        value="professional"
        checked={type === "professional"}
        onChange={onChange}
      />{" "}
          Professional
          <div>
              <input type='submit' value={!current ? 'Add Contact' : 'Update Contact'} className='btn btn-primary btn-block' />
      </div>
      {
        current && <button onClick={clearAll} className='btn btn-light btn-block' >Clear</button>
      }
    </form>
  );
}

export default ContactForm