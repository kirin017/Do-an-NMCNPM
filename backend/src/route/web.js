import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";
import productController from "../controllers/productController";
import cartController from "../controllers/cartController";
import orderController from "../controllers/orderController";
import accountController from "../controllers/accountController"
import reportController from "../controllers/reportController"
import discountController from "../controllers/discountController"


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
    router.post('/api/signupStaff', userController.hanldeSignUpStaff);
    router.get('/api/getuser', middleware, userController.handleGetUser);
    router.get('/api/getAllUser',  userController.handleGetAllUser);
    router.put('/api/user/update',userController.updateUser);
    router.delete('/api/user/delete',userController.handleDeleteUser);
    // API cho Product
    router.get('/api/products', productController.getAllProducts);
    router.get('/api/products/accessory', productController.getAccessoryProducts);
    router.get('/api/products/shirt', productController.getShirtProducts);
    router.get('/api/products/shorts', productController.getShortsProducts);
    router.get('/api/products/shoes', productController.getShoesProducts);
    router.get('/api/products/:id', productController.getOneProduct);
    router.post('/api/products/add', productController.addNewProduct);
    router.put('/api/products/update', productController.updateOneProduct);
    router.delete('/api/products/delete', productController.deleteOneProduct);
    // API cho ProductType
    router.get('/api/productType', productController.getProductType);
    router.post('/api/productType/post', productController.addProductType);
    // API cho giỏ hàng
    router.post('/api/productsCart', cartController.getProductCart);
    router.post('/api/productsCart/add', cartController.addProductCart);
    router.post('/api/productsCart/changequantity', cartController.updateProductQuantCart);
    router.post('/api/productsCart/delete', cartController.deleteProductCart)
    router.post('/api/productsCart/deleteAll', cartController.deleteAllProductCart)
    router.post('/api/productsCart/sumprice', cartController.SumPrice)
    // API cho đơn hàng
    router.post('/api/order', orderController.Order)
    router.post('/api/getUserOrder', orderController.getUserOrders)
    router.get('/api/getAllrOrder', orderController.getAllOrders)
    router.post('/api/userOrder', orderController.getAllOrderOfOneUser)
    router.post('/api/cancleOrder', orderController.cancleOrder)
    router.post('/api/getOrderProducts', orderController.getOrderProducts)
    router.post('/api/updateOrderStatus', orderController.updateOrderStatus)
    // API cho quản lý tài khoản 
    router.get('/api/accounts', accountController.getAllAccounts)
    // API cho báo cáo thống kê
    router.get('/api/report/updatedaily', reportController.updateDailyReport)
    router.post('/api/report/daily', reportController.DailyReport)
    router.post('/api/report/monthly', reportController.MonthlyReport)
    router.post('/api/report/yearly', reportController.YearlyReport)
    router.post('/api/report/monthlys', reportController.MonthlyReports)
    // API cho mã khuyến mãi
    router.get('/api/getDiscounts', discountController.getAllDiscounts)
    router.post('/api/getDiscount', discountController.getOneDiscount)
    router.post('/api/addDiscounts', discountController.createDiscount)
    router.post('/api/upadteDiscounts', discountController.updateDiscount)
    router.delete('/api/deleteDiscounts', discountController.deleteDiscount)

    router.get('/crud', homeController.getCRUD);
    router.post('/post-crud', homeController.postCRUD)
    router.get('/get-crud', homeController.displayGetCRUD); 
    return app.use("/", router)
}

module.exports = initWebRoutes;