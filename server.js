const express = require('express');
const app = express();

const posts = [
  {
    username: 'Juan',
    title: 'Post 1',
  },
  {
    username: 'Joanne',
    title: 'Post 2',
  },
];

app.get('/', (req, res) => {
  console.log('Here');
  res.json({ message: 'hey' });
});

const userRouter = require('./routes/users');
app.use('/users', userRouter);

app.listen(3000);
