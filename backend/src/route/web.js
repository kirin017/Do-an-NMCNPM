import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController"

let router = express.Router()

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.post('/api/login', userController.hanldeLogin);
    router.get('/crud', homeController.getCRUD);
    router.post('/post-crud', homeController.postCRUD)
    return app.use("/", router)
}

module.exports = initWebRoutes;