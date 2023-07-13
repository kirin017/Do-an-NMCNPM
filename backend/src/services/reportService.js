import db from '../models/index'

let updateDailyReport = async(req, res) => {
    return new Promise (async(resolve, reject) => {
        try{
            await db.sequelize.query(
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

module.exports = {
    updateDailyReport : updateDailyReport,

}