

const router = require('express').Router();
const { seedUsers } = require('../controllers/userController');

router.get('/', (req, res) => res.send("hello"));
router.post('/seedusers', seedUsers)

router.post('/task', async (req, res) =>{

} )

module.exports = router;