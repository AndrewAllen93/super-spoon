const router = require('express').Router();

const userRoutes = require('../../controllers/user-routes');

router.use('/users', userRoutes);

module.exports = router;