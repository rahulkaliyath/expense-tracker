const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const bcrypt = require('bcryptjs')
const config = require('config');
const jwt = require('jsonwebtoken');

router.get('/', (req,res) => {
    res.send("API/USER");
});

module.exports = router;