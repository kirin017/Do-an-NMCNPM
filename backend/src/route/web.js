import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router()

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    return app.use("/", router)

    router.post('/api/login', )
}

module.exports = initWebRoutes;