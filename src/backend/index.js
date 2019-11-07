const express = require('express');
const bodyParser = require('body-parser');
const triangleRoute = require('./api/triangle/triangleRouter');
const usersRoute = require('./api/blog/usersRouter');
const postsRoute = require('./api/blog/postsRouter');
const commentsRoute = require('./api/blog/commentsRouter');
const authorsRoute = require('./api/blog/authorsRouter');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(( req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Header", 
    "Origin, X-Requested-With, Content-Type,Accept, Authorization"
  );
  if(req.method==='OPTION'){
    res.header("Access-Control-Allow-Method", "PUT, POST, PATCH, DELETE");
    return res.status(200).json({});
  }
  next();  
 });
//middleware
app.use('/triangle', triangleRoute);
app.use('/blogs/users', usersRoute);
app.use('/blogs/posts', postsRoute);
app.use('/blogs/comment', commentsRoute);
app.use('/blogs/authors', authorsRoute);

app.use((req,res,next) => {
  const error = new Error('Not Found');
  error.status=404;
  next(error);  
})

app.use((error, req, res, next) => {
 res.status(error.status || 500);
 
 res.json({
   error:{
     message: error.message
   }
 });
});

const port= 5000;
app.listen(port, () =>{
  console.log(`Server listening on port ${port}`);
});