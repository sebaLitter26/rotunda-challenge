const { Router } = require('express');
const { zooGet, alarmGet, urlGet } = require('../controllers');

const router = Router();

router.get('/zoo',[], zooGet );
router.get('/alarm',[], alarmGet );
router.get('/url/:version/api/:collection/:id',[], urlGet );

module.exports = router;