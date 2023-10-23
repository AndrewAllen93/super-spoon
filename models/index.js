const User = require('./User');
const blogPost = require('./blogPost');
const Comments = require('./Comments');

blogPost.hasMany(Comments, {
  foreignKey: 'blog_post_category',
});

Comments.belongsTo(blogPost, {
  foreignKey: 'blog_post_category',
});

module.exports = { User, blogPost ,Comments };