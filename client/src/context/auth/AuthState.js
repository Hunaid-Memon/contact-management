import React, { useReducer } from "react";
import authReducer from "./authReducer";
import authContext from "./authContext";
import axios from 'axios';
import setAuthToken from '../../utlis/setAuthToken';

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from "../types";

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load User
  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token)
    }

    try {
      const res = await axios.get('/api/auth');
      dispatch({ type: USER_LOADED, payload: res.data })
    } catch (err) {
      dispatch({ type: AUTH_ERROR });  
    }
  }

  // Register User
    const register = async formData => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('/api/users', formData, config);
          dispatch({ type: REGISTER_SUCCESS, payload: res.data });
          loadUser();
        } catch (err) {
            dispatch({ type: REGISTER_FAIL, payload: err.response.data.msg })
        }
    }

    // Login User
    const login = async formData => {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      try {
        const res = await axios.post("/api/auth", formData, config);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        loadUser();
      } catch (err) {
        dispatch({ type: LOGIN_FAIL, payload: err.response.data.msg });
      }
    };



    // Logout User

    // Clear Errors
    const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  return (
    <authContext.Provider
      value={{
        taken: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        register,
        login,
        loadUser,
        clearErrors
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
