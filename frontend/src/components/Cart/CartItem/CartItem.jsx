import React from 'react';
import { useState } from 'react';
import { Card, CardContent, CardActions, Typography, Button, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';
import useStyles from './styles';   

const CartItem = ({ product }) => {
    const classes = useStyles();
    // const location = useLocation();
    const [ItemQuan, setItemtQuan] = useState(1);

    const handleIncrement = () => {
        setItemtQuan(ItemQuan + 1);
    };
    const handleDecrement = () => {
        if (ItemQuan > 1) {
            setItemtQuan(ItemQuan - 1);
        }
    };
    return (
        <Card className={classes.root}>
            <div className={classes.image}>
                <img src={product.image} alt='Ảnh' style={{ height: '120px', }}/>
            </div>
            <Link to={`/product/${product.id}`} style={{textDecoration: 'none'}}>
                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography className={classes.cardNameAndDescription} variant='h8' gutterBottom>
                            {product.name}
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
                        {product.price}
                </Typography>
                <IconButton>
                    <DeleteIcon style={{ color: 'black' }}/>
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default CartItem;