import React from 'react';
// import { useEffect, useState } from 'react';
import { Grid, Box, Button, Typography } from '@material-ui/core';
import CartItem from './CartItem/CartItem'
import useStyles from './styles';
import { useCookies } from 'react-cookie';
// import axios from 'axios';

const products = [
{ id: 1, name: 'Shoes', description: 'Running Shoes.', price:'$5', image: 'https://cdn.shopify.com/s/files/1/0456/5070/6581/products/3023814-403-1_720x@2x.jpg?v=1638870457' },
{ id: 2, name: 'Macbook', description: 'Apple Macbook.', price:'$10', image: 'https://macmall.vn/uploads/mba-gray-m1-202011-cover_1605259444_1606717873.png' },
{ id: 3, name: 'Nike Air Max 270', description: 'Giày thể thao nam Nike Air Max 270', price:'2.899.000', image: 'https://static.nike.com/a/images/t_default/ouweg5dax808k3vqipcr/air-max-270-shoes-V4DfZQ.png' },
{ id: 4, name: 'Adidas Ultraboost 21', description: 'Giày thể thao nam Adidas Ultraboost 21', price:'4.899.000', image: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/340/361/products/giay-ultraboost-21-trang-s23708-01-standard.jpg' },
{ id: 5, name: 'Áo Adidas Juventus', description: 'Áo bóng đá nam Adidas Juventus Home Jersey', price:'199.000', image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6a8e5ed538544c6d9ffbaa250114e25e_9366/Ao_djau_san_nha_Juventus_DJen_DW5455_01_laydown.jpg' },
];

const Cart = () => { 
  const classes = useStyles()
  const [cookies] = useCookies([]);
  // const [products, setproducts] = useState([]);

  // useEffect(() => {
  //   async function getData() {
  //     try {
  //       let res = await axios.get('https://fakestoreapi.com/products/');
  //       setproducts(res.data);
  //     } catch (error) {
  //       setproducts([]) 
  //     } 
  //   }
  //   getData();
  // }, [])
  

  return (
    <>
      {cookies.role==='0' ? (
        <main className={classes.content}>
          <Typography className={classes.typo}>
            Giỏ hàng của bạn
          </Typography>
          <div className={classes.boxContent}>
          
            <Box className={classes.box}>
              <Grid container justifyContent="center" spacing={2}>
                { products.length > 0 &&
                  products.map((product) => (
                  <Grid item key={product.id} xs={12} sm={6} md={4} lg={4}>
                    <CartItem product={product} />
                  </Grid>
                ))}
              </Grid>
            </Box>
            <div>
                <Button className={classes.button}>Xóa tất cả</Button>
                <Button className={classes.button}>Thanh toán</Button>      
            </div>
          </div>
        </main>
      ):(
        <Typography className={classes.typo}>
          Vui lòng đăng nhập để xem giỏ hàng.
        </Typography>
      )}
    </>
  );
};

export default Cart;