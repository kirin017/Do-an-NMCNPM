import reportService from "../services/reportService"

let updateDailyReport = async (req, res) => {
    await reportService.updateDailyReport();
    return res.status(200).json({
        errCode: 'Done'
    })
}

let DailyReport = async(req, res) => {
    let data = req.body;
    let report = await reportService.DailyReport(data);
    return res.status(200).json({
        errCode: 'OK',
        response: report
    })
}

let MonthlyReport = async(req, res) => {
    let data = req.body;
    let report = await reportService.MonthlyReport(data);
    return res.status(200).json({
        errCode: 'Done',
        response: report
    })
}

let YearlyReport = async(req, res) => {
    let data = req.body;
    let report = await reportService.YearlyReport(data);
    return res.status(200).json({
        errCode: 'Done',
        response: report
    })
}

let MonthlyReports = async(req, res) => {
    let data = req.body;
    let report = await reportService.MonthlyReports(data);
    return res.status(200).json({
        errCode: 'Done',
        response: report
    })
}
module.exports = {
    updateDailyReport : updateDailyReport,
    DailyReport : DailyReport,
    MonthlyReport : MonthlyReport,
    YearlyReport : YearlyReport,
    MonthlyReports : MonthlyReports,
}