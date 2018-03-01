const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');


router.use(bodyParser.urlencoded({extended: true}))
router.use(bodyParser.json());


const User = require('./User');

router.post('/', (req,res)=>{
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    },
    (err,user)=>{
        if(err){
            return res.status(500).send("there was a problem finding the user");
            res.status(200).send(users);
        }
    }
)
})


module.exports = router;