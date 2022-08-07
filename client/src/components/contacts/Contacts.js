import React, { Fragment, useContext } from "react";
import ContactContext from "../../context/contact/contactContext";
import ContactItem from "./ContactItem";

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts } = contactContext;

  if (contacts === '') return <h3>Loading...</h3>

  return (
    <Fragment>
      {contacts.map((contact, index) => (
        <ContactItem key={index} contact={contact} />
      ))}
    </Fragment>
  );
};

export default Contacts;
