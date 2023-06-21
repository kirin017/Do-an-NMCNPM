import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController"
import productController from "../controllers/productController"

let router = express.Router()

let initWebRoutes = (app) => {  
    router.get('/', homeController.getHomePage);
    router.post('/api/login', userController.handleLogin);
    router.post('/api/signup', userController.hanldeSignUp);
    router.get('/api/products', productController.getallProducts);
    router.get('/api/products/:id', productController.getoneProduct);

    router.get('/crud', homeController.getCRUD);
    router.post('/post-crud', homeController.postCRUD)
    router.get('/get-crud', homeController.displayGetCRUD); 
    return app.use("/", router)
}

module.exports = initWebRoutes;