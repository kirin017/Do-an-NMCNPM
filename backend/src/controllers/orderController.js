import orderServie from "../services/orderService"

let Order = async(req,res) => {
    let data = req.body;
    await orderServie.userOrder(data);
    return res.status(200).json({
        errCode: 'Done'
    }) 
}

let CheckOrder = async(req,res) => {
    let data = req.body;
    let check = await orderServie.CheckOrder(data);
    return res.status(200).json({
        check: check
    }) 
}

let getUserOrders = async(req,res) => {
    let data = req.body;
    const orders = await orderServie.getAllUserOrder(data);
    return res.status(200).json({
        orders
    }) 
}

let  getAllOrders = async(req,res) => {
    const orders = await orderServie.getAllOrder();
    return res.status(200).json({
        orders
    }) 
}

let cancleOrder = async(req, res) => {
    let data = req.body;
    const errCode = await orderServie.cancelOrder(data);
    return res.status(200).json({
        errCode : errCode
    }) 
}

let getOrderProducts = async(req, res) => {
    let data = req.body;
    const products = await orderServie.getOrderProducts(data);
    return res.status(200).json({
        products : products
    }) 
}

let getAllOrderOfOneUser = async(req, res) => {
    let data = req.body;
    let orders = await orderServie.getAllOrderOfOneUser(data);
    return res.status(200).json({
        orders : orders
    }) 
}

let updateOrderStatus = async(req, res) => {
    let data = req.body;
    const products = await orderServie.updateOrderStatus(data);
    return res.status(200).json({
        errCode : 'Done'
    }) 
}

module.exports = {
    Order : Order,
    CheckOrder : CheckOrder,
    getUserOrders : getUserOrders,
    getAllOrders : getAllOrders,
    cancleOrder : cancleOrder,
    getOrderProducts : getOrderProducts,
    updateOrderStatus : updateOrderStatus,
    getAllOrderOfOneUser : getAllOrderOfOneUser,
}