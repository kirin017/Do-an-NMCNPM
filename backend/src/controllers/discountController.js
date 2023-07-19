import discountService from "../services/discountService"

let getAllDiscounts = async (req, res) => {
    let data = await discountService.getAllDiscounts();
    return res.status(200).json({
        data
    })
}

let getOneDiscount = async (req, res) => {
    let re = req.body;
    let data = await discountService.getOneDiscount(re);
    return res.status(200).json({
        data
    })
}

let createDiscount = async(req,res) => {
    let data = req.body;
    await discountService.CreateDisCount(data);
    return res.status(200).json({
        errCode: 'Done'
    }) 
}

let updateDiscount = async(req,res) => {
    let data = req.body;
    await discountService.updateDiscount(data);
    return res.status(200).json({
        errCode: 'Done'
    }) 
}

let deleteDiscount = async(req,res) => {
    let data = req.body;
    await discountService.DeleteDiscount(data);
    return res.status(200).json({
        errCode: 'Done'
    }) 
}

module.exports = {
    getAllDiscounts : getAllDiscounts,
    getOneDiscount : getOneDiscount,
    createDiscount : createDiscount,
    deleteDiscount : deleteDiscount,
    updateDiscount : updateDiscount,
}