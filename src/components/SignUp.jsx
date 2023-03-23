import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import MemberService from '../service/MemberService';
import EmailService from '../service/EmailService';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const theme = createTheme();

const SignUp = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [passwordCheck,setPasswordCheck] = useState('');
  const [name,setName] = useState('');

  const [emailCode, setEmailCode] = useState('');
  const [emailCodeCheck, setEmailCodeCheck] = useState('');

  //0:button not clicked 1: button clicked 2: code ok, can sign up
  const [emailAuthState, setEmailAuthState] = useState(0);

  //0: no show error 1: show error
  const [errorState, setErrorState] = useState(0);

  const handleSignUp = () => {
    console.log(email);
    console.log(password);
    console.log(name);
    console.log(emailAuthState);
    if(email == ''){
      return;
    }

    if(password == ''){
      return;
    }

    if(name == ''){
      return;
    }

    //email check done
    if(emailAuthState !== 2){
      return;
    }

    MemberService.register(email, password, name).then(
      (response) => {
        navigate("/login");
      },
      (error) => {
        console.log(error);
      }
    );
    
  };

  const handleSendEmail = () => {
    if(email == '') {
      return;
    }

    // regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(email)){
      return;
    }

    //send email logic
    EmailService.sendEmail(email).then(
      (response) => {
        //console.log(response);
        //show email code and check button
        setEmailAuthState(1);
        setEmailCodeCheck(response);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const handleCodeCheck = () => {
    if(emailCode === emailCodeCheck){
      setEmailAuthState(2);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} onClick={()=>{navigate('/')}}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                  value={name} 
                  onChange={(e)=>{setName(e.target.value)}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email} 
                  onChange={(e)=>{setEmail(e.target.value)}}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 1, mb: 1 }}
                  onClick={()=>{handleSendEmail()}}
                >
                  Get Code
                </Button>
              </Grid>
              
              {/* When Email getCode is Clicked  */}
              {
                emailAuthState === 1 && 
                <>
                  <Grid item xs={9}>
                    <TextField
                      required
                      fullWidth
                      id="emailCode"
                      label="Email Code"
                      name="emailCode"
                      autoComplete="emailCode"
                      value={emailCode} 
                      onChange={(e)=>{setEmailCode(e.target.value)}}
                    />
                  </Grid>
                  <Grid item xs={3} display="flex" alignItems="center">
                    <Button
                        type="button"
                        variant="outlined"
                        onClick={()=>{handleCodeCheck();}}
                    >
                      Check
                    </Button>
                  </Grid>
                </>
              }
              
              {/* When Email getCode is Clicked  */}
              {
                emailAuthState === 2 && 
                <>
                  <Grid item xs={12}>
                    <Alert variant="outlined" severity="success">
                      Email Checked
                    </Alert>
                  </Grid>
                </>
              }
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password} 
                  onChange={(e)=>{setPassword(e.target.value)}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="passwordCheck"
                  label="PasswordCheck"
                  type="password"
                  id="passwordCheck"
                  autoComplete="new-password"
                  value={passwordCheck} 
                  onChange={(e)=>{setPasswordCheck(e.target.value)}}
                />
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>
            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={()=>{handleSignUp()}}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link onClick={()=>{navigate('/login')}} variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignUp