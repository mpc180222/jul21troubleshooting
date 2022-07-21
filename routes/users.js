const express = require("express");
const { nextTick } = require("process");
const router = express.Router();
const db = require("../db");

router.get('/', async (req, res, next) => {
try{
const results = await db.query(`SELECT * FROM USERS`);
return res.json(results.rows);}
catch(e){
return next(e);
}
})

router.get('/search', async (req, res, next) =>{
    try{
        const type = req.query.type;
        db.query(`SELECT * FROM users WHERE type = $1`,[type] )
        return res.json(results.rows)
    }
catch(e){
    return next(e);
}})

module.exports = router;