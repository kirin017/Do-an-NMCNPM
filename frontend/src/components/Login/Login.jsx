import * as React from 'react';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Avatar, Button, CssBaseline, TextField,Link,Grid, Box,Typography, Container } from '@material-ui/core'
import useStyles from './styles'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
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

export default function SignIn() {
    const classes = useStyles();
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [warning, setWarning] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [, setCookie] = useCookies([]);
    const show = () => {
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
        }, 3000);
      };
    const handleSubmit = (event) => {
        event.preventDefault();
        // const data = new FormData(event.currentTarget);
        // setEmail(data.get('email'))
        // setPassword(data.get('password')) 
        
        const dataLogin = {
          username: email,
          password: password,
        };
        axios.post('http://localhost:8081/api/login', dataLogin, {withCredentials: true})
        .then(response => {
          if(!response.data.succeed) setWarning(response.data.message)
          else setCookie('id',response.data.data.id)

          if (response.data.data.role===0){
            show();
            history.push('/');
            history.go(0);
          }
          else{
            history.push('/admin')
            history.go(0);
          } 



          // // console.log('response: ', response.data)
          // if (response.data.errCode===0){
          //   setUserName(response.data.data.username)
          //   if (response.data.userData.role===0){
          //     setTypeUser(0);
          //     history.push('/');
          //   }
          //   else{
          //     setTypeUser(1);
          //     history.push('/admin')
          //   } 
          // }
          // else if (response.data.errCode===1)
          //   setWarning('Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu!');
          // else if (response.data.errCode===2)
          //   setWarning('Tên đăng nhập không tồn tại!');
          // else if (response.data.errCode===3)
          //   setWarning('Sai mật khẩu!');
        })
        .catch(error => {
          console.error('Error:', error);
        });    

    };

    return (
        <Container className={classes.margin} component="main" maxWidth="xs">
            <CssBaseline />
            <Box className={classes.box}>
              <Box sx={{marginTop: 100, display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
                <Avatar style={{ color: 'white', backgroundColor: '#0099FF'}} sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                    />
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                    />
                    <div style={{ color: 'red' }}>{warning}</div>
                    <Button
                    style={{ marginTop: '50px', color: 'white', backgroundColor: '#0099FF'}}
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    >
                    Sign In
                    </Button>
                    <Grid container>
                    <Grid item 
                      style={{ marginTop: '20px'}}
                    xs>
                        <Link href="/contact" variant="body2">
                        Forgot password?
                        </Link>
                    </Grid>
                    <Grid item
                      style={{ marginTop: '20px'}}
                    >
                        <Link href="/signup" variant="body2">
                        {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                    </Grid>
                </Box>
            </Box>
            <Copyright 
            style={{ marginTop: '40px'}}
            sx={{ mt: 8, mb: 4 }} />
            </Box>
            {(showToast) ? (<Toast message={"Đăng nhập thành công"}/>) : (<></>)}
        </Container>
    );
}