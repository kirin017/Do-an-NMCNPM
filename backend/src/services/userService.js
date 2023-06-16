import db from '../models/user'

let hanldeLogin = (username, password) => {
    new Promise(async(resolve, reject) => {
        try {
            let userData = {};
            // resolve(userData)
            let isExist =  checkUsername(username);
            if (isExist){
                // user already exist
                let user = await db.User.findOne({
                    where: { username : username }
                });
                if (user) {
                    // compare password
                    if (password === user.password){
                        userData.errCode = 0;
                        userData.errMessage = 'OK';
                        userData.user = user.name;
                    }else{
                        userData.errCode = 3;
                        userData.errMessage = 'Sai mật khẩu';
                    }
                } else{
                    userData.errCode = 2;
                    userData.errMessage = 'Tên đăng nhập không tồn tại!.'
                }
                
            }else{
                // return error
                userData.errCode = 1;
                userData.errMessage = 'Tên đăng nhập không tồn tại!.'
            }
            resolve(userData)
        } catch(e){
            reject(e)
        }
    })
}

let checkUsername = (username) => {
    new Promise(async (resolve, reject) => {
            try {
                let user = await db.User.findOne({
                    where: { username : username }
                });
                if (user) {
                    resolve(true)
                }else{
                    resolve(false)
                }
            } catch (e) {
                reject(e);
            }
    })
}

module.exports = {
    hanldeLogin: hanldeLogin
}