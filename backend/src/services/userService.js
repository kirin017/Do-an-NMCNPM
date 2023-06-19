import db from '../models/index'
import bcrypt from "bcryptjs";
var salt = bcrypt.genSaltSync(10);

let handleLogin = (username, password) => {
    return new Promise(async(resolve, reject) => {
        try {
            let userData = {};    
            let isExist = await checkUsername(username);
            if (isExist){
                // user already exist
                let user = await db.User.findOne({
                    where: { username : username }
                });
                if (user) {
                    // compare password
                    let check = await bcrypt.compareSync(password, user.password);
                    if (check){
                        userData.errCode = 0;
                        userData.errMessage = 'OK';
                        userData.name = user.name;
                        userData.role = user.typeUser
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
                userData.errCode = 2;
                userData.errMessage = 'Tên đăng nhập không tồn tại!.'
            }
            resolve(userData)
        } catch(e){
            reject(e)
        }
    })
}

let hanldeSignUp = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            let userData = {};    
            let isExist = await checkUsername(data.username);
            if (!isExist){
                // user not already exist
                let hashPasswordFromBcrypt = await hashUserPassword(data.password);
                await db.User.create({
                    name: data.name,
                    username: data.username,
                    password: hashPasswordFromBcrypt,
                    phoneNumber: data.phoneNumber,
                    email: data.email,
                    gender:
                      data.gender == 1 ? "female" : data.gender == 0 ? "male" : "other",
                    typeUser : 0,
                  });
                userData.errCode = 0;
                userData.errMessage = 'OK';
                userData.name = data.name;
                userData.role = data.typeUser
            }else{
                // return error
                userData.errCode = 2;
                userData.errMessage = 'Tên đăng nhập đã tồn tại!.'
            }
            resolve(userData)
        } catch(e){
            reject(e)
        }
    })
}

let checkUsername = (username) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne(
                { where: { username: username }}
            );
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

let getProducts = () => {
    return new Promise (async (resolve, reject) => {
        try {
            let data = await db.Product.findAll();
            resolve(data)
        } catch (e){
            reject(e)
        }
    })
}
let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
          let hashPassword = await bcrypt.hashSync(password, salt);
          resolve(hashPassword);
        } catch (e) {
          reject(e);
        }
      });

};
module.exports = {
    handleLogin: handleLogin,
    getProducts: getProducts,
    hanldeSignUp: hanldeSignUp
}