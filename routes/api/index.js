const router = require('express').Router();

const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const sequelize = require('../../config/connection');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;