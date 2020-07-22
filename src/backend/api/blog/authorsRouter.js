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
//function returns sql query for adding new author row in sportmasterblogs database
const addNewAuthor = function(author) {
  const sql = `insert into authors ` +
              `(name) ` +
              `values('${author.name}')` ;     
 return sql;
};
//returns all rows of the given table
router.get("/", (req, res) => {
    pool.query(sqlFunction.getAllRows('authors'), function(err, results, fields) {
        if(err){
          console.log(`Error: ${err.sqlMessage}`);
          res.send(err);
        }
        res.json(results);
    });    
});
//add new row in the given table
router.post("/", (req, res) => {
    const author = req.body; 
    if(author.name=== undefined){
      const error = new Error('Undefined' );
      error.status =  413;
      error.message = 'Undefined'
      res.send({error});
    }else{
      pool.query(addNewAuthor(author), function(err, results, fields) {
        if(err){
          console.log(`Error: ${err.sqlMessage}`);
          res.send(err);
      }
        res.json(results);
      });
    } 
    
  });
//returns row with the given id and table
router.get("/:id", (req, res) => {
    const authorId = req.params.id;
    pool.query(sqlFunction.getRowById('author',authorId), function(err, results, fields) {
    if(err){
        console.log(`Error: ${err.sqlMessage}`);
        res.send(err);
    }
    res.json(results);    
    });
});
//update row with given id in the given table and properties
router.put("/:id", (req, res) => {
    const authorId = req.params.id;
    const columnName = req.body.columnName;
    const value = req.body.value;
    if(columnName=== undefined || value=== undefined){
      const error = new Error('Undefined' );
      error.status =  413;
      error.message = 'Undefined'
      res.send({error});
    }else{
      pool.query(sqlFunction.updateRowById('author',authorId,columnName,value), function(err, results, fields) {
        if(err){
          console.log(`Error: ${err.sqlMessage}`);
          res.send(err);
      }
        res.send(`The row with id of ${authorId} is updated!`);    
      });
    }
    
  });
  //delete row with given id in the given table 
router.delete("/:id", (req, res) => {
    const authorId = req.params.id;  
    pool.query(sqlFunction.deleteRowById('author',authorId), function(err, results, fields) {
      if(err){
        console.log(`Error: ${err.sqlMessage}`);
        res.send(err);
    }    
      res.send(`The row with id of ${authorId} is successfully deleted!`);    
    });
});
//Here goes the router
module.exports = router;