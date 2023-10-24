const router = require("express").Router();
const { blogPost, Comments } = require("../../models");
// Import the custom middleware
const withAuth = require("../../utils/auth");

// GET all posts for the homepage
router.get("/", async (req, res) => {
  try {
    const blogPostData = await blogPost.findAll({
      include: [
        {
          model: Comments,
          attributes: ["id", "date", "description"],
        },
      ],
    });

    const blogPosts = blogPostData.map((blogPost) =>
      blogPost.get({ plain: true })
    );
      console.log(blogPosts)
      const randomBlog = blogPosts[Math.floor(Math.random() * blogPosts.length)];
      console.log("RANDOM ELEMENT", randomBlog)
    res.render("homepage", {
      blogPosts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one blogpost
router.get("/blogPost/:id", withAuth, async (req, res) => {
  try {
    const blogPostData = await blogPost.findByPk(req.params.id, {
      include: [
        {
          model: Comments,
          attributes: ["id", "date", "description"],
        },
      ],
    });

    const blogPosts = blogPostData.get({ plain: true });
    res.render("blogPost", { blogPosts, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one comment by ID
router.get("/comment/:id", withAuth, async (req, res) => {
  try {
    const dbCommentsData = await Comments.findByPk(req.params.id);

    const Comment = dbCommentsData.get({ plain: true });

    res.render("comment", { Comment, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// Create a route to handle the form submission
router.post('/create-blog-post', withAuth, async (req, res) => {
  try {
    // Get the data from the form
    const { title, category, description } = req.body;

    // Create a new blog post in the database
    const newBlogPost = await blogPost.create({
      title,
      description,
      category,
      // Include other properties as needed
    });

    // Redirect to the page that displays the newly created blog post
    res.redirect(`/blogPost/${newBlogPost.id}`);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
  } else {
    res.render("login");
  }
});

module.exports = router;
