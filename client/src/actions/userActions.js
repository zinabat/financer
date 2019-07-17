import { userConstants } from '../_contants.js';
import { userService } from '../services';
import { alertActions } from './';

export const userActions = {
  login,
  logout,
  register,
  find,
  update,
  destroy
}

function login(username, password) {
  return dispatch => {
    // dispatch the login request
    dispatch(request({username}));

    // call the async service
    
  };

  function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
  function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
  function failure(user) { return { type: userConstants.LOGIN_FAILURE, user } }
}