import productService from '../services/productService'

let getallProducts = async (req, res) => {
    let productsData = await productService.getProducts();
    return res.status(200).json({
        productsData
    })
}

let getoneProduct = async (req, res) => {
    let productData = await productService.getProduct(req.params.id);
    return res.status(200).json({
        productData
    }) 
}

module.exports = {
    getallProducts: getallProducts,
    getoneProduct: getoneProduct,

}