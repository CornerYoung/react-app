const express = require('express')
const router = express.Router()

router.get('/api/list',(req,res)=>{
    res.send([
        {
            name:"James",
            age:35
        },
        {
            name:"LiMing",
            age:20
        }
    ])
})

module.exports = router