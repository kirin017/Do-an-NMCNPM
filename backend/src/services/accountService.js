import db from '../models/index'

let getAccounts = () => {
    return new Promise (async (resolve, reject) => {
        try {
            let data = await db.User.findAll({
                attributes: ['name','phoneNumber','email','gender','typeUser']
            });
            resolve(data)
        } catch (e){
            reject(e)
        }
    })
}

module.exports = {
    getAccounts : getAccounts,
}