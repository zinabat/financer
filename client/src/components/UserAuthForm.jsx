import React, { useState } from 'react';
import { 
  Typography,
  TextField,
  Button,
  Paper,
  Box
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useInput, useSubmit } from '../hooks/form';
import isEmail from 'validator/lib/isEmail';
import isLength from 'validator/lib/isLength';

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
  },
}));

export default function UserAuthForm(props) {

  const classes = useStyles();

  const [data, setData] = useState(null);

  const email = useInput("Email", "", function(value) {
    return isEmail(value);
  });

  const password = useInput("Password", "", function(value) {
    return true;
  });

  function handleSuccess(data) {
    setData(data);
    // send to server
    // get server response
  }

  const submit = useSubmit([email, password], handleSuccess);

  return (
    <Paper className={classes.paper}>
    <form className={classes.form} {...submit.props}>
      <Typography variant="h5">
        Hi there!
      </Typography>
      {submit.errorItems && submit.errorItems.length > 0 && (
         <Typography variant="body1" color="error">
           {`Please fix ${submit.errorItems && submit.errorItems.length} form
           field error(s)`}
         </Typography>
       )}
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
      <Button 
        type="button" 
        variant="outlined" 
        className={classes.button}>
        Register
      </Button>
      <Button 
        color="secondary" 
        type="submit" 
        variant="contained" 
        className={classes.button}>
        Login
      </Button>
    </form>
    </Paper>
  );
}