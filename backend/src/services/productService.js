import db from '../models/index'

let getProducts = () => {
    return new Promise (async (resolve, reject) => {
        try {
            let data = await db.Product.findAll({
                attributes: ['productID','productName','productImage','productPrice','productCount','productInfo'],
                order: [['productCount', 'DESC']]   
            });
            resolve(data)
        } catch (e){
            reject(e)
        }
    })
}

let getAccessoryProducts = () => {
    return new Promise (async (resolve, reject) => {
        try {
            let data = await db.Product.findAll({
                where: { productTypeID: 1},
                attributes: ['productID','productName','productImage','productPrice','productCount','productInfo'],
                order: [['productCount', 'DESC']]   
            });
            resolve(data)
        } catch (e){
            reject(e)
        }
    })
}

let getShirtProducts = () => {
    return new Promise (async (resolve, reject) => {
        try {
            let data = await db.Product.findAll({
                where: { productTypeID: 2},
                attributes: ['productID','productName','productImage','productPrice','productCount','productInfo'],
                order: [['productCount', 'DESC']]   
            });
            resolve(data)
        } catch (e){
            reject(e)
        }
    })
}

let getShortsProducts = () => {
    return new Promise (async (resolve, reject) => {
        try {
            let data = await db.Product.findAll({
                where: { productTypeID: 4},
                attributes: ['productID','productName','productImage','productPrice','productCount','productInfo'],
                order: [['productCount', 'DESC']]   
            });
            resolve(data)
        } catch (e){
            reject(e)
        }
    })
}

let getShoesProducts = () => {
    return new Promise (async (resolve, reject) => {
        try {
            let data = await db.Product.findAll({
                where: { productTypeID: 3},
                attributes: ['productID','productName','productImage','productPrice','productCount','productInfo'],
                order: [['productCount', 'DESC']]   
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
                    attributes: ['productID','productTypeID', 'productName','productImage','productPrice','productCount','productInfo']
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
                productInfo: data.productInfo,
            });
            resolve();
        }catch(e){
            reject(e);
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
                if (newData.productName)
                    {data.productName = newData.productName};
                if (newData.productImage)
                    {
                        data.productImage = newData.productImage;
                    };
                if (newData.productPrice)
                    {data.productPrice = newData.productPrice;};
                if (newData.productCount)
                    {data.productCount = newData.productCount;};
                if (newData.productInfo)
                    {data.productInfo = newData.productInfo;};
                
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
let deleteProduct = (newData) => {
    return new Promise (async(resolve, reject) => {
        try{
            const data = await db.Product.findOne(
                { where: {productID: newData.productID}, raw: false }
            );
            if (data){
                data.productCount = 0;
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
    getAccessoryProducts : getAccessoryProducts,
    getShirtProducts : getShirtProducts,
    getShortsProducts : getShortsProducts,
    getShoesProducts : getShoesProducts,
    getProduct : getProduct,
    addProduct : addProduct,
    updateProduct : updateProduct,
    getProductType : getProductType,
    addProductType : addProductType,
    deleteProduct : deleteProduct,
}