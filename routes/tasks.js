
const router = require('./users');

const { createTask, getUserTasks, seedTasks, updateTask, getTasks } = require('../controllers/taskController');
const { verifyToken } = require('../controllers/loginController');
router.get('/', getTasks);
router.post('/usertasks', verifyToken, getUserTasks)
router.post('/', createTask );
router.post('/seedtasks', seedTasks);
router.put('/', updateTask);
module.exports = router;