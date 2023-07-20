import React from 'react';
import { Card, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import useStyles from './styles';   
import { useCookies } from 'react-cookie';
import axios from 'axios';


const Product = ({ product }) => {
    const classes = useStyles();
    const [cookies] = useCookies([]);
    // const location = useLocation();
    const addProductToCart = async() => {
        if (product.productCount > 0){
            let data = {
            productID : product.productID,
            userID : cookies.id,
            count : 1,
        };
        await axios.post("http://localhost:8081/api/productsCart/add", data);
        }   
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
                    <Typography className={classes.cardNameAndDescription} variant='body1' color='textSecondary'>{product.productInfo}</Typography>
                </CardContent>
            </Link> 
            <CardActions disableSpacing className={classes.cardActions}>
                <Typography variant='h8' style={{ width: '120px', textAlign: 'right' }}>
                        {'Giá : ' + product.productPrice}
                </Typography>
                <Typography variant='h8' style={{ width: '120px', textAlign: 'right' }}>
                    {product.productCount > 0 ? (
                        `Số lượng : ${product.productCount}`
                    ) : (
                        'Hết hàng'
                    )}
                </Typography>
                {cookies.role==='0' ? (
                    <IconButton aria-label='Add to Cart' onClick={()=>addProductToCart()}>
                        <AddShoppingCart/>
                    </IconButton>
                ):(<IconButton></IconButton>)}
                
            </CardActions>
        </Card>
    );
};

export default Product;