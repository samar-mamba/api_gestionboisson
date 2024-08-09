const express = require('express');
const router = express.Router();

const comCtrl = require('../controllers/commande');


router.post('/', comCtrl.createCom);
router.get('/', comCtrl.getAllCom);

module.exports = router;