import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Typography, Box, Card, Button } from '@material-ui/core';
import useStyles from './styles';
import axios from 'axios';


// const product =   { id: 1, 
//                     name: 'Shoes', 
//                     description: 'Giày chạy bộ là loại giày thể thao được thiết kế đặc biệt để mang lại sự thoải mái, hỗ trợ và bảo vệ cho người chạy. Chúng có những tính năng độc đáo giúp tối ưu hóa hiệu suất và giảm thiểu nguy cơ chấn thương trong quá trình chạy.',
//                     price:'$5', 
//                     image: 'https://cdn.shopify.com/s/files/1/0456/5070/6581/products/3023814-403-1_720x@2x.jpg?v=1638870457' }

function ProductDetail() {
    const { id } = useParams();
    const classes = useStyles()

    const [product, setproduct] = useState({});

    useEffect(() => {
      async function getData() {
        try {
          let res = await axios.get(`https://fakestoreapi.com/products/${id}`);
          setproduct(res.data);
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
                    <img className={classes.image} src={product.image} alt='Ảnh'/>
                </Card>
            </Grid>
            <Grid item xs={6}>
                <Card className={classes.root}>
                    <Typography className={classes.productname} variant="body1">
                        {product.title}
                    </Typography>
                    <Box className={classes.descriptionBox}>
                        <Typography className={classes.descriptionText}>
                            <div>Chi tiết:</div>
                            <div>{product.description}</div>
                        </Typography>
                    </Box>
                    <Typography className={classes.price} variant="body1">
                        {product.price}
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