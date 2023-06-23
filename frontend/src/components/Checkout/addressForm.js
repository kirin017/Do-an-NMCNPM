import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import { MenuItem, InputLabel, FormControl, Select } from '@material-ui/core'
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
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Shipping address
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="FullName"
                        name="FullName"
                        label="Full name"
                        fullWidth
                        autoComplete="given-name"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="address"
                        name="address"
                        label="Address"
                        fullWidth
                        autoComplete="shipping address"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="phone"
                        name="phone"
                        label="Phone Number"
                        fullWidth
                        autoComplete="phone"
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