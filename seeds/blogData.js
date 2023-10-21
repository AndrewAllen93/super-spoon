const { blogPost } = require('../models');

const blogData = [
  {
    "title": "Science",
    "description": "How many planets are there?",
    "userId": '21', // Associate this post with a user
    "category": 'Science', // Associate this post with a topic
  },
  {
    "title": "Daylight Savings",
    "description": "Does anyone know the science behind daylight savings?",
    "userId": '2', // Associate this post with a user
    "category": 'General', // Associate this post with a topic
  },
  {
    "title": "Daylight Savings",
    "description": "Does anyone know the science behind daylight savings?",
    "userId": '2', // Associate this post with a user
    "category": 'General', // Associate this post with a topic
  },
  {
    "title": "Daylight Savings",
    "description": "Does anyone know the science behind daylight savings?",
    "userId": '2', // Associate this post with a user
    "category": 'General', // Associate this post with a topic
  },
  {
    "title": "Daylight Savings",
    "description": "Does anyone know the science behind daylight savings?",
    "userId": '2', // Associate this post with a user
    "category": 'General', // Associate this post with a topic
  },
  {
    "title": "Daylight Savings",
    "description": "Does anyone know the science behind daylight savings?",
    "userId": '2', // Associate this post with a user
    "category": 'General', // Associate this post with a topic
  }
];

const seedblogPost = () => blogPost.bulkCreate(blogData);

module.exports = seedblogPost;
