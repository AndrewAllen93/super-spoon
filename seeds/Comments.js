const {Comments} = require('../models')
const commentData = [
  {
    "category": "Topic 1",
    "name": 'Name 1',
    'title': 'title 1',
    'date': 'date1',
    "description": "Description for Topic 1"
  },
  {
    "title": "Topic 2",
    "description": "Description for Topic 2"
  }
]


const seedComments = () => Comments.bulkCreate(commentData);

module.exports = seedComments;