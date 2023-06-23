import React from 'react';
import { useState } from 'react';
import { Card, CardContent, CardActions, Typography, Button, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link, useHistory } from 'react-router-dom';
import useStyles from './styles';
import axios from 'axios';
import { useCookies } from 'react-cookie';


const CartItem = ({ product }) => {
    const classes = useStyles();
    const [cookies] = useCookies([]);
    const history = useHistory();
    // const location = useLocation();
    const [ItemQuan, setItemtQuan] = useState(product.count);

    const handleIncrement = async() => {
        let data = {
            productID : product.productID,
            userID : cookies.id,
            count : ItemQuan+1,
        };
        try {
            await axios.post("http://localhost:8081/api/productsCart/changequantity", data);
            setItemtQuan(ItemQuan + 1);
        } catch(e) {}
        
    };
    const handleDecrement = async() => {
        if (ItemQuan > 1) {
            let data = {
                productID : product.productID,
                userID : cookies.id,
                count : ItemQuan-1,
            };
            await axios.post("http://localhost:8081/api/productsCart/changequantity", data)
            .then(response => {
                if (response.data.errCode)
                    setItemtQuan(ItemQuan - 1);
            }).catch(error => {})
            
        }
    };
    const handleDelete = async() => {
        let data = {
            productID : product.productID,
            userID : cookies.id,
        };
        await axios.post("http://localhost:8081/api/productsCart/delete", data)
        history.go(0);
    }
    return (
        <Card className={classes.root}>
            <div className={classes.image}>
                <img src={product.productImage} alt='Ảnh' style={{ height: '120px', }}/>
            </div>
            <Link to={`/product/${product.productID}`} style={{textDecoration: 'none'}}>
                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography className={classes.cardNameAndDescription} variant='h8' gutterBottom>
                            {product.productName}
                        </Typography>
                    </div>
                </CardContent>
            </Link>
            <CardActions disableSpacing className={classes.cardActions}>
                <Button className={classes.button}
                        onClick={handleDecrement}>-</Button>
                <Typography>&nbsp;{ItemQuan}&nbsp;</Typography>
                <Button className={classes.button}
                        onClick={handleIncrement}>+</Button>
                <Typography variant='h8' style={{ width: '120px', textAlign: 'right' }}>
                        {product.productPrice}
                </Typography>
                <IconButton>
                    <DeleteIcon onClick={handleDelete} style={{ color: 'black' }}/>
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default CartItem;