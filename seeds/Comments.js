const {Comments} = require('../models');
const commentData = [
  {
    "category": "General",
    "name": 'Jack',
    'title': 'Daylight Savings',
    'date': '10/20/2021',
    "description": "Does anyone know the science behind daylight savings?",
  },
  {
    "category": "General",
    "name":"James",
    "title": "Planets",
    "date": "11/22/2015",
    "description": "How many planets are there?",

  },
  {
    "category": "Health and Lifestyle",
    "name": 'Hannah',
    'title': 'Keto Diet',
    'date': '10/20/2021',
    "description": "Can any doctors explain the keto diet to me?",
  },
  {
    "category": "Advice",
    "name":"Molly",
    "title": "Relationship Issues",
    "date": "09/15/2021",
    "description": "When should you expect to be exclusive with a partner?",

  },
  {
    "category": "General Question",
    "name": 'Jack',
    'title': 'Daylight Savings',
    'date': '10/20/2021',
    "description": "Does anyone know the science behind daylight savings?"
  },
  {
    "category": "Advice",
    "name":"Sarah",
    "title": "Topic 2",
    "date": "",
    "description": "Description for Topic 2",

  }
]


const seedComments = () => Comments.bulkCreate(commentData);

module.exports = seedComments;