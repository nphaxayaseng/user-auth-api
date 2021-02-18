
const router = require('./users');

const { createTask, seedTasks, updateTask, getTasks } = require('../controllers/taskController');

router.get('/', getTasks);
router.post('/', createTask );
router.post('/seedtasks', seedTasks);
router.put('/', updateTask);
module.exports = router;