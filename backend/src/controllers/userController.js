import userService from '../services/userService'

let hanldeLogin = async (req, res) => {
    let username = req.body.username;
    let password = req.body.password;   
    if (!username || !password){
        return res.status(200).json({
            errCode: 1,
            message: 'Missing input parameter!'
        })
    }

    let userData = await userService.hanldeLogin(username, password);
    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.errMessage,
        userData
    })
}
let hanldeSignUp = async (req, res) => {
    
}

module.exports = {
    hanldeLogin: hanldeLogin
}