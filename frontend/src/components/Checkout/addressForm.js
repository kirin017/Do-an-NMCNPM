import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import { MenuItem, InputLabel, FormControl, Select } from '@material-ui/core'
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import axios from 'axios';

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
export default function AddressForm() {
    const classes = useStyles();
    const [payment, setPayment] = useState('');
    const [address, setAddress] = useState('');
    const [FullName, setFullName] = useState('');
    const [phone, setPhoneNumber] = useState('');
    const [promo, setpromo] = useState('');
    const [cookies] = useCookies([]);
    const handleOrder = async() => {
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
      }
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Shipping address
            </Typography>
            <Grid container spacing={3}>
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
                        onChange={e=>setFullName(e.target.value)}
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
                        onChange={e=>setAddress(e.target.value)}
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
                        onChange={e=>setPhoneNumber(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="city"
                        name="city"
                        label="City"
                        fullWidth
                        autoComplete="shipping address-level2"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="state" name="state" label="State/Province/Region" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="country"
                        name="country"
                        label="Country"
                        fullWidth
                        autoComplete="shipping country"
                    />
                </Grid>
                <Grid item xs={12} sm={6} style={{ marginTop: '-8px' }} >
                    <FormControl className={classes.formControl}>
                        <InputLabel id="gender">Payment Type</InputLabel>
                        <Select
                            labelId="payment"
                            id="payment"
                            required
                            value={payment}
                            onChange={e=>setPayment(e.target.value)}
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
                        onChange={e=>setpromo(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                        label="Confirm this information is correct"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}