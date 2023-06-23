import db from '../models/index'

let userOrder = (data) => {
    return new Promise (async(resolve, reject) => {
        try{
            const currentDate = new Date();
            const newBill = await db.Bill.create({
                id: data.userID,
                customerName: data.customerName,
                customerPhoneNumber: data.phoneNumber,
                customerAddress: data.address,
                date: currentDate,
                paymentType: data.paymentType,
                shipCost: data.shipCost,
                totalCost: data.totalCost,
                statusID: 0,
                note: data.note
            });
            const newBillID = await db.Bill.findOne({
                where : {date: newBill.date, id: newBill.id}
            })
            // console.log(newBillID.billID)
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
                `SELECT productName, productImage, Product.ProductID, count, date
                FROM Bill INNER JOIN BillDetail ON Bill.billID = BillDetail.BillID 
                    INNER JOIN Product ON Product.ProductID = BillDetail.ProductID
                WHERE Bill.id = :userID;`,
                { replacements: { userID: data.userID }, type: db.sequelize.QueryTypes.SELECT}
            );
            resolve(products)
        }catch(e){
            reject(e)
        }
    })
}

module.exports = {
    userOrder: userOrder,
    getAllUserOrder : getAllUserOrder
}