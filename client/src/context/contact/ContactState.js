import React, { useReducer } from "react";
import { v4 as uuid } from "uuid";
import contactReducer from "./contactReducer";
import contactContext from "./contactContext";

import {
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_CONTACTS,
  CLEAR_FILTER,
  CONTACT_ERROR,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Hunaid",
        email: "hunaid@gmail.com",
        phone: "111-111-1111",
        type: "personal",
      },
      {
        id: 2,
        name: "Hadi",
        email: "hadi@gmail.com",
        phone: "222-222-2222",
        type: "personal",
      },
      {
        id: 3,
        name: "Yousuf",
        email: "yousuf@gmail.com",
        phone: "333-333-3333",
        type: "professional",
      },
    ],
    current: null,
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact
  const addContact = (contact) => {
    contact.id = uuid();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  // Delete Contact
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  // Set Current Contact
  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  // Clear Current Contact
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT })
    }

  // Update Contact
    const updateContact = contact => {
        dispatch({ type: UPDATE_CONTACT, payload: contact })
    }

  // Filter Contacts

  // Clear Filter

  return (
    <contactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
      }}
    >
      {props.children}
    </contactContext.Provider>
  );
};

export default ContactState;
