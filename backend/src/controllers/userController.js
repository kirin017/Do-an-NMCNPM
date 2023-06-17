import userService from '../services/userService'

let hanldeLogin = async (req, res) => {
    let username = req.body.username;
    let password = req.body.password;   
    if (!username || !password){
        return res.status(200).json({
            errCode: 1,
            message: 'Missing input parameter!',
            user: username,
            pw: password,
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
let getallProducts = async (req, res) => {
        productData = await userService.getProducts();
        return res.status(200).json({
            productData
        })
}
module.exports = {
    hanldeLogin: hanldeLogin,
    getallProducts: getallProducts
}