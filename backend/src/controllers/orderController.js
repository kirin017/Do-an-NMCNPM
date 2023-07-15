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
    const products = await orderServie.getAllUserOrder(data);
    return res.status(200).json({
        products
    }) 
}

let  getAllOrders = async(req,res) => {
    const orders = await orderServie.getAllOrder();
    return res.status(200).json({
        orders
    }) 
}
module.exports = {
    Order : Order,
    getUserOrders : getUserOrders,
    getAllOrders : getAllOrders,
}