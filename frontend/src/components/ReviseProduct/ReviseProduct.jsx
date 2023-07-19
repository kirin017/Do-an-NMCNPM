import * as React from 'react';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import { Avatar, Button, CssBaseline, TextField, Grid, Box, Typography, Container, Checkbox, FormControlLabel, MenuItem, InputLabel, FormControl, Select } from '@material-ui/core'
// import SelectBox from '../Narbar/Menu/SelectBox'
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Products/Product/Product';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

export default function SignUp() {
    const { id } = useParams();
    const classes = useStyles();
    const history = useHistory();
    const [productInfo, setproductInfo] = useState('');
    const [productPrice, setproductPrice] = useState('');
    const [productName, setproductName] = useState('');
    const [productTypeID, setproductTypeID] = useState('');
    const [productImage, setproductImage] = useState('');
    const [productCount, setproductCount] = useState('');
    const [warning, setWarning] = useState('');
    const [product, setProduct] = useState({})
    const numberInput = (inputValue) => {
        const filteredValue = inputValue.replace(/[^0-9]/g, '');
        return filteredValue;
      };
    useEffect(() => {
        async function getData() {
            try {
                let res = await axios.get(`http://localhost:8081/api/products/${id}`);
                setProduct(res.data.productData);
                setproductName(res.data.productData.productName)
                setproductImage(res.data.productData.productImage)
                setproductInfo(res.data.productData.productInfo)
                setproductCount(res.data.productData.productCount)
                setproductPrice(res.data.productData.productPrice)
                setproductTypeID(res.data.productData.productTypeID)
            } catch (error) {
                setProduct({})
            }
        }
        getData();
    }, [id]);
    console.log(product)
    const handleSubmit = () => {
        if (!(productInfo && productPrice && productName && productTypeID && productImage && productCount)){
            setWarning("Vui lòng nhập đầy đủ thông tin")
        } else{
            const data = {
                productID: id,
                productName: productName,
                productPrice: productPrice,
                productTypeID: productTypeID,
                productImage: productImage,
                productInfo: productInfo,
                productCount:productCount,
            };
            axios.put('http://localhost:8081/api/products/update', data)
                .then(response => {
                    history.push('/admin/product');
                })
                .catch(error => {});
        }
    };

    return (

        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <FormControl>
                <Box
                    style={{
                        border: '1px solid rgba(0, 0, 0, 0.12)',
                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
                        width: '800px',
                        height: '1000px',
                        marginLeft: '-750px',
                    }}>
                    <Box
                        sx={{
                            marginTop: 120,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}>
                        <Avatar
                            style={{ color: 'white', backgroundColor: '#0099FF' }}
                            sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <PermMediaIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sửa Sản Phẩm
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6} style={{ marginTop: '20  px' }}>
                                    <TextField
                                        id="xproductName"
                                        label="Tên Sản Phẩm "
                                        value={product.productName}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="productName"
                                        required
                                        fullWidth
                                        id="productName"
                                        label="Tên Sản Phẩm"
                                        autoFocus
                                        value={productName}
                                        onChange={e => setproductName(e.target.value)}
                                    />
                                </Grid>


                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6} style={{ marginTop: '30px' }}>
                                    <TextField
                                        id="xproductTypeID"
                                        label="Loại sản phẩm"
                                        value={product.productTypeID}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} style={{ marginTop: '20px' }} >
                                    <FormControl className={classes.formControl}>
                                        <InputLabel id="productTypeID">Loại Sản Phẩm</InputLabel>
                                        <Select
                                            labelId="productTypeID"
                                            id="productTypeID"
                                            value={productTypeID}
                                            onChange={e => setproductTypeID(e.target.value)}
                                        >
                                            <MenuItem value={1}>Phụ kiện thể thao</MenuItem>
                                            <MenuItem value={2}>Áo</MenuItem>
                                            <MenuItem value={3}>Giày</MenuItem>
                                            <MenuItem value={4}>Quần</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6} style={{ marginTop: '30px' }}>
                                    <TextField
                                        id="xproductImage"
                                        label="Hình Ảnh "
                                        value={product.productImage}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        variant="outlined"
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6} style={{ marginTop: '20px' }} >
                                    <TextField
                                        required
                                        fullWidth
                                        id="productImage"
                                        label="Hình ảnh"
                                        name="productImage"
                                        autoComplete="productImage"
                                        value={productImage}
                                        onChange={e => setproductImage(e.target.value)}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6} style={{ marginTop: '30px' }}>
                                    <TextField
                                        id="xproductCount"
                                        label="Số lượng"
                                        value={product.productCount}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        variant="outlined"
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6} style={{ marginTop: '20px' }} >
                                    <TextField
                                        required
                                        fullWidth
                                        id="productCount"
                                        label="Số lượng"
                                        name="productCount"
                                        autoComplete="productCount"
                                        value={productCount}
                                        onChange={e => setproductCount(numberInput(e.target.value))}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6} style={{ marginTop: '30px' }}>
                                    <TextField
                                        id="xproductPrice"
                                        label="Giá "
                                        value={product.productPrice}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} style={{ marginTop: '20px' }} >
                                    <TextField
                                        required
                                        fullWidth
                                        name="productPrice"
                                        label="Giá"
                                        type="productPrice"
                                        id="productPrice"
                                        value={productPrice}
                                        onChange={e => setproductPrice(numberInput(e.target.value))}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6} style={{ marginTop: '30px' }}>
                                    <TextField
                                        id="xproductInfo"
                                        label="Thông tin sản phẩm "
                                        value={product.productInfo}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} style={{ marginTop: '20px' }} >
                                    <TextField
                                        required
                                        fullWidth
                                        id="productInfo"
                                        label="Thông tin sản phẩm"
                                        name="productInfo"
                                        autoComplete="productInfo"
                                        value={productInfo}
                                        onChange={e => setproductInfo(e.target.value)}
                                    />
                                </Grid>
                            </Grid>
                            <Grid
                                style={{ marginTop: '20px' }}
                                item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="Xác nhận thông tin sản phẩm cung cấp là chính xác, cập nhật thông tin sản phẩm"
                                />
                            </Grid>
                            <div style={{ color: 'red' }}>{warning}</div>
                            <Button
                                style={{ marginTop: '50px', color: 'white', backgroundColor: '#0099FF' }}
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={()=>handleSubmit()}
                            >
                                Cập nhật
                            </Button>
                            <Grid container>
                            </Grid>
                        </Box>
                    </Box>
                    <Copyright
                        style={{ marginTop: '40px' }}
                        sx={{ mt: 5 }} />
                </Box>
            </FormControl>
            <FormControl style={{ marginLeft:40, marginTop: 200,}}>
                <Product
                product={{
                    productName: productName,
                    productPrice: productPrice,
                    productTypeID: productTypeID,
                    productImage: productImage,
                    productInfo: productInfo,
                    productCount:productCount
                }}></Product>
            </FormControl>
            
        </Container>
    );
}