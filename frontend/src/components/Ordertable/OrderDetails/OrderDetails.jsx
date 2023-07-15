import React, { useEffect, useState } from 'react';
import { List } from '@material-ui/core';
import OrderDetail from './OrderDetail/OrderDetail';
import useStyles from './styles';
// import axios from 'axios';

const products = [
{ id: 1, productName: 'Shoes', count: 2, productPrice:'5', productImage: 'https://cdn.shopify.com/s/files/1/0456/5070/6581/products/3023814-403-1_720x@2x.jpg?v=1638870457' },
{ id: 2, productName: 'Macbook', count: 2, productPrice:'10', productImage: 'https://macmall.vn/uploads/mba-gray-m1-202011-cover_1605259444_1606717873.png' },
{ id: 3, productName: 'Nike Air Max 270', count: 2, productPrice:'20', productImage: 'https://static.nike.com/a/images/t_default/ouweg5dax808k3vqipcr/air-max-270-shoes-V4DfZQ.png' },
{ id: 4, productName: 'Adidas Ultraboost 21', count: 2, productPrice:'30', productImage: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/340/361/products/giay-ultraboost-21-trang-s23708-01-standard.jpg' },
{ id: 5, productName: 'Áo Adidas Juventus', count: 2, productPrice:'3', productImage: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6a8e5ed538544c6d9ffbaa250114e25e_9366/Ao_djau_san_nha_Juventus_DJen_DW5455_01_laydown.jpg' },
];

function OrderDetails({ BillID }) {
    const classes = useStyles();
    // const [products, setproducts] = useState([]);
    // useEffect(() => {
    //     async function getData() {
    //       try {
    //         // let res = await axios.get('https://fakestoreapi.com/products/');
    //         let res = await axios.post('http://localhost:8081/api/getallorder', {BillID : BillID});
    //         setproducts(res.data.products);
    //       } catch (error) {
    //         setproducts([]) 
    //       } 
    //     }
    //     getData();
    //   },)
    return (
        <div>
            <div>
                <List className={classes.list}>
                    { products.length > 0 &&
                    products.map((product) => (
                        <OrderDetail product={product}/>
                    ))}
                </List>
            </div>
        </div>
    );
}

export default OrderDetails;