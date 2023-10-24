const {Comments} = require('../models');
const commentsdata = [

  {
    category: 'General',
    blogpost_id: 1,
    title: 'Planets',
    date: '11/22/2015',
    description: 'There are 8 planets!',

  },
  {
    category: 'General',
    blogpost_id: 2,
    title: 'Daylight Savings',
    date: '10/20/2021',
    description: 'It occurs in order to save natural light, and was originallly due to saving power and fuel during WW1',
  },
  {
    category: 'Health and Lifestyle',
    blogpost_id: 3,
    title: 'Fitness and Wellness',
    date: '10/20/2021',
    description: 'Are you in a calorie deficit?',
  },
  {
    category: 'Advice',
    blogpost_id: 4,
    title: 'Relationships',
    date: '09/15/2021',
    description: 'If they dismiss your feelings, and are very private!',

  },
  {
    category: 'General Question',
    blogpost_id: 5,
    title: 'Food Recalls',
    date: '10/20/2021',
    description: 'Quaker Oats pancake mix has been recalled.',
  },
  {
    category: 'News',
    blogpost_id: 6,
    title: 'Current Events',
    date: '10/10/2023',
    description: 'A former president was indicted!',

  },
]


const seedComments = () => Comments.bulkCreate(commentsdata);

module.exports = seedComments;