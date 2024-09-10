const express = require('express');
const router = express.Router();
const artistRouter  = require('./artist');


router.use('/artist',artistRouter);

router.get('*',(req,res)=>{
    return res.send('i am default routes')
})

module.exports  =  router;