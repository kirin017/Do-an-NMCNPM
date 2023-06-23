import cartService from '../services/cartService'

let getProductCart = async (req, res) => {
    let productsData = await cartService.getProductInCart(req.body.userID);
    return res.status(200).json({
        productsData
    })
}
let addProductCart = async(req,res) => {
    let data = req.body;
    await cartService.addProductInCart(data);
    return res.status(200).json({
        errCode: 'Done'
    }) 
}

let updateProductQuantCart = async(req,res) => {
    let data = req.body;
    await cartService.updateProductQuantity(data);
    return res.status(200).json({
        errCode: 'Done'
    }) 
}

let deleteProductCart = async(req,res) => {
    let data = req.body;
    await cartService.deleteProduct(data);
    return res.status(200).json({
        errCode: 'Done'
    }) 
}

let deleteAllProductCart = async(req,res) => {
    let data = req.body;
    await cartService.deleteAllProduct(data);
    return res.status(200).json({
        errCode: 'Done'
    }) 
}
module.exports = {
    getProductCart : getProductCart,
    addProductCart : addProductCart,
    updateProductQuantCart: updateProductQuantCart,
    deleteProductCart : deleteProductCart,
    deleteAllProductCart : deleteAllProductCart,
}