const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('Here');
  res.json({ message: 'hey' });
});

const userRouter = require('./routes/users');
const postRouter = require('./routes/posts');
app.use('/posts', postRouter);
app.use('/users', userRouter);

app.listen(3000);
