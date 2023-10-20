const { blogPost } = require('../models');

const blogPostdata = [
  {
    "title": "Science",
    "content": "How many planets are there?",
    "UserId": '21', // Associate this post with a user
    "ForumTopicId": 'Science', // Associate this post with a topic
  },
  {
    "title": "Daylight Savings",
    "content": "Does anyone know the science behind daylight savings?",
    "UserId": '2', // Associate this post with a user
    "ForumTopicId": 'General', // Associate this post with a topic
  },
  {
    "title": "Daylight Savings",
    "content": "Does anyone know the science behind daylight savings?",
    "UserId": '2', // Associate this post with a user
    "ForumTopicId": 'General', // Associate this post with a topic
  },
  {
    "title": "Daylight Savings",
    "content": "Does anyone know the science behind daylight savings?",
    "UserId": '2', // Associate this post with a user
    "ForumTopicId": 'General', // Associate this post with a topic
  },
  {
    "title": "Daylight Savings",
    "content": "Does anyone know the science behind daylight savings?",
    "UserId": '2', // Associate this post with a user
    "ForumTopicId": 'General', // Associate this post with a topic
  },
  {
    "title": "Daylight Savings",
    "content": "Does anyone know the science behind daylight savings?",
    "UserId": '2', // Associate this post with a user
    "ForumTopicId": 'General', // Associate this post with a topic
  }
];

const seedblogPost = () => blogPost.bulkCreate(blogPostdata);

module.exports = seedblogPost;