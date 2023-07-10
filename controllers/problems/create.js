const User = require('../../models/user');

const CreateProblem = async(req,res) => {
    try{
        const {name,link,platform,topic,userId} = req.body;

        const user = await User.findById(userId).exec();

        let updatedProblems = user.problems;
        let prblmIndx = updatedProblems.findIndex(prblm => prblm.link === link); 

        if(prblmIndx !== -1){
            return res.status(204).send({Message: "Already problem exists in your list"});
        }

        const newProblem = {
            name: name,
            link: link,
            platform: platform,
            topic: topic,
        };

        updatedProblems.push(newProblem);
        user.problems = updatedProblems;

        await User.findByIdAndUpdate(userId, user);
        return res.status(200).json({Message: "success",user});
    } catch(err){
        console.error(err);
        res.status(500).send({ Message: "Internal server error" });
    }

}

module.exports = CreateProblem;