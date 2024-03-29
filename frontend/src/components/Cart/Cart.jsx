import React from 'react';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Box, Button, Typography } from '@material-ui/core';
import CartItem from './CartItem/CartItem'
import useStyles from './styles';
import { useCookies } from 'react-cookie';
import axios from 'axios';

// const products = [
// { id: 1, name: 'Shoes', description: 'Running Shoes.', price:'$5', image: 'https://cdn.shopify.com/s/files/1/0456/5070/6581/products/3023814-403-1_720x@2x.jpg?v=1638870457' },
// { id: 2, name: 'Macbook', description: 'Apple Macbook.', price:'$10', image: 'https://macmall.vn/uploads/mba-gray-m1-202011-cover_1605259444_1606717873.png' },
// { id: 3, name: 'Nike Air Max 270', description: 'Giày thể thao nam Nike Air Max 270', price:'2.899.000', image: 'https://static.nike.com/a/images/t_default/ouweg5dax808k3vqipcr/air-max-270-shoes-V4DfZQ.png' },
// { id: 4, name: 'Adidas Ultraboost 21', description: 'Giày thể thao nam Adidas Ultraboost 21', price:'4.899.000', image: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/340/361/products/giay-ultraboost-21-trang-s23708-01-standard.jpg' },
// { id: 5, name: 'Áo Adidas Juventus', description: 'Áo bóng đá nam Adidas Juventus Home Jersey', price:'199.000', image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6a8e5ed538544c6d9ffbaa250114e25e_9366/Ao_djau_san_nha_Juventus_DJen_DW5455_01_laydown.jpg' },
// ];

const Cart = () => { 
  const classes = useStyles()
  const [cookies] = useCookies([]);
  const [products, setproducts] = useState([]);
  const [warning, setWarning] = useState('');
  const history = useHistory();

  useEffect(() => {
    async function getData() {
      try {
        let res = await axios.post('http://localhost:8081/api/productsCart', {userID:cookies.id});
        setproducts(res.data.productsData);
      } catch (error) {
        setproducts([]) 
      } 
    }
    getData();
  }, [cookies.id])
  const handleAllDelete = async() => {
    let data = {
        userID : cookies.id,
    };
    await axios.post("http://localhost:8081/api/productsCart/deleteAll", data)
    history.go(0);
  }
  const handleOrder = async() => {
    let checkResponse = await axios.post("http://localhost:8081/api/checkOrder", {userID: cookies.id})
    if (+checkResponse.data.check[0].total > 0){
      setWarning("Một số mặt hàng đã hết. Vui lòng kiểm tra lại giỏ hàng!")
    }else{
      history.push('/subcheckout');
      history.go(0);
    }
  }
  return (
    
    <>
      {cookies.role==='0' ? (
        <main className={classes.content}>
          <Typography className={classes.typo}>
            Giỏ hàng của bạn
          </Typography>
          {products.length > 0 ? (
            <div className={classes.boxContent}>
              <Box className={classes.box}>
                <Grid container justifyContent="center" spacing={2}>
                    {products.length > 0 &&
                    products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={4}>
                      <CartItem product={product} />
                    </Grid>
                  ))}
                </Grid>
              </Box>
              <div>
                  <Button className={classes.button} onClick={handleAllDelete}>Xóa tất cả</Button>
                  <Button onClick={()=>handleOrder()}className={classes.button}>Thanh toán</Button>      
                  <Typography style={{ color: 'red' }}>{warning}</Typography>
              </div>
            </div>
          ):(
            <Typography>Giỏ hàng đang trống</Typography>
          )}
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