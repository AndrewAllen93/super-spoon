const sequelize = require('../config/connection');
const seedblogPost = require('./blogData');
const seedComments = require('./Comments');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedComments();

  await seedblogPost();

  process.exit(0);
};

seedAll();
