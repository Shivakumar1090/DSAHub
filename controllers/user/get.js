const User = require('../../models/user');

const GetUserDetails = async(req,res) => {
    try{
        const {id} = req.params;
        User.findById(id)
            .then(data => res.status(200).send(data))
            .catch(err => res.send({Message: "Internal server error"}));
    }catch(err){
        console.log(err);
        res.status(500).send({ Message: "Internal server error" });
    }
}

module.exports = GetUserDetails;