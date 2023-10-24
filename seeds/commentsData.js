const {Comments} = require('../models');
const commentsdata = [
  {
    category: 'General',
    blogpost_id: 1,
    title: 'Daylight Savings',
    date: '10/20/2021',
    description: 'Does anyone know the science behind daylight savings?',
  },
  {
    category: 'General',
    blogpost_id: 2,
    title: 'Planets',
    date: '11/22/2015',
    description: 'How many planets are there?',

  },
  {
    category: 'Health and Lifestyle',
    blogpost_id: 3,
    title: 'Keto Diet',
    date: '10/20/2021',
    description: 'Can any doctors explain the keto diet to me?',
  },
  {
    category: 'Advice',
    blogpost_id: 4,
    title: 'Relationship Issues',
    date: '09/15/2021',
    description: 'When should you expect to be exclusive with a partner?',

  },
  {
    category: 'General Question',
    blogpost_id: 5,
    title: 'Daylight Savings',
    date: '10/20/2021',
    description: 'Does anyone know the science behind daylight savings?',
  },
  {
    category: 'Advice',
    blogpost_id: 6,
    title: 'Topic 2',
    date: '07/21/2019',
    description: 'Description for Topic 2',

  },
]


const seedComments = () => Comments.bulkCreate(commentsdata);

module.exports = seedComments;