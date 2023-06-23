import React from 'react';
import { Card, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import useStyles from './styles';   

const Product = ({ product }) => {
    const classes = useStyles();
    // const location = useLocation();

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
                    <Typography className={classes.cardNameAndDescription} variant='body1' color='textSecondary'>{product.description}</Typography>
                </CardContent>
            </Link> 
            <CardActions disableSpacing className={classes.cardActions}>
                <Typography variant='h8' style={{ width: '120px', textAlign: 'right' }}>
                        {product.productPrice}
                </Typography>
                <IconButton aria-label='Add to Cart'>
                    <AddShoppingCart/>
                </IconButton>
            </CardActions>
                 
        </Card>
    );
};

export default Product;