const {Comments} = require('../models')
const commentData = [
  {
    "category": "General",
    "name": 'Jack',
    'title': 'Daylight Savings',
    'date': '10/20/2021',
    "description": "Does anyone know the science behind daylight savings?"
  },
  {
    "category": "General",
    "name":"James",
    "title": "Planets",
    "date": "11/22/2015",
    "description": "",

  },
  {
    "category": "General Question",
    "name": 'Jack',
    'title': 'Daylight Savings',
    'date': '10/20/2021',
    "description": "Does anyone know the science behind daylight savings?"
  },
  {
    "category": "",
    "name":"",
    "title": "Topic 2",
    "date": "",
    "description": "Description for Topic 2",

  },
  {
    "category": "General Question",
    "name": 'Jack',
    'title': 'Daylight Savings',
    'date': '10/20/2021',
    "description": "Does anyone know the science behind daylight savings?"
  },
  {
    "category": "",
    "name":"",
    "title": "Topic 2",
    "date": "",
    "description": "Description for Topic 2",

  }
]


const seedComments = () => Comments.bulkCreate(commentData);

module.exports = seedComments;