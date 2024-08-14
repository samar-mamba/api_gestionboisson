const express = require('express');
const router = express.Router();

const comCtrl = require('../controllers/commande');
const auth = require('../controllers/middleware/auth');


router.post('/', comCtrl.createCom);
router.get('/',auth, comCtrl.getAllCom);
router.patch('/:id',comCtrl.udpdateCell)

module.exports = router;