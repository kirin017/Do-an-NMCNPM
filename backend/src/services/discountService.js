import db from '../models/index'

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
            let data = await db.Promo.findOne({
                where: {code: req.code},
                attributes: ['promoID','code','startDate','endDate','quanti','promoValue'],
                order: [['endDate', 'DESC']]   
            });
            resolve(data)
        } catch (e){
            reject(e)
        }
    })
}

let createDiscount = (data) => {
    return new Promise (async(resolve, reject) => {
        try{
            await db.Promo.create({
                code: data.code,
                startDate: data.startDate,
                endDate: data.endDate,
                quanti: data.quanti,
                promoValue: data.promoValue,
            });
            resolve();
        }catch(e){
            reject(e);
        }
    })
}

let updateDiscount = (newdata) => {
    return new Promise (async(resolve, reject) => {
        try{
            const data = await db.Promo.findOne({
                where: {promoID: newdata.promoID}, raw: false
            });
            if (data){
                if (newdata.code)
                    {data.code = newdata.code};
                if (newdata.startDate)
                    {data.startDate = newdata.startDate};
                if (newdata.endDate)
                    {data.endDate = newdata.endDate;}
                if (newdata.quanti)
                    {data.quanti = newdata.quanti;};
                if (newdata.promoValue)
                    {data.promoValue = newdata.promoValue;};
            }
            await data.save();
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