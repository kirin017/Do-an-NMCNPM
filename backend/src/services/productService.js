import db from '../models/index'

let getProducts = () => {
    return new Promise (async (resolve, reject) => {
        try {
            let data = await db.Product.findAll({
                attributes: ['productID','productName','productImage','productPrice','productCount', 'productInfo']
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
                    attributes: ['productID','productName','productImage','productPrice','productCount', 'productInfo']
                }
            )
            reslove(data)
        } catch(e){
            reject(e)
        }
    })
}

let addProduct = (data) => {
    return new Promise (async(resolve, reject) => {
        try{
            await db.Product.create({
                productTypeID: data.productTypeID,
                productName: data.productName,
                productImage: data.productImage,
                productPrice: data.productPrice,
                productCount: data.productCount,
            });
            resolve();
        }catch(e){
            reject(e)
        }
    })
}

let updateProduct = (newData) => {
    return new Promise (async(resolve, reject) => {
        try{
            const data = await db.Product.findOne(
                { where: {productID: newData.productID}, raw: false }
            );
            if (data){
                data.productName = newData.productName;
                data.productImage = newData.productImage;
                data.productPrice = newData.productPrice;
                data.productCount = newData.productCount;

                await data.save();
                resolve();
            }else{
                resolve();
            }
        } catch(e){
            reject(e);
        }
    })
}

let getProductType = () => {
    return new Promise (async(resolve, reject) => {
        try{
            let data = await db.ProductType.findAll({
                attributes: ['productTypeName']
            });
            resolve(data);
        }catch(e){
            reject(e);
        }
    })
}

let addProductType = (data) => {
    return new Promise (async(resolve, reject) => {
        try{
            await db.ProductType.create({
                productTypeName: data.productTypeName
            });
            resolve();
        }catch(e){
            reject(e)
        }
    })
}
module.exports = {
    getProducts : getProducts,
    getProduct : getProduct,
    addProduct : addProduct,
    updateProduct : updateProduct,
    getProductType : getProductType,
    addProductType : addProductType,
    
}