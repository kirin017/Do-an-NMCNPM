import productService from '../services/productService'

let getShoesProducts = async (req, res) => {
    let productsData = await productService.getShoesProducts();
    return res.status(200).json({
        productsData
    })
}

let getAccessoryProducts = async (req, res) => {
    let productsData = await productService.getAccessoryProducts();
    return res.status(200).json({
        productsData
    })
}

let getShirtProducts = async (req, res) => {
    let productsData = await productService.getShirtProducts();
    return res.status(200).json({
        productsData
    })
}

let getShortsProducts = async (req, res) => {
    let productsData = await productService.getShortsProducts();
    return res.status(200).json({
        productsData
    })
}

let getAllProducts = async (req, res) => {
    let productsData = await productService.getProducts();
    return res.status(200).json({
        productsData
    })
}

let getOneProduct = async (req, res) => {
    let productData = await productService.getProduct(req.params.id);
    return res.status(200).json({
        productData
    }) 
}

let addNewProduct = async(req,res) => {
    let newProductData = req.body;
    await productService.addProduct(newProductData);
    return res.status(200).json({
        errCode: 'Done'
    }) 
}

let updateOneProduct = async(req, res) => {
    let newData = req.body;
    await productService.updateProduct(newData);
    return res.status(200).json({
        errCode: 'Done'
    }) 
}

let deleteOneProduct = async(req, res) => {
    let newData = req.body;
    await productService.deleteProduct(newData);
    return res.status(200).json({
        errCode: 'Done'
    }) 
}

let getProductType = async(req,res) => {
    let typeData = await productService.getProductType();
    return res.status(200).json({
        typeData
    })
}

let addProductType = async(req,res) => {
    let newType = req.body;
    await productService.addProductType(newType);
    return res.status(200).json({
        errCode: 'Done'
    }) 
}
module.exports = {
    getAllProducts : getAllProducts,
    getAccessoryProducts : getAccessoryProducts,
    getShirtProducts : getShirtProducts,
    getShortsProducts : getShortsProducts,
    getShoesProducts : getShoesProducts,
    getOneProduct : getOneProduct,
    addNewProduct : addNewProduct,
    updateOneProduct : updateOneProduct,
    deleteOneProduct : deleteOneProduct,
    getProductType : getProductType,
    addProductType : addProductType,
}