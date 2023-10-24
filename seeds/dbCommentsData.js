const {Comments} = require('../models');
const dbCommentsData = [
  {
    "category": "General",
    "id": '001',
    'title': 'Daylight Savings',
    'date': '10/20/2021',
    "description": "Does anyone know the science behind daylight savings?",
  },
  {
    "category": "General",
    "id":"002",
    "title": "Planets",
    "date": "11/22/2015",
    "description": "How many planets are there?",

  },
  {
    "category": "Health and Lifestyle",
    "id": '003',
    'title': 'Keto Diet',
    'date': '10/20/2021',
    "description": "Can any doctors explain the keto diet to me?",
  },
  {
    "category": "Advice",
    "id":"004",
    "title": "Relationship Issues",
    "date": "09/15/2021",
    "description": "When should you expect to be exclusive with a partner?",

  },
  {
    "category": "General Question",
    "id": '005',
    'title': 'Daylight Savings',
    'date': '10/20/2021',
    "description": "Does anyone know the science behind daylight savings?"
  },
  {
    "category": "Advice",
    "id":"006",
    "title": "Topic 2",
    "date": "07/21/2019",
    "description": "Description for Topic 2",

  }
]


const seedComments = () => Comments.bulkCreate(dbCommentsData);

module.exports = seedComments;