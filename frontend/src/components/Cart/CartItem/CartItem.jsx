import React from 'react';
import { useState } from 'react';
import { Card, CardContent, CardActions, Typography, Button } from '@material-ui/core';
// import { Link } from 'react-router-dom';
import useStyles from './styles';   

const CartItem = ({ product }) => {
    const classes = useStyles();
    // const location = useLocation();
    const [ItemQuan, SetItemtQuan] = useState(1);

    // IncreaseItem(ItemQuan) => {
    //   SetItemtQuan(ItemQuan+1)
    // }
    return (
        <Card className={classes.root}>
            <div className={classes.image}>
                <img src={product.image} alt='Ảnh' style={{ height: '120px', }}/>
            </div>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography className={classes.cardNameAndDescription} variant='h8' gutterBottom>
                        {product.title}
                    </Typography>
                </div>
                <Typography className={classes.cardNameAndDescription} variant='body1' color='textSecondary'>{product.description}</Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                {/* <Button className={classes.button} component={Link} to={`/product/${product.id}`}>
                    Chi tiết
                </Button> */}
                <Button type="button" size="small" style={{ background: '#6FCCF5' }}>-</Button>
                <Typography>&nbsp;{ItemQuan}&nbsp;</Typography>
                <Button type="button" size="small" style={{ background: '#6FCCF5' }}>+</Button>
                <Typography variant='h8' style={{ width: '120px', textAlign: 'right' }}>
                        {product.price}
                </Typography>
            </CardActions>
        </Card>
    );
};

export default CartItem;