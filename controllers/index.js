const router = require('express').Router();
//var inherits = require('inherits');


const apiRoutes = require('./api');
const homeRoutes = require('./api/home-routes');
const conversationRoutes = require('./api/conversations');

router.use('/', conversationRoutes);
router.use('/', homeRoutes);
router.use('/api', apiRoutes);


module.exports = router;
