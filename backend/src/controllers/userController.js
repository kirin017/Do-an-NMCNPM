import userService from '../services/userService'

let handleLogin = async (req, res) => {
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
    let userData = await userService.handleLogin(username, password);
    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.errMessage,
        userData
    })
}
let hanldeSignUp = async (req, res) => {
    let data = req.body
    if (!data.username || !data.name || !data.password || !data.phoneNumber|| !data.email|| data.gender == undefined){
        return res.status(200).json({
            errCode: 1,
            message: 'Missing input parameter!',
            user: data.username,
            pw: data.password,
            phone: data.phoneNumber,
            name: data.name,
            gender: data.gender,
            email : data.email
        })
    }
    let userData = await userService.hanldeSignUp(data);
    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.errMessage,
        userData
    })
    
}

module.exports = {
    handleLogin: handleLogin,
    hanldeSignUp: hanldeSignUp,
}