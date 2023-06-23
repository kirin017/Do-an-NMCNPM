import db from '../models/index'

let getProductInCart = (userID) => {
    return new Promise (async (resolve, reject) => {
        try {
            // let data = await db.Product.findAll({
            //     include:[{
            //         model: db.Cart,
            //         required: true, 
            //         association: db.Product.belongsTo(db.Cart, { foreignKey: 'productID', targetKey: 'productID' }), 
            //     }],
            // });
            let data = await db.sequelize.query(
                `SELECT Product.productID, productName, productImage, productPrice, count
                FROM Product INNER JOIN Cart ON Product.productID = Cart.productID
                WHERE Cart.userID = :userID`,
                { replacements: { userID: userID },
                type: db.sequelize.QueryTypes.SELECT }
              );
            resolve(data)
        } catch (e){
            reject(e)
        }
    })
}

let addProductInCart = (data) => {
    return new Promise (async(resolve, reject) => {
        try{
            let ktProduct = await db.Cart.findOne({ 
                    where : {productID: data.productID},
                    raw : false,
                }) 
            if (!ktProduct){
                await db.Cart.create({
                    productID: data.productID,
                    userID: data.userID,
                    count: data.count,
                });
            }
            else {
                ktProduct.count ++;
                await ktProduct.save();
            }
            resolve();
        }catch(e){
            reject(e)
        }
    })
}

let updateProductQuantity = (data) => {
    return new Promise (async(resolve, reject) => {
        try{
            let Product = await db.Cart.findOne({ 
                    where : {productID: data.productID, userID: data.userID},
                    raw : false,
                })
            if (Product){
                console.log(data);
                Product.count = data.count;
                await Product.save();
            }
            resolve();
        }catch(e){
            reject(e)
        }
    })
}

let deleteProduct = (data) => {
    return new Promise (async(resolve, reject) => {
        try{
            await db.Cart.destroy({ 
                    where : {productID: data.productID, userID: data.userID},
                })
            resolve();
        }catch(e){
            reject(e)
        }
    })
}

let deleteAllProduct = (data) => {
    return new Promise (async(resolve, reject) => {
        try{
            await db.Cart.destroy({ 
                    where : {userID: data.userID},
                })
            resolve();
        }catch(e){
            reject(e)
        }
    })
}
module.exports = {
    getProductInCart : getProductInCart,
    addProductInCart : addProductInCart,
    updateProductQuantity : updateProductQuantity,
    deleteProduct : deleteProduct,
    deleteAllProduct : deleteAllProduct,
}