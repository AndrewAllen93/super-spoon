const sequelize = require('../config/connection'); // Import your Sequelize configuration
const seedBlogPost = require('./blogData')
const seedComments = require('./Comments')

const seedAll = async () => {
  await sequelize.sync({ force : true});
  
  await seedBlogPost();
  
  await seedComments();
  
  process.exit(0);
};

seedAll();