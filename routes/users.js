const router = require('express').Router();
const { seedUsers } = require('../controllers/userController');

router.get('/', (req, res) => res.send("hello"));
router.post('/seedusers', seedUsers)

module.exports = router;