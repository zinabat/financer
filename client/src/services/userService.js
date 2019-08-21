/**
 * Service responsible for performing backend api calls on
 * user data.
 */
import { config } from '../_config';
const axios = require('axios');

export const userService = {
  login,
  logout,
  register,
  find,
  update,
  destroy
}

const login = async (username, password) => {
  try {
    const response = await axios.post(`${config.apiURL}/user/login`, {
      username: username,
      password: password
    });
    // response includes a jwt token
    localStorage.setItem('user', response.data);
  } catch (error) {
    console.error(error);
    logout();
  }
}

// Synchronous call, just removes item from localStorage
const logout = function() {
  localStorage.removeItem('user');
}

const register = async () => {

};

const find = async (userId) => {

};

const update = async () => {

};

const destroy = async (userId) => {

};