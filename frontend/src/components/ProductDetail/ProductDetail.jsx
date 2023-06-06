import React from 'react';
// import { useParams } from 'react-router-dom';
import { Grid, Typography, Box, Card, CardMedia, Button } from '@material-ui/core';
import useStyles from './styles'

const product =   { id: 1, 
                    name: 'Shoes', 
                    description: 'Giày chạy bộ là loại giày thể thao được thiết kế đặc biệt để mang lại sự thoải mái, hỗ trợ và bảo vệ cho người chạy. Chúng có những tính năng độc đáo giúp tối ưu hóa hiệu suất và giảm thiểu nguy cơ chấn thương trong quá trình chạy.',
                    price:'$5', 
                    image: 'https://cdn.shopify.com/s/files/1/0456/5070/6581/products/3023814-403-1_720x@2x.jpg?v=1638870457' }

function ProductDetail() {
    // const { id } = useParams();
    const classes = useStyles()

    return (
        <Box className={classes.box}>
            <Grid container spacing={5}>
            <Grid item xs={6}>
                <Card className={classes.root}>
                    <CardMedia className={classes.media} image={product.image} title={product.name}/>
                </Card>
            </Grid>
            <Grid item xs={6}>
                <Card className={classes.root}>
                    <Typography className={classes.productname} variant="body1">
                        {product.name}
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
    );
}

export default ProductDetail;