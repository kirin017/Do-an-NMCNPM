import React from 'react';
import { Card, Box, Typography, ListItem } from '@material-ui/core';
import useStyles from './styles';

function OrderDetail({ product }) {
    const classes = useStyles();

    return (
        <div>
            <Box className={classes.box}>
                <ListItem>
                    <Card className={classes.root}
                        style={{display: 'flex', alignItems: 'center',justifyContent: 'center'}}>
                        <img className={classes.image} src={product.productImage} alt='Ảnh'/>
                    </Card>
                    <Card className={classes.root} style={{ marginLeft: 80}}>
                        <Typography className={classes.productname} variant="body1">
                            {product.productName}
                        </Typography>
                        <Typography className={classes.text}>
                            <div>Số lượng: {product.count}</div>
                        </Typography>
                        <Typography className={classes.text}>
                            Tổng tiền: {product.productPrice*product.count} vnđ
                        </Typography>
                    </Card>
                </ListItem>
            </Box>
        </div>
    );
}

export default OrderDetail;