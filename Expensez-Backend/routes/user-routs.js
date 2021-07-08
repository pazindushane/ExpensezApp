var express = require('express');
const User = require("../models/User");
var router = express.Router();


router.get("/allusers", async (req, res) => {
    const users = await User.find();
    res.send({ data: users });
  });

  

  router.post("/saveuser", async (req, res) => {

    const users = new User(req.body);
    await users.save();
    res.send({ data: users });
    // console.log(data);
  });

  router.get("/oneuser/:uid", async (req, res) => {
    try {
      const users = await User.findOne(req.params);
      res.send({ data: users });
    } catch {
      res.status(404).send({ error: "user not found!" });
    }
  });

  router.put("/updateuser/:uid", async (req, res) => {
    try {
      const users = await User.findOne(req.params);
      Object.assign(users, req.body);
      users.save();
      res.send({ data: users });
    } catch {
      res.status(404).send({ error: "user not found!" });
    }
  });

  router.delete("/deleteuser/:id", async (req, res) => {
    try {
      const users = await User.findById(req.params.id);
      await users.remove();
      res.send({ data: true });
    } catch {
      res.status(404).send({ error: "user not found!" });
    }
  });

  
  

module.exports = router;