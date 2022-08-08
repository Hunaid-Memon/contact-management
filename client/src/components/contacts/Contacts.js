import React, { Fragment, useContext } from "react";
import ContactContext from "../../context/contact/contactContext";
import ContactItem from "./ContactItem";

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered } = contactContext;

  if (contacts.length === 0) {
    return <h4>Please use the form to add a contact.</h4>;
  }

  return (
    <Fragment>
      {filtered !== null
        ? filtered.map((contact, index) => (
            <ContactItem key={index} contact={contact} />
          ))
        : contacts.map((contact, index) => (
            <ContactItem key={index} contact={contact} />
          ))}
    </Fragment>
  );
};

export default Contacts;
