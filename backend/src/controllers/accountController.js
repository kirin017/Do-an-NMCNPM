import accountService from '../services/accountService'

let getAllAccounts = async (req, res) => {
    let accountsData = await accountService.getAccounts();
    return res.status(200).json({
        accountsData
    })
}

module.exports = {
    getAllAccounts : getAllAccounts,
}