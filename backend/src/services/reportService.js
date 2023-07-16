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
                    SELECT SUM(totalCost)
                    FROM Bill
                    WHERE DATE_FORMAT(Bill.date, '%Y-%m-%d') = DailyReportDetail.date
                    AND Bill.statusID = 1
                    GROUP BY DATE_FORMAT(Bill.date, '%Y-%m-%d')
                ),
                billCount = (
                    SELECT Count(totalCost)
                    FROM Bill
                    WHERE DATE_FORMAT(Bill.date, '%Y-%m-%d') = DailyReportDetail.date
                    AND Bill.statusID = 3
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
                `SELECT DAY(date) AS stt, revenue, billCount
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

let YearlyReport = (data) => {
    return new Promise (async(resolve, reject) => {
        try{
            let report = await db.sequelize.query(
                `SELECT SUM(revenue) AS revenue, SUM(billCount) AS count
                FROM DailyReportDetail
                WHERE YEAR(date) = :year
                GROUP BY YEAR(date)`,
                {replacements: { year: data.year },type: db.sequelize.QueryTypes.SELECT}
            );
            resolve(report);
        }catch(e){
            reject(e)
        }
    }) 
}

let MonthlyReports = (data) => {
    return new Promise (async(resolve, reject) => {
        try{
            let report = await db.sequelize.query(
                `SELECT MONTH(date) AS stt, SUM(revenue) AS revenue, SUM(billCount) AS billCount
                FROM DailyReportDetail
                WHERE YEAR(date) = :year
                GROUP BY MONTH(date)`,
                {replacements: { year: data.year },type: db.sequelize.QueryTypes.SELECT}
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
    YearlyReport : YearlyReport,
    MonthlyReports : MonthlyReports,
}