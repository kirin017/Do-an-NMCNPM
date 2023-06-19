import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController"

let router = express.Router()

let initWebRoutes = (app) => {  
    router.get('/', homeController.getHomePage);
    router.post('/api/login', userController.handleLogin);
    router.post('/api/signup', userController.hanldeSignUp);
    router.get('/api/products', userController.getallProducts);
    router.get('/crud', homeController.getCRUD);
    router.post('/post-crud', homeController.postCRUD)
    router.get('/get-crud', homeController.displayGetCRUD); 
    return app.use("/", router)
}

module.exports = initWebRoutes;