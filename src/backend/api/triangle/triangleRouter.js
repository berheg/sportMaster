const express = require('express');
//const app = express;
const router = express.Router();
//const bodyParser = require('body-parser');
//const bodyParserUrlencoded = bodyParser.urlencoded({ extended: true });

router.get('/', (req, res) =>{
    const {a,b,c} = req.body;
    res.send(triangleChecker(a,b,c));
})

function triangleChecker(a,b,c) {
    let max = a,
        sumOfSmallers = b+c;
    let msgResponse;
    if(max < b){
        max = b;
        sumOfSmallers = a+c;
    }
    else if(max < c){
        max = c;
        sumOfSmallers = a+b;
    }
    if(sumOfSmallers > max){
        if(a===b && b===c)
           msgResponse =  ('Equilateral');
        else if(a===b||b===c || a===c)
           msgResponse =  ('Isosceles');
        else
           msgResponse = ('Scalene');
    }
    else
       msgResponse = ('Incorrect');
    return msgResponse;
}
module.exports = router;