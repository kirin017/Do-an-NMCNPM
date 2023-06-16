import db from '../models/index'
import CRUDservice from '../services/CRUDservice';

let getHomePage = async (req, res) => {
  
    try {
        let data = await db.User.findOne({where : {username : '2'}});
        return res.render("homepage.ejs", {
        data: JSON.stringify(data),
        });
      } catch (e) {
        console.log(e);
      }
    };  
   
let getCRUD = (req, res) =>{
  return res.render("crud.ejs");
}

let postCRUD = async (req, res) =>{
  await CRUDservice.createNewUser(req.body)
  return res.send('post crud from server')
}

module.exports = {
    getHomePage: getHomePage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
}