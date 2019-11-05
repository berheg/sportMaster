const express = require('express');
const router = express.Router();

//router for end point '/triangle'
router.get('/', (req, res) =>{
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    const c = Number(req.query.c);
    if(a== undefined||b==undefined||c==undefined)
        res.json('Undefined')

    res.json(triangleChecker(a,b,c));
})
//given three sides of the triangle, returns type of triangle
function triangleChecker(a,b,c) {
    //max maximum of the three initialized as a
    let max = a;
    //sum of smaller sides
    let sumOfSmallers = b + c;
    let msgResponse;
    if(max < b && b > c){
        max = b;
        sumOfSmallers = a + c;
    }
    else if(c > max){
        max = c;
        sumOfSmallers = a + b;
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