import cartService from '../services/cartService'

let getProductCart = async (req, res) => {
    let productsData = await cartService.getProductInCart(req.body.userID);
    return res.status(200).json({
        productsData
    })
}

module.exports = {
    getProductCart : getProductCart,
}