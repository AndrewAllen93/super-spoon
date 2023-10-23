const router = require('express').Router();
const { Comments } = require('../../models');


router.post('/', async (req, res) => {
    try { 
      const newComment = await Comments.create({
      category: req.body.category,
      name: req.body.name,
      title: req.body.title,
      description: req.body.description,
      date: req.body.date,
    });
    res.status(200).json(newComment)
  } catch (err) {
    res.status(400).json(err);
  }
  });
  console.log(Comments);

router.get('/', async (req, res) => {
    try {
      const newComment = await Comments.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newComment);
    } catch (err) {
      res.status(400).json(err);
    }
  });


router.delete('/', async (req, res) => {
  try {
    const newComment = await Comments.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!newComment) {
      res.status(404).json({ message: 'No comment found with this id!' });
      return;
    }

    res.status(200).json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
