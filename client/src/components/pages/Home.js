import React from 'react'
import ContactForm from '../contacts/ContactForm';
import Contacts from '../contacts/Contacts'
import FilterContact from '../contacts/FilterContact';

const Home = props => {
  return (
    <div className="grid-2">
      <div>
        <ContactForm />
      </div>
      <div>
        <FilterContact />
        <Contacts />
      </div>
    </div>
  );
}

export default Home