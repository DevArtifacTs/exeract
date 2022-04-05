const express = require('express');

// import record router
const recordRouter = require('./record');

const router = express.Router();

// record router
router.use('/me/records', recordRouter);

// user router
router.post('/login', (req, res, next) => {});
router.post('/register', (req, res, next) => {});
router.get('/me', (req, res, next) => {});
router.put('/me', (req, res, next) => {});



module.exports = router ;