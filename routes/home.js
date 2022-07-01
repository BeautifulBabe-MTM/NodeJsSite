const {Router} = require('express')
const router = Router()
const Optium = require('../models/House')
const User = require('../models/User')

router.get('/',async(req, res)=>{
    const optiums = await House.find({}).lean()
    res.render('index', {
        title: 'DomRia',
        optiums
    })
})
router.get('/admin',async(req, res)=>{
    const optium = await House.find({}).lean()
    
    res.render('admin', {
        title: 'OptiumStariy', 
        optium})
})
router.post('/login',async(req, res)=>{
    
    const user = new User({
        Login: req.body.Login,
        Password: req.body.Password
    })
    await user.save()
    res.redirect('/')
})
router.post('/createproduct',async(req, res)=>{
    const optium = new House({
        Name: req.body.Name,
        Price: req.body.Price,
        Image: req.body.Image
     
    })
    await optium.save()
    res.redirect('/')
})
router.post('/deleteproduct',async(req, res)=>{

    console.log(req.body.id)
    const optium = await House.findById(req.body.id)
    await optium.remove()
    res.redirect('/admin')
})

module.exports = router
