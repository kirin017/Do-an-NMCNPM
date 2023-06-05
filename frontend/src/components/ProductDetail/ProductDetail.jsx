import React from 'react';
// import { useParams } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@material-ui/core';
import useStyles from './styles'

const product =   { id: 1, 
                    name: 'Shoes', 
                    description: 'Running Shoes.',
                    price:'$5', 
                    image: 'https://cdn.shopify.com/s/files/1/0456/5070/6581/products/3023814-403-1_720x@2x.jpg?v=1638870457' }

function ProductDetail(props) {
    // const { id } = useParams();
    const classes = useStyles()

    return (
        <Card className={classes.root}>
        <CardMedia className={classes.media} image={product.image} title={product.name} />
        <CardContent>
            <Typography variant="h5" component="h2">
            {product.name}
            </Typography>
            <Typography variant="body1" color="textSecondary">
            {product.description}
            </Typography>
            <Typography variant="body1" color="primary">
            Giá: {product.price}
            </Typography>
        </CardContent>
        </Card>
  );
}


export default ProductDetail;