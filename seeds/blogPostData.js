const { blogPost } = require('../models');

const blogpostdata = [
  {
    title: 'Science',
    description: 'How many planets are there?',
    id: 1, // Associate this post with a user
    category: 'Science', // Associate this post with a topic
  },
  {
    title: 'Daylight Savings',
    description: 'Does anyone know the science behind daylight savings?',
    id: 2, // Associate this post with a user
    category: 'General', // Associate this post with a topic
  },
  {
    title: 'Daylight Savings',
    description: 'Does anyone know the science behind daylight savings?',
    id: 3, // Associate this post with a user
    category: 'Health and Lifestyle', // Associate this post with a topic
  },
  {
    title: 'Daylight Savings',
    description: 'Does anyone know the science behind daylight savings?',
    id: 4, // Associate this post with a user
    category: 'Advice', // Associate this post with a topic
  },
  {
    title: 'Daylight Savings',
    description: 'Does anyone know the science behind daylight savings?',
    id: 5, // Associate this post with a user
    category: 'General', // Associate this post with a topic
  },
  {
    title: 'Daylight Savings',
    description: 'Does anyone know the science behind daylight savings?',
    id: 6, // Associate this post with a user
    category: 'General', // Associate this post with a topic
  }
];

const seedblogPost = () => blogPost.bulkCreate(blogpostdata);

module.exports = seedblogPost;
