import { alertConstants } from '../_constants';

export const alertActions = {
  success,
  error,
  clear
}

function success(msg) {
  return { type: alertConstants.SUCCESS, message };
}

function error(msg) {
  return { type: alertConstants.ERROR, message };
}

function clear() {
  return { type: alertConstants.CLEAR };
}