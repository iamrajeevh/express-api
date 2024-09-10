const express = require('express');
const router = express.Router();

router.get('*',(req,res) =>{
    return res.send('i am default user route');
})


module.exports = router;