const router = require('express').Router();
const sequelize = require('../../config/connection')
const Menu = require('../../models/Menu');


router.get('/', async(req,res)=>{
    try{
        const menuData = await Menu.findAll({})
        return res.json(menuData)
    } catch (err){
        console.error(err)
    }
})









module.exports = router;