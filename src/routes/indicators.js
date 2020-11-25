const {Router} = require('express');
const router = Router();
const indicators = require('../indicators.json');

router.get('/',(req,res)=>{
    res.json(indicators);
});

module.exports = router;