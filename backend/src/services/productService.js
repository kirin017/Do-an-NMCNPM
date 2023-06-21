import db from '../models/index'

let getProducts = () => {
    return new Promise (async (resolve, reject) => {
        try {
            let data = await db.Product.findAll({
                attributes: ['productID','productName','productImage','productPrice','productCount']
            });
            resolve(data)
        } catch (e){
            reject(e)
        }
    })
}

let getProduct = (productID) => {
    return new Promise (async(reslove, reject) => {
        try {
            let data = await db.Product.findOne(
                { 
                    where: {productID: productID},
                    attributes: ['productID','productName','productImage','productPrice','productCount']
                }
            )
            reslove(data)
        } catch(e){
            reject(e)
        }
    })
}

// let updateProduct = ()
module.exports = {
    getProducts: getProducts,
    getProduct: getProduct,
    
}