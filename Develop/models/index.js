const User = require('./User');
const blogPost = require('./blogPost');
const Comments = require('./Comments');

blogPost.hasMany(Comments, {
  foreignKey: 'blogPost_category',
});

Comments.belongsTo(blogPost, {
  foreignKey: 'comments_category',
});

module.exports = { User, blogPost ,Comments };
