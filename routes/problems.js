const express = require('express');
const router = express.Router();

const CreateProblem = require('../controllers/problems/create');
const UpdateProblem = require('../controllers/problems/Update');

router.post('/' , CreateProblem);
router.post('/update' , UpdateProblem);

module.exports = router;
