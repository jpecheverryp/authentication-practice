const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('User List');
});

router.get('/new', (req, res) => {
  res.send('User New Form');
});

router.post('/', (req, res) => {
  res.send('Create User');
});

router
  .route('/:id')
  .get((req, res) => {
    const userId = req.params.id;
    res.send(`User Get with ID: ${userId}`);
  })
  .put((req, res) => {
    const userId = req.params.id;
    res.send(`User put with ID: ${userId}`);
  })
  .delete((req, res) => {
    const userId = req.params.id;
    res.send(`User Delete with ID: ${userId}`);
  });

module.exports = router;
