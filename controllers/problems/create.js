const User = require('../../models/user');
const Problems = require('../../models/problems');

const CreateProblem = async(req,res) => {
    try{
        const {name,link,platform,topic,userId} = req.body;
    
        const savedProblem = await Problems.findOne({link: link}).exec();
        const user = await User.findById(userId).populate('problems').exec();

        let updatedProblems = user.problems;

        let prblmIndx = updatedProblems.findIndex(prblm => prblm.link === link);
        
        if(prblmIndx !== -1){
            return res.send({Message: "Already problem exists in your list"});
        }

        if(!savedProblem){
            const newProblem = new Problems({
                name: name,
                link: link,
                platform: platform,
                topic: topic,
            });
            await newProblem.save();
            updatedProblems.push(newProblem);
        }
        else{
            updatedProblems.push(savedProblem);
        }

        user.problems = updatedProblems;

        await User.findByIdAndUpdate(userId, user);
        return res.json({Message: "success"});
    } catch(err){
        console.error(err);
        res.status(500).send({ Message: "Internal server error" });
    }

}

module.exports = CreateProblem;