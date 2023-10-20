const { blogPost } = require('../models');

const blogPostdata = [
  {
    "title": "Post 1",
    "content": "Content for Post 1",
    "UserId": 1, // Associate this post with a user
    "ForumTopicId": 1 // Associate this post with a topic
  },
  {
    "title": "Post 2",
    "content": "Content for Post 2",
    "UserId": 2, // Associate this post with a user
    "ForumTopicId": 1 // Associate this post with a topic
  }
];

const seedblogPost = () => blogPost.bulkCreate(blogPostdata);

module.exports = seedblogPost;