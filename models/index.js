const User = require('./User');
const Post = require('./post')
const Vote = require('./Vote');

// create associations
User.hasMany(Post, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Post };