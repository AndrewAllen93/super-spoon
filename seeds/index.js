const sequelize = require('../config/connection');
const seedblogPost = require('./blogPostData');
const seedComments = require('./commentsData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedblogPost();

  await seedComments();

  process.exit(0);
};

seedAll();
