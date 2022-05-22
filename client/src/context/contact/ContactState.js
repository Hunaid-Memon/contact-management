import React, { useReducer } from "react";
import uuid from 'uuid';
import contactContext from "./contactContext";
import contactReducer from './contactReducer';

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
    CONTACT_ERROR
} from '../types';

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'Hunaid',
                email: 'hunaid@gmail.com',
                phone: '023233'
            },
            {
                id: 2,
                name: 'Hadi',
                email: 'hadi@gmail.com',
                phone: '334234'
            }
        ]
    }

    const [state, dispatch] = useReducer(contactReducer, initialState);

    // Add Contact

    // Delete Contact

    // Set Current Contact

    // Clear Current Contact

    // Update Contact

    // Filter Contacts

    // Clear Filter

    return (
        <contactContext.Provider
            value={{
                contacts: state.contacts
            }}
        >
            {props.children}
        </contactContext.Provider>
    )
}

export default ContactState;