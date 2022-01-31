const router = require('express').Router();

const userRouters = require('./user-routes');
const postRoutes = require('./post-routes');

router.use('/users', userRouters);
router.use('/post', postRoutes);

module.exports = router;