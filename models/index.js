const User = require('./User');
const blogPost = require('./BlogPost');
const Comments = require('./Comments');

blogPost.hasMany(Comments, {
  foreignKey: 'blogpost_id',
});

Comments.belongsTo(blogPost, {
  foreignKey: 'blogpost_id',
});

module.exports = { User, blogPost, Comments };