import { userConstants } from '../_constants';

export function user(state = {}, action) {
  switch (action.type) {
    case userConstants.FIND_REQUEST:
      return {
        loading: true
      };
    default:
      return state;
  }
}



export function register(state = {}, action) {

}