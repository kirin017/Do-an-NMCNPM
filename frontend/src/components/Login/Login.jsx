import * as React from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Avatar, Button, CssBaseline, TextField,Link,Grid, Box,Typography, Container } from '@material-ui/core'
import useStyles from './styles'

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

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
        email: data.get('email'),
        password: data.get('password'),
        });
    };

    return (
        <Container className={classes.margin} component="main" maxWidth="xs">
            <CssBaseline />
            <Box
            style = {{
              border: '1px solid rgba(0, 0, 0, 0.12)',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
              width: '1000px',
              height: '700px',
              marginLeft: '-270px',
            }}
             >
              <Box
              sx={{
                  marginTop: 100,
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
                    />
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
                        <Link href="#" variant="body2">
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
        </Container>
    );
}