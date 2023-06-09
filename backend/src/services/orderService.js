import db from '../models/index'
import cartService from "./cartService"

let userOrder = (data) => {
    return new Promise (async(resolve, reject) => {
        try{
            const currentDate = new Date();
            const totalCost = await cartService.SumCartPrice({userID: data.userID});
            const newBill = await db.Bill.create({
                id: data.userID,
                customerName: data.customerName,
                customerPhoneNumber: data.phoneNumber,
                customerAddress: data.address,
                date: currentDate,
                paymentType: data.paymentType,
                shipCost: data.shipCost,
                totalCost: totalCost[0].TotalPrice,
                statusID: 0,
                note: data.note
            });
            const newBillID = await db.Bill.findOne({
                where : {date: newBill.date, id: newBill.id}
            })
            // console.log(newBillID.billID)
            await updateWareHouse(data.userID)
            await makeOrderDetail(data, newBillID.billID)
            resolve();
        }catch(e){
            reject(e)
        }
    })
}

let makeOrderDetail = (data, billID) => {
    return new Promise (async(resolve, reject) => {
        try{
            await db.sequelize.query(
                `INSERT INTO BillDetail (productID, count, billID)
                SELECT productID, count, :billID
                FROM Cart
                WHERE userID = :userID;`,
                { replacements: { userID: data.userID, billID: billID },}
            );
            await db.Cart.destroy({ 
                where : {userID: data.userID},
            })
            resolve()
        }catch(e){
            reject(e)
        }
    })
}

let getAllUserOrder = (data) => {
    return new Promise (async(resolve, reject) => {
        try{
            const products = await db.sequelize.query(
                `SELECT productName, productImage, Product.ProductID, count, date, productPrice
                FROM Bill INNER JOIN BillDetail ON Bill.billID = BillDetail.BillID 
                    INNER JOIN Product ON Product.ProductID = BillDetail.ProductID
                WHERE Bill.id = :userID
                ORDER BY date DESC;`,
                { replacements: { userID: data.userID }, type: db.sequelize.QueryTypes.SELECT}
            );
            resolve(products)
        }catch(e){
            reject(e)
        }
    })
}

let updateWareHouse = (userID) => {
    return new Promise (async(resolve, reject) => {
        try{
            await db.sequelize.query(
                `UPDATE Product
                SET productCount = productCount - (
                    SELECT count
                    FROM Cart
                    WHERE Cart.productID = Product.productID
                    AND Cart.userID = :userID)
                WHERE ProductID IN (
                    SELECT ProductID
                    FROM Cart
                    WHERE Cart.userID = :userID
                );`,
                { replacements: { userID: userID }, type: db.sequelize.QueryTypes.UPDATE}
            );
            resolve()
        }catch(e){
            reject(e)
        }
    })
}

module.exports = {
    userOrder: userOrder,
    getAllUserOrder : getAllUserOrder
}