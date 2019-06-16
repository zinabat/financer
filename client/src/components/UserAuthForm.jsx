import React, { useState } from 'react';
import { 
  Typography,
  TextField,
  Button,
  Paper,
  Collapse
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useInput, useSubmit } from '../hooks/form';
import isEmail from 'validator/lib/isEmail';
import isLength from 'validator/lib/isLength';
import equals from 'validator/lib/equals';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(3, 2, 2, 0),
  }
}));

export default function UserAuthForm(props) {

  const classes = useStyles();
  const min = 8;
  const max = 64;
  const [data, setData] = useState(null);
  const [registerMode, setRegisterMode] = useState(false);

  const email = useInput("Email", "", function(value) {
    return isEmail(value);
  });

  const password = useInput("Password", "", function(value) {
    return isLength(value, { min: min, max: max });
  }, {helperText: "Must be between "+min+" and "+max+" characters"});

  const pass_confirm = useInput("Pass_confirm", "", function(value) {
    return equals(value, password.props.value);
  }, {helperText: "Passwords must match"});

  function handleLogin(data) {
    alert('login');
    setData(data);
    // send to server
    // get server response
  }

  function handleRegister(data) {
    alert('register');
    setData(data);
  }

  const login = useSubmit([email, password], handleLogin);
  const register = useSubmit([email, password, pass_confirm], handleRegister);

  function switchMode(e) {
    e.preventDefault();
    if (registerMode) {
      setRegisterMode(false);
    } else {
      setRegisterMode(true);
    }
  }

  // let registerProps = (registerMode ? ...{
  //   onClick: switchMode
  // })

  return (
    <Paper className={classes.paper}>
    <form className={classes.form} >
      <Typography variant="h5">
        Hi there!
      </Typography>
      <TextField
        id="email"
        type="email"
        label="Email"
        variant="filled"
        margin="normal"
        fullWidth 
        required
        {...email.props}
      />
      <TextField
        id="password"
        type="password"
        label="Password"
        variant="filled"
        margin="normal"
        fullWidth 
        required
        {...password.props}
      />
      <Collapse in={registerMode}>
      <TextField
        id="pass_confirm"
        type="password"
        label="Confirm"
        variant="filled"
        margin="normal"
        fullWidth 
        required
        {...pass_confirm.props}
      />
      </Collapse>
      <Button 
        color="primary"
        type="button" 
        variant={registerMode ? 'contained' : 'outlined'}
        className={classes.button}
        {...(registerMode ? register.props : {onClick: switchMode})}
        >
        Create Account
      </Button>
      <Button 
        color="secondary" 
        type="submit" 
        variant={registerMode ? 'outlined' : 'contained'}
        className={classes.button}
        {...(!registerMode ? login.props : {onClick: switchMode})}>
        Login
      </Button>
    </form>
    </Paper>
  );
}