import { combineReducers } from 'redux';

import { auth } from './authReducer';
//import { registration } from './registrationReducer';
import { user } from './userReducer';
import { alert } from './alertReducer';

const rootReducer = combineReducers({
  auth,
//  registration,
  user,
  alert
});

export default rootReducer;