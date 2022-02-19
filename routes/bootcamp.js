const express = require('express');
const router = express.Router();

router.get("/" , (req,res,next)=> {
    res.json({ status : "SUCCESS" , message: "request processed successfully"});
    next();
})

router.get("/:id" , (req,res,next)=> {
    res.json({ status : "SUCCESS" , message: ` fetched data for id ${req.params.id}`});
    next();
})

router.post("/" , (req,res,next)=> {
    res.json({ status : "SUCCESS" , message: ` added data for id ${req.params.id}`});
    next();
})

router.put("/:id" , (req,res,next)=> {
    res.json({ status : "SUCCESS" , message: ` updated data for id ${req.params.id}`});
    next();
})

router.delete("/:id" , (req,res,next)=> {
    res.json({ status : "SUCCESS" , message: ` deleted data for id ${req.params.id}`});
    next();
})


module.exports = router ;