const User = require('../../models/user');

const UpdateProblem = async(req,res) => {
    try{
        const {userId , link ,type} = req.body;
        const user = await User.findById(userId).exec();

        let updatedProblems = Array.from(user.problems);

        let prblmIndx = updatedProblems.findIndex(prblm => prblm.link === link);

        type == "solve" ? 
        updatedProblems[prblmIndx].solved = true : 
        updatedProblems[prblmIndx].bookmared = true;
        
        user.problems = updatedProblems;
        
        await User.findByIdAndUpdate(userId, user);
        return res.status(200).json({ Message: 'success', user });
    }catch(err){
        console.error(err);
        res.status(500).send({ Message: "Internal server error" });
    }
}

module.exports = UpdateProblem;