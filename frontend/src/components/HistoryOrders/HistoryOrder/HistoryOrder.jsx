import React from 'react';
import { Card, Box, Typography, ListItem, Button } from '@material-ui/core';
import useStyles from './styles';

// let product = { id: 1, name: 'Shoes', quantity: 2, price:'5', image: 'https://cdn.shopify.com/s/files/1/0456/5070/6581/products/3023814-403-1_720x@2x.jpg?v=1638870457' };

function HistoryOrder({product}) {
    const classes = useStyles();

    return (
        <div>
            <Box className={classes.box}>
                <ListItem>
                    <Card className={classes.root}
                        style={{display: 'flex', alignItems: 'center',justifyContent: 'center'}}>
                        <img className={classes.image} src={product.image} alt='Ảnh'/>
                    </Card>
                    <Card className={classes.root} style={{ marginLeft: 80}}>
                        <Typography className={classes.productname} variant="body1">
                            {product.name}
                        </Typography>
                        <Typography className={classes.text}>
                            <div>Số lượng: {product.quantity}</div>
                        </Typography>
                        <Typography className={classes.text}>
                            Tổng tiền: ${product.price*product.quantity}
                        </Typography>
                        <Typography className={classes.text}>
                            Trạng thái: 
                        </Typography>
                        <Button className={classes.button}>Hủy đơn hàng</Button>
                    </Card>
                </ListItem>
            </Box>
        </div>
    );
}

export default HistoryOrder;