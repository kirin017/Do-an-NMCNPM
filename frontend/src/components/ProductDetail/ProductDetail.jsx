import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Typography, Box, Card, Button } from '@material-ui/core';
import useStyles from './styles';
import axios from 'axios';


function ProductDetail() {
    const { id } = useParams();
    const classes = useStyles()

    const [product, setproduct] = useState({});

    useEffect(() => {
      async function getData() {
        try {
          let res = await axios.get(`http://localhost:8081/api/products/${id}`);
          setproduct(res.data.productData);
        } catch (error) {
          setproduct({}) 
        } 
      }
      getData();
    }, [id]);


    return (
        <div style={{display: 'flex', alignItems: 'center',justifyContent: 'center'}}>
        <Box className={classes.box}>
            <Grid container spacing={5}>
            <Grid item xs={6}>
                <Card className={classes.root}
                style={{display: 'flex', alignItems: 'center',justifyContent: 'center'}}>
                    <img className={classes.image} src={product.productImage} alt='Ảnh'/>
                </Card>
            </Grid>
            <Grid item xs={6}>
                <Card className={classes.root}>
                    <Typography className={classes.productname} variant="body1">
                        {product.productName}
                    </Typography>
                    <Box className={classes.descriptionBox}>
                        <Typography className={classes.descriptionText}>
                            <div>Chi tiết:</div>
                            <div>{product.productInfo}</div>
                        </Typography>
                    </Box>
                    <Typography className={classes.price} variant="body1">
                        {product.productPrice + 'đ'}
                    </Typography>
                    <Button className={classes.button}>
                        Thêm vào giỏ hàng
                    </Button>
                </Card>
            </Grid>
            </Grid>
        </Box>
        </div>
    );
}

export default ProductDetail;