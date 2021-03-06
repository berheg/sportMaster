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
//function returns sql query for adding new meal row in sportmasterblogs database
const addNewPost = function(post) {
    const sql = `insert into post ` +
                `(title, description) ` +
                `values('${post.title}','${post.description}')`;     
   return sql;
};
//returns all rows of the given table
router.get("/", (req, res) => {
    pool.query(sqlFunction.getAllRows('post'), function(err, results, fields) {
        if(err){
        console.log(`Error: ${err.sqlMessage}`);
        res.send(err);
        }
        res.json(results);
    });    
});
//add new row in the given table
router.post("/", (req, res) => {
    const post = req.body;  
    console.log(post)
    if(post.title=== undefined || post.description=== undefined){
        const error = new Error('Undefined' );
        error.status =  413;
        error.message = 'Undefined';
        res.send({error})
    }else{
        pool.query(addNewPost(post), function(err, results, fields) {
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
    const postId = req.params.id;    
    pool.query(sqlFunction.getRowById('post',postId), function(err, results, fields) {
    if(err){
        console.log(`Error: ${err.sqlMessage}`);
        res.send(err);
    }
    res.json(results);    
    });
});
//update row with given id in the given table and properties
router.put("/:id", (req, res) => {
    const postId = req.params.id;
    const {columnName, value} = req.body;    
    if(columnName=== undefined || value=== undefined){
        const error = new Error('Undefined' );
        error.status =  413;
        error.message = 'Undefined';
        res.send({error})
    }else{
        pool.query(sqlFunction.updateRowById('post',postId,columnName,value), function(err, results, fields) {
            if(err){
                console.log(`Error: ${err.sqlMessage}`);
                res.send(err);
            }
            res.send(`The row with id of ${postId} is successfully updated!`);    
        });
    }  
    
});
//delete row with given id in the given table 
router.delete("/:id", (req, res) => {
    const postId = req.params.id;  
    pool.query(sqlFunction.deleteRowById('post',postId), function(err, results, fields) {
    if(err){
        console.log(`Error: ${err.sqlMessage}`);
        res.send(err);
    }    
    res.send(`The row with id of ${postId} is successfully deleted!`);    
    });
});
//Here goes the router
module.exports = router;