import userService from '../services/userService'

let handleLogin = async (req, res) => {
    let username = req.body.username;
    let password = req.body.password;   
    if (!username || !password){
        return res.status(200).json({
            errCode: 1,
            message: 'Missing input parameter!',
        })
    }

    let userData = await userService.handleLogin(username, password);

    if(!userData.succeed) return res.json({message: 'Login failed'})

    res.cookie('username', userData.data.username, {
        maxAge: 24*60*60*1000 // 24h
    })

    res.cookie('role', userData.data.role, {
        maxAge: 24*60*60*1000 // 24h
    })

    return res.status(200).json(userData)
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
let hanldeSignUpStaff = async (req, res) => {
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
    let userData = await userService.hanldeSignUpStaff(data);
    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.errMessage,
        userData
    })
    
}
let handleGetUser = async(req, res ) => {
    let user = await userService.getUser(req.username)
    return res.status(200).json({
        succeed: true,
        message: 'ok',
        data: user
    })
}
let handleGetAllUser = async(req, res ) => {
    let user = await userService.getAllUser()
    return res.status(200).json({
        succeed: true,
        message: 'ok',
        data: user
    })
}
let handleLogout = async (req, res) =>  {
    res.cookie('username', '', {maxAge: 0})
    res.cookie('role', '', {maxAge: 0})
    res.json({msg: 'Log out successfully'})
}
let updateUser = async(req, res) => {
    let newData = req.body;
    await userService.updateUser(newData);
    return res.status(200).json({
        errCode: 'Done'
    }) 
}
let handleDeleteUser = async (req, res) => {
    if (!req.query.username) {
      return res.status(200).json({
        errCode: 1,
        errMessage: "Missing required parameters!",
      });
    }
  
    let message = await userService.deleteUser(req.query.username);
    return res.status(200).json(message);
  };
module.exports = {
    handleLogin: handleLogin,
    hanldeSignUp: hanldeSignUp, 
    handleGetUser: handleGetUser,
    handleLogout: handleLogout,
    updateUser: updateUser,
    handleGetAllUser:handleGetAllUser,
    hanldeSignUpStaff:hanldeSignUpStaff,
    handleDeleteUser:handleDeleteUser,
}