import * as React from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Avatar, Button, CssBaseline, TextField,Link,Grid, Box,Typography, Container, Checkbox, FormControlLabel } from '@material-ui/core'
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
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
           height: '750px',
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
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete="given-name"
                        name="firstName"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        autoFocus
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="family-name"
                      />
                   </Grid>
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
      </Container>
  );
}