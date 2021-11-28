const posts = require('../posts');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json(posts);
});

module.exports = router;
