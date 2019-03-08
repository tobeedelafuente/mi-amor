import React, { Component } from 'react';
import logo from '../../logo.svg';
import './Login.css';
import {
  withStyles,
  createMuiTheme,
  MuiThemeProvider
} from '@material-ui/core/styles';
import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  Button
}  from '@material-ui/core';
import { Lock } from '@material-ui/icons';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  }
});

const theme = createMuiTheme({
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    useNextVariants: true,
  }
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      passwordError: false,
      defaultPassword: "0415"
    }

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    var { password, defaultPassword } = this.state;

    if (password.Empty || 0 === password.length) {
      this.setState({
        passwordError: true
      })
    } else {
      this.setState({
        passwordError: false
      })
    }

    if (password === defaultPassword) {
      this.props.history.push("/galleryboard");
    }
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <MuiThemeProvider theme={theme}>
            <FormControl className={classes.margin}>
              <InputLabel 
                color="white"
                htmlFor="password">Password</InputLabel>
                <Input
                  type="password"
                  id="password"
                  value={this.state.password}
                  onChange={this.handleChange('password')}
                  endAdornment={
                    <InputAdornment position="end">
                      <Lock />
                    </InputAdornment>
                  }
                  error={this.state.passwordError}
                />
            </FormControl>
          </MuiThemeProvider>
          <Button
            variant="contained"
            color="primary"
            onClick={() => this.handleLogin()}
            className={classes.margin}>
            Login
          </Button>
        </header>
      </div>
    );
  }
}

export default withStyles(styles)(Login);
