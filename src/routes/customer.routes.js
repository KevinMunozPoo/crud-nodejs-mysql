const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customer.controller');

router.get('/', customerController.list);
router.post('/add', customerController.save);
router.get('/edit/:id', customerController.edit);
router.put('/update/:id', customerController.update);
router.delete('/delete/:id', customerController.delete);

module.exports = router;
