import * as React from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Avatar, Button, CssBaseline, TextField, Link, Grid, Box, Typography, Container, Checkbox, FormControlLabel, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
// import SelectBox from '../Narbar/Menu/SelectBox'
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
// import Cookie from 'js-cookie'
// const username = Cookie.get('username')

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));
export default function AccountSetting() {
  const classes = useStyles();
  const history = useHistory();
  const [user, setUser] = useState(async() => {
    const user = await axios.get(`http://localhost:8081/api/getuser`, {withCredentials: true})
    setUser(user.data.data)
  })
  const dataUser = user
  console.log(user)
  var genderr;
  if (dataUser.gender === 0)
  {
    genderr = 'Male'
  }
  else if ( dataUser.gender === 1)
  {
    genderr = 'Female'
  }
  else
  {
    genderr = 'Other'
  }
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [FullName, setFullName] = useState('');
  const [phone, setPhoneNumber] = useState('');
  const [gender, setGenDer] = useState('');
  // const [warning, setWarning] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),

    // });
    const data = {
      username :user.username,
      FullName: FullName,
      password: password,
      phone: phone,
      email: email,
      gender: gender,

    };
    
    axios.put('http://localhost:8081/api/user/update', data)
        .then(response => {
          console.log('response: ', response.data)
          history.push('/accountsetting');
          history.go(0);
        
        })
        .catch(error => {
          console.error('Error:', error);
        });    
  };

  

  
  return (

    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <Box
        style={{
          border: '1px solid rgba(0, 0, 0, 0.12)',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
          width: '1000px',
          height: '1000px',
          marginLeft: '-270px',
        }}
      >
        <Box
          sx={{
            marginTop: 80,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar
            style={{ color: 'white', backgroundColor: '#0099FF' }}
            sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            My Account
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}  >
                <TextField
                  id="username"
                  label="Username "
                  // defaultValue={user.username}
                  value={user.username}
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <div style={{ fontSize: '9px' }} >
                  <h1>⚠️ Can't edit </h1>

                  <Button />
                </div>

              </Grid>

            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} style={{ marginTop: '20  px' }}>
                <TextField
                  id="xFullName"
                  label="FullName "
                  value={dataUser.name}
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6} style={{ marginTop: '-5px' }}>
                <TextField
                  autoComplete="given-name"
                  name="FullName"
                  fullWidth
                  id="FullName"
                  label="New FullName"
                  autoFocus
                  value={FullName}
                  onChange={e => setFullName(e.target.value)}
                />
              </Grid>

            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} style={{ marginTop: '30px' }}>
                <TextField
                  id="xPassword"
                  label="Password "
                  value='**********'
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6} style={{ marginTop: '20px' }}>
                <TextField
                  fullWidth
                  name="password"
                  label="New Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </Grid>

            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} style={{ marginTop: '30px' }}>
                <TextField
                  id="xGender"
                  label="Gender"
                  value={genderr}
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6} style={{ marginTop: '20px' }}>
                <FormControl className={classes.formControl}>
                  <InputLabel id="gender">New Gender</InputLabel>
                  <Select
                    labelId="gender"
                    id="gender"
                    value={gender}
                    onChange={e => setGenDer(e.target.value)}
                  >
                    <MenuItem value={0}>Male</MenuItem>
                    <MenuItem value={1}>Female</MenuItem>
                    <MenuItem value={2}>Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} style={{ marginTop: '30px' }}>
                <TextField
                  id="xEmail"
                  label="Email "
                  value={dataUser.email}
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6} style={{ marginTop: '20px' }}>
                <TextField
                  fullWidth
                  id="email"
                  label="New Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </Grid>

            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} style={{ marginTop: '30px' }}>
                <TextField
                  id="xPhoneNumber"
                  label="PhoneNumber "
                  value={dataUser.phoneNumber}
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6} style={{ marginTop: '20px' }}>
                <TextField
                  fullWidth
                  id="phone"
                  label="New Phone Number"
                  name="phone"
                  autoComplete="phone"
                  value={phone}
                  onChange={e => setPhoneNumber(e.target.value)}
                />
              </Grid>

            </Grid>

            <Grid
              style={{ marginTop: '20px' }}
              item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Confirm the change of information, 
                            Please make sure that the information is correct !"
              />
            </Grid>
            {/* <div style={{ color: 'red' }}>{warning}</div> */}
            <Button
              style={{ marginTop: '50px', color: 'white', backgroundColor: '#0099FF' }}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Confirm
            </Button>
            <Grid container>
              <Grid item
                style={{ marginTop: '20px' }}
              >
                <Link href="/login" variant="body2">
                  {"Already have an account? Log in"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright
          style={{ marginTop: '40px' }}
          sx={{ mt: 5 }} />
      </Box>
    </Container>
  );
}