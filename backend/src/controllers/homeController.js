import db from '../models/index'
import CRUDservice from '../services/CRUDservice';

let getHomePage = async (req, res) => {
  
    try {
        let data = await db.Status.findAll();
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
let displayGetCRUD = async (req, res) => {
  
      let data = await CRUDservice.getAllUser()
      console.log(data)
      return res.render('displayCRUD.ejs')
}
module.exports = {
    getHomePage: getHomePage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD
}