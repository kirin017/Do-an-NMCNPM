import orderServie from "../services/orderService"

let Order = async(req,res) => {
    let data = req.body;
    await orderServie.userOrder(data);
    return res.status(200).json({
        errCode: 'Done'
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
module.exports = {
    Order : Order,
    getUserOrders : getUserOrders,
    getAllOrders : getAllOrders,
    cancleOrder : cancleOrder,
    getOrderProducts : getOrderProducts,
}