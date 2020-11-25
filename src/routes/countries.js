const {Router} = require('express');
const router = Router();
const countries = require('../countries.json');

router.get('/',(req,res)=>{
    res.json(countries);
});

module.exports = router;