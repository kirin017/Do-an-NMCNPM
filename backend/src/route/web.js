import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController"
import productController from "../controllers/productController"

let router = express.Router()

let initWebRoutes = (app) => {  
    router.get('/', homeController.getHomePage);
    // API cho tài khoản user
    router.post('/api/login', userController.handleLogin);
    router.post('/api/signup', userController.hanldeSignUp);
    // API cho Product
    router.get('/api/products', productController.getAllProducts);
    router.get('/api/products/:id', productController.getOneProduct);
    router.post('/api/products/post', productController.addNewProduct);
    router.put('/api/products/update', productController.updateOneProduct);
    // API cho ProductType
    router.get('/api/productType', productController.getProductType);
    router.post('/api/productType/post', productController.addProductType);

    router.get('/crud', homeController.getCRUD);
    router.post('/post-crud', homeController.postCRUD)
    router.get('/get-crud', homeController.displayGetCRUD); 
    return app.use("/", router)
}

module.exports = initWebRoutes;