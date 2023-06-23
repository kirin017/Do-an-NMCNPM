import orderServie from "../services/orderService"

let Order = async(req,res) => {
    let data = req.body;
    await orderServie.userOrder(data);
    return res.status(200).json({
        errCode: 'Done'
    }) 
}

let getOrders = async(req,res) => {
    let data = req.body;
    const products = await orderServie.getAllUserOrder(data);
    return res.status(200).json({
        products
    }) 
}
module.exports = {
    Order : Order,
    getOrders : getOrders
}