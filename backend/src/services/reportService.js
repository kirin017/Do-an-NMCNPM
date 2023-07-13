import db from '../models/index'

let updateDailyReport = () => {
    return new Promise (async(resolve, reject) => {
        try{
            await db.sequelize.query(
                `INSERT INTO DailyReportDetail (date)
                SELECT DISTINCT DATE_FORMAT(Bill.date, '%Y-%m-%d')
                FROM Bill
                WHERE DATE_FORMAT(Bill.date, '%Y-%m-%d') NOT IN (
                    SELECT DATE_FORMAT(DailyReportDetail.date, '%Y-%m-%d')
                    FROM DailyReportDetail)`,
                {type: db.sequelize.QueryTypes.INSERT}
            );
            await db.sequelize.query(
                `UPDATE DailyReportDetail
                SET revenue = (
                    SELECT Sum(totalCost)
                    FROM Bill
                    WHERE DATE_FORMAT(Bill.date, '%Y-%m-%d') = DailyReportDetail.date
                    GROUP BY DATE_FORMAT(Bill.date, '%Y-%m-%d')
                ),
                billCount = (
                    SELECT Count(totalCost)
                    FROM Bill
                    WHERE DATE_FORMAT(Bill.date, '%Y-%m-%d') = DailyReportDetail.date
                    GROUP BY DATE_FORMAT(Bill.date, '%Y-%m-%d')
                )`,
                {type: db.sequelize.QueryTypes.UPDATE}
            );
            resolve()
        }catch(e){
            reject(e)
        }
    }) 
}

let DailyReport = (data) => {
    return new Promise (async(resolve, reject) => {
        try{
            let report = await db.sequelize.query(
                `SELECT DAY(date) AS day, revenue, billCount
                FROM DailyReportDetail
                WHERE MONTH(date) = :month AND YEAR(date) = :year`,
                {replacements: { month: data.month, year: data.year },type: db.sequelize.QueryTypes.SELECT}
            );
            resolve(report);
        }catch(e){
            reject(e)
        }
    }) 
}

let MonthlyReport = (data) => {
    return new Promise (async(resolve, reject) => {
        try{
            let report = await db.sequelize.query(
                `SELECT SUM(revenue) AS revenue, SUM(billCount) AS count
                FROM DailyReportDetail
                WHERE YEAR(date) = :year AND MONTH(date) = :month
                GROUP BY MONTH(date)`,
                {replacements: { month: data.month, year: data.year },type: db.sequelize.QueryTypes.SELECT}
            );
            resolve(report);
        }catch(e){
            reject(e)
        }
    }) 
}

module.exports = {
    updateDailyReport : updateDailyReport,
    MonthlyReport : MonthlyReport,
    DailyReport : DailyReport,
}