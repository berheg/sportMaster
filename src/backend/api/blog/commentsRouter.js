const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const pool = require("../../data/database");
const sqlFunction = require('../../assets/sqlFunction');

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());
router.use(bodyParser());
//function returns sql query for adding new postcomments row in sportmasterblogs database
const addNewPostcomment = function(postcomment) {
  const sql = `insert into postcomments ` +
              `(description, user_id, post_id) ` +
              `values('${postcomment.description}', '${postcomment.user_id}', '${postcomment.post_id}')` ;     
 return sql;
};
//returns all rows of the given table
router.get("/", (req, res) => {
    pool.query(sqlFunction.getAllRows('postcomments'), function(err, results, fields) {
        if(err){
          console.log(`Error: ${err.sqlMessage}`);
          return;
        }
        res.json(results);
    });    
});
//add new row in the given table
router.post("/", (req, res) => {
    const postcomment = req.body;
    if(postcomment.user_id=== undefined || postcomment.description=== undefined || postcomment.post_id=== undefined){
      const error = new Error('Undefined' );
      error.status =  413;
      error.message = 'Undefined';
      res.send({error})
    }else{
      pool.query(addNewPostcomment(postcomment), function(err, results, fields) {
        if(err){
          console.log(`Error: ${err.sqlMessage}`);
          res.send(err);
      }
        //`The row with ${postcomment} is successfully added!`
        res.json(results);
      });
    }  
    
  });
//returns row with the given id and table
router.get("/:id", (req, res) => {
    const postcommentId = req.params.id;
    pool.query(sqlFunction.getRowById('postcomments',postcommentId), function(err, results, fields) {
    if(err){
        console.log(`Error: ${err.sqlMessage}`);
        res.send(err);
    }
    res.json(results);    
    });
});
//update row with given id in the given table and properties
router.put("/:id", (req, res) => {
    const postcommentId = req.params.id;
    const columnName = req.body.columnName;
    const value = req.body.value;
    if(columnName=== undefined || value=== undefined){
      const error = new Error('Undefined' );
      error.status =  413;
      error.message = 'Undefined'
      res.send({error})
    }else{
      pool.query(sqlFunction.updateRowById('postcomments',postcommentId,columnName,value), function(err, results, fields) {
        if(err){
          console.log(`Error: ${err.sqlMessage}`);
          res.send(err);
      }
        res.send(`The row with id of ${postcommentId} is updated!`);    
      });
    }
    
});
  //delete row with given id in the given table 
router.delete("/:id", (req, res) => {
    const postcommentId = req.params.id;  
    pool.query(sqlFunction.deleteRowById('postcomments',postcommentId), function(err, results, fields) {
      if(err){
            console.log(`Error: ${err.sqlMessage}`);
            res.send(err);
        }    
      res.send(`The row with id of ${postcommentId} is successfully deleted!`);    
    });
});
//Here goes the router
module.exports = router;
  