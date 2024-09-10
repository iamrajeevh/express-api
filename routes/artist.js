const express = require('express');
const router = express.Router();

router.get('/',(req,res) =>{
    console.log('helo');
    res.send('i am a artist');
});

module.exports = router;