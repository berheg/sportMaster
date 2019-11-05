const express = require('express');
const bodyParser = require('body-parser');
const triangleRoute = require('./api/triangle/triangleRouter');
const usersRoute = require('./api/blog/usersRouter');
const postsRoute = require('./api/blog/postsRouter');
const commentsRoute = require('./api/blog/commentsRouter');
const authorsRoute = require('./api/blog/authorsRouter');
const app = express();
app.use(bodyParser());

//middleware
app.use('/triangle', triangleRoute);
app.use('/blogs/users', usersRoute);
app.use('/blogs/posts', postsRoute);
app.use('/blogs/comment', commentsRoute);
app.use('/blogs/authors', authorsRoute);
const port= 5000;
app.listen(port, () =>{
  console.log(`Server listening on port ${port}`);
});