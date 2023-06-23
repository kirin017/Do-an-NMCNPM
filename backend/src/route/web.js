import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController"
import productController from "../controllers/productController"
import cartController from "../controllers/cartController"

let router = express.Router()

const middleware = (req, res, next) => {
    const {username, role} = req.cookies
    req['username'] = username
    req['role'] = role
    if(!username) return res.json({msg: 'Access deined'})
    next();
}

let initWebRoutes = (app) => {  
    router.get('/', homeController.getHomePage);
    // API cho tài khoản user
    router.post('/api/login', userController.handleLogin);
    router.post('/api/signup', userController.hanldeSignUp);
    router.get('/api/getuser', middleware, userController.handleGetUser);
    router.put('/api/user/update',userController.updateUser);
    // API cho Product
    router.get('/api/products', productController.getAllProducts);
    router.get('/api/products/:id', productController.getOneProduct);
    router.post('/api/products/post', productController.addNewProduct);
    router.put('/api/products/update', productController.updateOneProduct);
    // API cho ProductType
    router.get('/api/productType', productController.getProductType);
    router.post('/api/productType/post', productController.addProductType);
    // API cho giỏ hàng
    router.post('/api/productsCart', cartController.getProductCart);
    router.get('/crud', homeController.getCRUD);
    router.post('/post-crud', homeController.postCRUD)
    router.get('/get-crud', homeController.displayGetCRUD); 
    return app.use("/", router)
}

module.exports = initWebRoutes;