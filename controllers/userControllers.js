const { use } = require("chai");
const User   = require("../models/user.js");
const { string } = require("joi");

const areIndrectFriends = async (req, res) => {

    try{
        const { userName1, userName2 } = req.body;
        //Write your code here.

    }catch(err){
        
        res.status(500).json({
            status: 'fail',
            message: 'Something went wrong'
        });
    }
}


module.exports = { areIndrectFriends };
