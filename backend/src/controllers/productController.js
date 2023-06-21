import productService from '../services/productService'

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
    getOneProduct : getOneProduct,
    addNewProduct : addNewProduct,
    updateOneProduct : updateOneProduct,
    getProductType : getProductType,
    addProductType : addProductType,
}