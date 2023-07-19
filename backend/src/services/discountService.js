import db from '../models/index'
const { Op } = require('sequelize');

let getAllDiscounts = () => {
    return new Promise (async (resolve, reject) => {
        try {
            let data = await db.Promo.findAll({
                attributes: ['promoID','code','startDate','endDate','quanti','promoValue'],
                order: [['endDate', 'DESC']]   
            });
            resolve(data)
        } catch (e){
            reject(e)
        }
    })
}

let getOneDiscount = (req) => {
    return new Promise (async (resolve, reject) => {
        try {
            let data = await db.sequelize.query(
                `SELECT promoID, quanti, promoValue
                FROM Promo
                WHERE code = :code`,
                { replacements: { code: req.code }, type: db.sequelize.QueryTypes.SELECT}
            );
            resolve(data)
        } catch (e){
            reject(e)
        }
    })
}

let createDiscount = (data) => {
    return new Promise (async(resolve, reject) => {
        try{
            let kt = await db.Promo.findOne({
                where: {code : data.code}
            })
            if (kt){
                resolve("Mã code đã tồn tại")
            } else {
                await db.sequelize.query(
                    `INSERT INTO Promo(code, quanti, promoValue)
                    VALUES (:code, :quanti, :promoValue)`,
                    { replacements: { code: data.code, quanti: data.quanti, promoValue: data.promoValue }, type: db.sequelize.QueryTypes.INSERT}
                );
                resolve("Thêm mã thành công");
            }
        }catch(e){
            reject(e);
        }
    })
}

let updateDiscount = (data) => {
    return new Promise (async(resolve, reject) => {
        try{
            await db.sequelize.query(
                `UPDATE Promo
                SET quanti = :quanti
                WHERE promoID = :promoID`,
                { replacements: { promoID: data.promoID, quanti: data.quanti }, type: db.sequelize.QueryTypes.UPDATE}
            );
            resolve();
        }catch(e){
            reject(e);
        }
    })
}

let deleteDiscount = (data) => {
    return new Promise (async (resolve, reject) => {
        try{
            await db.sequelize.query(
                `DELETE FROM Promo
                WHERE promoID = :promoID`,
                { replacements: { promoID: data.promoID }, type: db.sequelize.QueryTypes.DELETE}
            );
            resolve();
        }catch(e){
            reject(e)
        }
    })
}

module.exports = {
    getAllDiscounts : getAllDiscounts,
    getOneDiscount : getOneDiscount,
    createDiscount : createDiscount,
    updateDiscount : updateDiscount,
    deleteDiscount : deleteDiscount,
}