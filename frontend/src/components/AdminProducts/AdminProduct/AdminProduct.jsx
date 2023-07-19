import React from 'react';
import { Card, CardContent, CardActions, Typography, Button } from '@material-ui/core';
import useStyles from './styles';   
import { Link } from 'react-router-dom';
const AdminProduct = ({ product }) => {
    const classes = useStyles();
    // const location = useLocation();

    return (
        <Card className={classes.root}>
            <div className={classes.image}>
                <img src={product.productImage} alt='Ảnh' style={{ height: '120px', }}/>
            </div>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography className={classes.cardNameAndDescription} variant='h8' gutterBottom>
                        {product.productName}
                    </Typography>
                </div>
                <Typography className={classes.cardNameAndDescription} variant='body1' color='textSecondary'>{product.description}</Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
            <div>
                <div>
                    <Typography variant='h8' style={{ width: '120px', textAlign: 'right' }}>
                        {product.productPrice + ' vnd'} 
                    </Typography>
                </div>
                <div style={{ marginBottom: 5, marginTop: 5 }}>
                    <Typography variant='h8' style={{ width: '120px', textAlign: 'right' }}>
                        Số lượng:
                        {product.productCount} 
                    </Typography>
                </div>
                <Button className={classes.button} component={Link} to={`/admin/product/${product.productID}`}>
                    Chỉnh sửa
                </Button>
            </div>  
            </CardActions>
                 
        </Card>
    );
};

export default AdminProduct;