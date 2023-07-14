import * as React from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Avatar, Button, CssBaseline, TextField,Link,Grid, Box,Typography, Container, Checkbox, FormControlLabel, MenuItem , InputLabel , FormControl , Select  } from '@material-ui/core'
// import SelectBox from '../Narbar/Menu/SelectBox'
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import Toast from '../Toast/Toast';

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

export default function SignUp() {
  const classes = useStyles();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [FullName, setFullName] = useState('');
  const [phone, setPhoneNumber] = useState('');
  const [gender, setGenDer] = useState('');
  const [username, setUserName] = useState('');
  const [warning, setWarning] = useState('');
  const [showToast, setShowToast] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    
    // });
    const dataSignUp = {
        name: FullName,
        username : username,
        password: password,
        phoneNumber: phone,
        email: email,
        gender: gender,

    };
    axios.post('http://localhost:8081/api/signupStaff', dataSignUp)
        .then(response => {
          // console.log('response: ', response.data.errCode)
          if (response.data.errCode===0){
            setShowToast(true)
            history.push('/admin/account');
          }
          else if (response.data.errCode===1)
            setWarning('Vui lòng nhập đầy đủ thông tin!');
          else if (response.data.errCode===2)
            setWarning('Tên đăng nhập đã tồn tại!');
        })
        .catch(error => {
          console.error('Error:', error);
        });    

  };

  return (
    
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        
        <Box
         style = {{
           border: '1px solid rgba(0, 0, 0, 0.12)',
           boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
           width: '1000px',
           height: '850px',
           marginLeft: '-270px',
         }}
         >
        <Box
          sx={{
            marginTop: 120,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar 
            style={{ color: 'white', backgroundColor: '#0099FF'}}
            sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form"  onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete="given-name"
                        name="FullName"
                        required
                        fullWidth
                        id="FullName"
                        label="FullName"
                        autoFocus
                        value={FullName}
                        onChange={e=>setFullName(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} style={{ marginTop: '-7px'}} > 
                    <FormControl className={classes.formControl}>
                        <InputLabel id="gender">Gender</InputLabel>
                        <Select
                          labelId="gender"
                          id="gender"
                          value={gender}
                          onChange={e=>setGenDer(e.target.value)}
                        >
                          <MenuItem value={0}>Male</MenuItem>
                          <MenuItem value={1}>Female</MenuItem>
                          <MenuItem value={2}>Other</MenuItem>
                        </Select>
                      </FormControl>
                   </Grid>
                  
                  </Grid>
                  <Grid 
                      style={{ marginTop: '20px'}}
                      item xs={12}>
                        <TextField
                          required
                          fullWidth
                          id="username"
                          label="Username"
                          name="username"
                          autoComplete="username"
                          value={username}
                          onChange={e=>setUserName(e.target.value)}
                        />
                    </Grid>
                    <Grid 
                      style={{ marginTop: '20px'}}
                      item xs={12}>
                        <TextField
                          required
                          fullWidth
                          name="password"
                          label="Password"
                          type="password"
                          id="password"
                          autoComplete="new-password"
                          value={password}
                          onChange={e=>setPassword(e.target.value)}
                        />
                    </Grid>
                    <Grid 
                      style={{ marginTop: '20px'}}
                      item xs={12}>
                        <TextField
                          required
                          fullWidth
                          id="email"
                          label="Email Address"
                          name="email"
                          autoComplete="email"
                          value={email}
                          onChange={e=>setEmail(e.target.value)}
                        />
                    </Grid>
                    <Grid 
                      style={{ marginTop: '20px'}}
                      item xs={12}>
                        <TextField
                          required
                          fullWidth
                          id="phone"
                          label="Phone Number"
                          name="phone"
                          autoComplete="phone"
                          value={phone}
                          onChange={e=>setPhoneNumber(e.target.value)}
                        />
                    </Grid>
                    
                    <Grid 
                      style={{ marginTop: '20px'}}
                      item xs={12}>
                        <FormControlLabel
                          control={<Checkbox value="allowExtraEmails" color="primary" />}
                          label="I want to receive inspiration, 
                          marketing promotions and updates via email."
                        />
                    </Grid>
                    <div style={{ color: 'red' }}>{warning}</div>
                    <Button
                    style={{ marginTop: '50px', color: 'white', backgroundColor: '#0099FF'}}
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    >
                    Sign Up
                    </Button>
                    <Grid container>
                    <Grid item
                      style={{ marginTop: '20px'}}
                    >
                        <Link href="/login" variant="body2">
                        {"Already have an account? Log in"}
                        </Link>
                    </Grid>
                    </Grid>
          </Box>
        </Box>
        <Copyright 
          style={{ marginTop: '40px'}}
          sx={{ mt: 5 }} />
        </Box>
        {(showToast) ? (<Toast message={"Đăng ký tài khoản thành công"}/>) : (<></>)}
      </Container>
  );
}