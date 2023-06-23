import React from 'react';
import { List, Typography} from '@material-ui/core';
import HistoryOrder from './HistoryOrder/HistoryOrder';
import useStyles from './styles';
import { useCookies } from 'react-cookie';

const products = [
{ id: 1, name: 'Shoes', quantity: 2, price:'5', image: 'https://cdn.shopify.com/s/files/1/0456/5070/6581/products/3023814-403-1_720x@2x.jpg?v=1638870457' },
{ id: 2, name: 'Macbook', quantity: 2, price:'10', image: 'https://macmall.vn/uploads/mba-gray-m1-202011-cover_1605259444_1606717873.png' },
{ id: 3, name: 'Nike Air Max 270', quantity: 2, price:'20', image: 'https://static.nike.com/a/images/t_default/ouweg5dax808k3vqipcr/air-max-270-shoes-V4DfZQ.png' },
{ id: 4, name: 'Adidas Ultraboost 21', quantity: 2, price:'30', image: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/340/361/products/giay-ultraboost-21-trang-s23708-01-standard.jpg' },
{ id: 5, name: 'Áo Adidas Juventus', quantity: 2, price:'3', image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6a8e5ed538544c6d9ffbaa250114e25e_9366/Ao_djau_san_nha_Juventus_DJen_DW5455_01_laydown.jpg' },
];

function HistoryOrders() {
    const classes = useStyles();
    const [cookies] = useCookies([]);
    return (
        <div>
            {cookies.role==='0' ? (
                <div>
                    <Typography className={classes.typo}>Lịch sử mua hàng</Typography>
                    <List className={classes.list}>
                        { products.length > 0 &&
                        products.map((product) => (
                            <HistoryOrder product={product}/>
                        ))}
                    </List>
                </div>
            ):(
                <Typography className={classes.typo}>
                    Vui lòng đăng nhập để xem lịch sử mua hàng.
                </Typography>
            ) }
        </div>
    );
}

export default HistoryOrders;