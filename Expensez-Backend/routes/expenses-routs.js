var express = require('express');
const Expenses = require("../models/Expenses");
var router = express.Router();


router.get("/allexpenses", async (req, res) => {
    const expenses = await Expenses.find();
    res.send(expenses);
  });
  


router.get('/specexpenses/:uid',async (req,res)=>{
  const expenses = await Expenses.find(req.params);
  res.send(expenses);
  
})

router.get("/sumexpenses/:uid", async (req, res) => {
    const expenses = await Expenses.aggregate([
      { $match: { type: "Income" , uid: req.params.uid} },
      {
        "$group": {
          "_id": "$uid",
          "total": { $sum: "$value" }
        }
      }
    ]);
    // console.log(expenses);  
    res.send(expenses);
});

router.get("/incexpenses/:uid", async (req, res) => {
  const expenses = await Expenses.aggregate([
    { $match: { type: "Expence" , uid: req.params.uid} },
    {
      "$group": {
        "_id": "$uid",
        "total": { $sum: "$value" }
      }
    }
  ]);
  // console.log(expenses);  
  res.send(expenses);
});







  router.get("/abcd", async (req,res)=>{
    const expenses = await Expenses.find();
    res.send(expenses);
})
  

  router.post('/saveexpenses',async(req,res)=>{
    const data=await Expenses.create(req.body);
    res.send(data)
})

  router.get("/oneexpense/:uid", async (req, res) => {
    try {
      const expenses = await Expenses.findOne(req.params);
      res.send({ data: expenses });
    } catch {
      res.status(404).send({ error: "expenses not found!" });
    }
  });

  router.get("/countexpenses/:uid", async (req, res) => {
    try {
      const expenses = await Expenses.countDocuments(req.params);
      res.send( expenses );
    } catch {
      res.status(404).send({ error: "expenses not found!" });
    }
  });

  router.patch("/updateexpenses/:uid", async (req, res) => {
    try {
      const expenses = await Expenses.findOne(req.params);
      Object.assign(expenses, req.body);
      expenses.save();
      res.send( expenses );
    } catch {
      res.status(404).send({ error: "expenses not found!" });
    }
  });

  router.delete("/deleteexpenses/:id", async (req, res) => {
    try {
      const expenses = await User.findById(req.params.id);
      await expenses.remove();
      res.send({ data: true });
    } catch {
      res.status(404).send({ error: "expenses not found!" });
    }
  });

  
  

module.exports = router;