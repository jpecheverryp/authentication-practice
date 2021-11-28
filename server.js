const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('Here');
  res.json({ message: 'hey' });
});

const userRouter = require('./routes/users');
const postRouter = require('./routes/posts');
const authRouter = require('./routes/auth');
app.use('/posts', postRouter);
app.use('/users', userRouter);
app.use('/login', authRouter);

app.listen(3000);
