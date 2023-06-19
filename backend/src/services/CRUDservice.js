import bcrypt from "bcryptjs";
import db from "../models/index"
const salt = bcrypt.genSaltSync(10);
let createNewUser = async (data) =>{
    let hashPasswordFromBcrypt = await hashUserPassword(data.password);
    return new Promise(async (resolve, reject) => {
    try {
      let hashPasswordFromBcrypt = await hashUserPassword(data.password);
      await db.User.create({
        name: data.name,
        username: data.username,
        password: hashPasswordFromBcrypt,
        phoneNumber: data.phoneNumber,
        email: data.email,
        gender:
          data.gender == 1 ? "female" : data.gender == 0 ? "male" : "other",
        typeUser: data.typeUser,
      });
      resolve("create new user succeeded");
    } catch (e) {
      console.log(e);
    }
  });

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
let getAllUser = () => {
  return new Promise(async(resolve, reject) => {

    try {
      let users =  db.User.findAll();
      resolve(users)
      }
     catch (e) {
      reject(e);
    } 
  })
}

module.exports = {
    createNewUser : createNewUser,
    getAllUser : getAllUser,
}