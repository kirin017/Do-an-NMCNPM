import * as React from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Avatar, Button, CssBaseline, TextField, Grid, Box, Typography, Container, Checkbox, FormControlLabel, MenuItem, InputLabel, FormControl, Select } from '@material-ui/core'
// import SelectBox from '../Narbar/Menu/SelectBox'
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

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

export default function SubCheckOut() {
    const classes = useStyles();
    const history = useHistory();
    const [FullName, setFullName] = useState('');
    const [phone, setPhoneNumber] = useState('');
    const [warning, setWarning] = useState('');
    const [promo, setpromo] = useState('');
    const [payment, setPayment] = useState('');
    const [address, setAddress] = useState('');
    const [cookies] = useCookies([]);
    const handleOrder = async() => {
        let Promo = await axios.post("http://localhost:8081/api/getDiscount", {code: promo})
        let checkPromo = Promo.data
        if (!(FullName && phone && address))
            setWarning("Vui lòng nhập đủ thông tin")
        else if (!checkPromo && checkPromo !== ''){
            setWarning("Mã khuyến mãi không đúng")
        }
        else{
            let sumCost = await axios.post("http://localhost:8081/api/productsCart/sumprice", {userID : cookies.id})
            let data = {
                userID : cookies.id,
                customerName: FullName,
                phoneNumber: phone,
                address: address,
                paymentType: 1,
                shipCost: 0,
                totalCost: sumCost.data.sum,
                note: '',
        };
        await axios.post("http://localhost:8081/api/order", data)
        history.push("/historyOrder")
      }}

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
                        marginTop: 120,
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
                        Shipping address
                    </Typography>
                    <Box noValidate sx={{ mt: 3 }}>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="given-name"
                                name="FullName"
                                required
                                fullWidth
                                id="FullName"
                                label="FullName"
                                autoFocus
                                value={FullName}
                                onChange={e => setFullName(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="address"
                                name="Address"
                                required
                                fullWidth
                                id="address"
                                label="address"
                                autoFocus
                                value={address}
                                onChange={e => setAddress(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="phone"
                                label="Phone Number"
                                name="phone"
                                autoComplete="phone"
                                value={phone}
                                onChange={e => setPhoneNumber(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField
                                required
                                id="city"
                                name="city"
                                label="City"
                                fullWidth
                                autoComplete="shipping address-level2"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="state" name="state" label="State/Province/Region" fullWidth />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField
                                required
                                id="country"
                                name="country"
                                label="Country"
                                fullWidth
                                autoComplete="shipping country"
                            />
                        </Grid>
                        <Grid item xs={12}  style={{ marginTop: '-8px' }} >
                            <FormControl className={classes.formControl}>
                                <InputLabel id="gender">Payment Type</InputLabel>
                                <Select
                                    labelId="payment"
                                    id="payment"
                                    required
                                    value={payment}
                                    onChange={e => setPayment(e.target.value)}
                                >
                                    <MenuItem value={0}>Cash Payment</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="promo"
                                name="promo"
                                label="Promo Code"
                                fullWidth
                                autoComplete="promo"
                                value={promo}
                                onChange={e => setpromo(e.target.value)}
                            />
                        </Grid>
                        <Grid
                            style={{ marginTop: '20px' }}
                            item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="Confirm this information is correct"
                            />
                        </Grid>
                        <div style={{ color: 'red' }}>{warning}</div>
                        <Button
                            style={{ marginTop: '50px', color: 'white', backgroundColor: '#0099FF' }}
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={handleOrder}>
                            Submit
                        </Button>
                    </Box>
                </Box>
                <Copyright
                    style={{ marginTop: '40px' }}
                    sx={{ mt: 5 }} />
            </Box>
        </Container>
    );
}