import * as React from 'react';
import PermMediaIcon from '@material-ui/icons/PermMedia';
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
//   const history = useHistory();
  const [productInfo, setproductInfo] = useState('');
  const [productPrice, setproductPrice] = useState('');
  const [productName, setproductName] = useState('');
  const [productTypeID, setproductTypeID] = useState('');
  const [productImage, setproductImage] = useState('');
  const [warning, setWarning] = useState('');
  const [showToast, setShowToast] = useState(false);
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // const data = new FormData(event.currentTarget);
//     // console.log({
//     //   email: data.get('email'),
//     //   password: data.get('password'),
    
//     // });
//     const dataSignUp = {
//         name: FullName,
//         username : username,
//         password: password,
//         phoneNumber: phone,
//         email: email,
//         gender: gender,

//     };
//     axios.post('http://localhost:8081/api/signup', dataSignUp)
//         .then(response => {
//           // console.log('response: ', response.data.errCode)
//           if (response.data.errCode===0){
//             setShowToast(true)
//             history.push('/login');
//           }
//           else if (response.data.errCode===1)
//             setWarning('Vui lòng nhập đầy đủ thông tin!');
//           else if (response.data.errCode===2)
//             setWarning('Tên đăng nhập đã tồn tại!');
//         })
//         .catch(error => {
//           console.error('Error:', error);
//         });    

//   };

  return (
    
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        
        <Box
         style = {{
           border: '1px solid rgba(0, 0, 0, 0.12)',
           boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
           width: '1000px',
           height: '850px',
           marginLeft: '-750px',
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
            <PermMediaIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Thêm Sản Phẩm
          </Typography>
          <Box component="form"  /*onSubmit={handleSubmit}*/ noValidate sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete="given-name"
                        name="productName"
                        required
                        fullWidth
                        id="productName"
                        label="Tên Sản Phẩm"
                        autoFocus
                        value={productName}
                        onChange={e=>setproductName(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} style={{ marginTop: '-7px'}} > 
                    <FormControl className={classes.formControl}>
                        <InputLabel id="productTypeID">Loại Sản Phẩm</InputLabel>
                        <Select
                          labelId="productTypeID"
                          id="productTypeID"
                          value={productTypeID}
                          onChange={e=>setproductTypeID(e.target.value)}
                        >
                          <MenuItem value={1}>Phụ kiện thể thao</MenuItem>
                          <MenuItem value={2}>Áo</MenuItem>
                          <MenuItem value={3}>Giày</MenuItem>
                          <MenuItem value={4}>Quần</MenuItem>
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
                          id="productImage"
                          label="Hình ảnh"
                          name="productImage"
                          autoComplete="productImage"
                          value={productImage}
                          onChange={e=>setproductImage(e.target.value)}
                        />
                    </Grid> 
                    <Grid 
                      style={{ marginTop: '20px'}}
                      item xs={12}>
                        <TextField
                          required
                          fullWidth
                          name="productPrice"
                          label="Giá"
                          type="productPrice"
                          id="productPrice"
                          value={productPrice}
                          onChange={e=>setproductPrice(e.target.value)}
                        />
                    </Grid>
                    <Grid 
                      style={{ marginTop: '20px'}}
                      item xs={12}>
                        <TextField
                          required
                          fullWidth
                          id="productInfo"
                          label="Thông tin sản phẩm"
                          name="productInfo"
                          autoComplete="productInfo"
                          value={productInfo}
                          onChange={e=>setproductInfo(e.target.value)}
                        />
                    </Grid>
                    
                    <Grid 
                      style={{ marginTop: '20px'}}
                      item xs={12}>
                        <FormControlLabel
                          control={<Checkbox value="allowExtraEmails" color="primary" />}
                          label="Xác nhận thông tin sản phẩm cung cấp là chính xác"
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
                    Xác nhận
                    </Button>
                    <Grid container>
                    </Grid>
          </Box>
        </Box>
        <Copyright 
          style={{ marginTop: '40px'}}
          sx={{ mt: 5 }} />
        </Box>
        {(showToast) ? (<Toast message={"Cập nhật sản phẩm thành công"}/>) : (<></>)}
      </Container>
  );
}