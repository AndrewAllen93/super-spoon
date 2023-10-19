const sequelize = require('../Develop/config/connection'); // Import your Sequelize configuration
const userData = require('./userData.json');
const forumTopicsData = require('./forumTopics.json');
const forumPostsData = require('./forumPosts.json');
const User = require('../Develop/models/User');
const ForumTopic = require('../Develop/models/ForumTopic');
const ForumPost = require('../Develop/models/ForumPost');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
  });

  await ForumTopic.bulkCreate(forumTopicsData);

  await ForumPost.bulkCreate(forumPostsData);

  process.exit(0);
};

seedDatabase();
