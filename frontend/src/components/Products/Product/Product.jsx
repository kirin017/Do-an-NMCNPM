import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Button } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import useStyles from './styles';   

const Product = ({ product }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.image} title={product.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography className={classes.cardNameAndDescription} variant='h8' gutterBottom>
                        {product.name}
                    </Typography>
                    {/* <Typography variant='h8' >
                        {product.price}
                    </Typography> */}
                </div>
                <Typography className={classes.cardNameAndDescription} variant='body1' color='textSecondary'>{product.description}</Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <Button className={classes.button} component={Link} to={`/product/${product.id}`}>
                    Chi tiết
                </Button>
                <Typography variant='h8' style={{ width: '120px', textAlign: 'right' }}>
                        {product.price}
                </Typography>
                <IconButton aria-label='Add to Cart'>
                    <AddShoppingCart/>
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default Product;