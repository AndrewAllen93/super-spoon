const router = require('express').Router();
const { blogPost, Comments } = require('../../models');
// Import the custom middleware
const withAuth = require('../../utils/auth');

// GET all posts for homepage
router.get('/', async (req, res) => {
  try {
    const dbblogPostData = await blogPost.findAll({
      include: [
        {
          model: Comments,
          attributes: ['userID', 'description'],
        },
      ],
    });

    const blogPost = dbblogPostData.map((blogPost) =>
      blogPost.get({ plain: true })
    );

    res.render('homepage', {
      Comments,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one blogpost
// Use the custom middleware before allowing the user to access the gallery
router.get('/blogPost/:category', withAuth, async (req, res) => {
  try {
    const dbblogPostData = await blogPost.findByPk(req.params.id, {
      include: [
        {
          model: blogPost,
          attributes: [
            'category',
            'name',
            'title',
            'date',
            'description',
          ],
        },
      ],
    });

    const Comments = dbCommentsData.get({ plain: true });
    res.render('comments', { Comments, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one comment
// Use the custom middleware before allowing the user to access the painting
router.get('/comment/:title', withAuth, async (req, res) => {
  try {
    const dbCommentsData = await Comments.findByPk(req.params.id);

    const blogPost = dbblogPostData.get({ plain: true });

    res.render('comments', { Comments, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;