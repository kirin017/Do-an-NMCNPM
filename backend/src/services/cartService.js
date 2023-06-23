import db from '../models/index'

let getProductInCart = (userID) => {
    return new Promise (async (resolve, reject) => {
        try {
            let data = await db.Product.findAll({
                include:[{
                    model: db.Cart,
                    association: db.Product.belongsTo(db.Cart, { foreignKey: 'productID', targetKey: 'productID' }), 
                }],
                // where: {userID: userID},
                // attributes: ['productID','productName','productImage','productPrice','count']
            });
            // let associations = data.map(item => item.get(include.association.as));
            console.log(1);
            resolve(data)
        } catch (e){
            reject(e)
        }
    })
}

module.exports = {
    getProductInCart : getProductInCart,

}