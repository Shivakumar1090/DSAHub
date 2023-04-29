const express = require('express');
const router = express.Router();

const CreateProblem = require('../controllers/problems/create');
const GetUserProblems = require('../controllers/problems/get');

router.get('/:id' , GetUserProblems);
router.post('/' , CreateProblem);
// router.delete('/problem' , );

module.exports = router;
