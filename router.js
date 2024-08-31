const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/users', controller.getUsers);
router.post('/createuser', controller.AddUser);
router.put('/updateuser', controller.UpdateUser);
router.delete('/deleteuser', controller.DeleteUser);

module.exports = router;