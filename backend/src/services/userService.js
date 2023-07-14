import db from '../models/index'
import bcrypt from "bcryptjs";
var salt = bcrypt.genSaltSync(10);

let handleLogin = async (username, password) => {
    const existedUser = await db.User.findOne({where: {username}})

    if(!existedUser) return {message: 'User not found', succeed: false}

    const isPasswordValid = await bcrypt.compareSync(password, existedUser.password)
    if(!isPasswordValid) return {message: 'Password incorrect', succeed: false}

    return {
        succeed: true,
        message: 'OK',
        data: {
            id: existedUser.id,
            name: existedUser.name,
            role: existedUser.typeUser,
            username: existedUser.username
        }
    }



    // return new Promise(async(resolve, reject) => {
    //     try {



    //         let userData = {};    
    //         let isExist = await checkUsername(username);
    //         if (isExist){
    //             // user already exist
    //             let user = await db.User.findOne({
    //                 where: { username : username }
    //             });
    //             if (user) {
    //                 // compare password
    //                 let check = await bcrypt.compareSync(password, user.password);
    //                 if (check){
    //                     userData.errCode = 0;
    //                     userData.errMessage = 'OK';
    //                     userData.name = user.name;
    //                     userData.role = user.typeUser
    //                 }else{
    //                     userData.errCode = 3;
    //                     userData.errMessage = 'Sai mật khẩu';
    //                 }
    //             } else{
    //                 userData.errCode = 2; 
    //                 userData.errMessage = 'Tên đăng nhập không tồn tại!.'
    //             }
    //         }else{
    //             // return error
    //             userData.errCode = 2;
    //             userData.errMessage = 'Tên đăng nhập không tồn tại!.'
    //         }
    //         resolve(userData)
    //     } catch(e){
    //         reject(e)
    //     }
    // })
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
let hanldeSignUpStaff = (data) => {
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
                    typeUser : '1',
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

let getUser = (username) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne(
                { where: { username: username }}
            );
            if (user) {
                resolve(user)
            }else{
                resolve(null)
            }
        } catch (e) {
          reject(e);
        }
      });

}
let getAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findAll({attributes: ['name','phoneNumber', 'username', 'email','gender','typeUser']});
            if (user) {
                resolve(user)
            }else{
                resolve(null)
            }
        } catch (e) {
          reject(e);
        }
      });

}
let updateUser = (newData) => {
    return new Promise (async(resolve, reject) => {
        try{
            const data = await db.User.findOne(
                { where: {username: newData.username}, raw: false }
            );
            if (data){
                if (newData.FullName)
                    {data.name = newData.FullName};
                if (newData.password)
                    
                    {
                        let hashPasswordFromBcrypt = await hashUserPassword(newData.password);
                        data.password = hashPasswordFromBcrypt
                    };
                if (newData.gender)
                    {data.gender = newData.gender};
                if (newData.email)
                    {data.email = newData.email};
                if (newData.phone)
                    {data.phoneNumber = newData.phone};

                await data.save();
                resolve();
            }else{
                resolve();
            }
        } catch(e){
            reject(e);
        }
    })
}

module.exports = {
    handleLogin: handleLogin,
    hanldeSignUp: hanldeSignUp,
    getUser: getUser,
    updateUser:updateUser,
    getAllUser:getAllUser,
    hanldeSignUpStaff:hanldeSignUpStaff,
}