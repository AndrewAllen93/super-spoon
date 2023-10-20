const sequelize = require('../config/connection'); // Import your Sequelize configuration
const userData = require('./userData.json');
const CommentsData = require('./Comments');
const blogPostData = require('./blogData');
const User = require('../models/User');
const { blogPost } = require('../models');
const { Comments } = require('../models');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
  });

  await blogPost.bulkCreate(blogPostData);

  await Comments.bulkCreate(CommentsData);

  process.exit(0);
};

seedDatabase();