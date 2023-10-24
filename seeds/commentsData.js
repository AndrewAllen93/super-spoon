const {Comments} = require('../models');
const commentsdata = [

  {
    category: 'Science',
    blogpost_id: 1,
    date: '11/22/2015',
    description: 'There are 8 planets!',

  },
  {
    category: 'General',
    blogpost_id: 2,
    date: '10/20/2021',
    description: 'It occurs in order to save natural light, and was originallly due to saving power and fuel during WW1',
  },
  {
    category: 'Health and Lifestyle',
    blogpost_id: 3,
    date: '10/20/2021',
    description: 'Are you in a calorie deficit?',
  },
  {
    category: 'Advice',
    blogpost_id: 4,
    date: '09/15/2021',
    description: 'If they dismiss your feelings, and are very private!',

  },
  {
    category: 'Food',
    blogpost_id: 5,
    date: '10/20/2021',
    description: 'Quaker Oats pancake mix has been recalled.',
  },
  {
    category: 'Food',
    blogpost_id: 5,
    date: '10/24/2021',
    description: 'Idk about recalls, but i heard skittles were banned in Cali.',
  },
  {
    category: 'News',
    blogpost_id: 6,
    date: '10/10/2023',
    description: 'A former president was indicted!',

  },
]


const seedComments = () => Comments.bulkCreate(commentsdata);

module.exports = seedComments;