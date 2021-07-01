var express = require('express');
const User = require("../models/User");
var router = express.Router();


router.get("/allusers", async (req, res) => {
    const users = await User.find();
    res.send({ data: users });
  });

  

  router.post("/", async (req, res) => {
    const data = await User.create(req);
    res.send(data);
  });

  router.get("/oneuser/:id", async (req, res) => {
    try {
      const users = await User.findById(req.params.id);
      res.send({ data: users });
    } catch {
      res.status(404).send({ error: "user not found!" });
    }
  });

  router.patch("/updateuser/:id", async (req, res) => {
    try {
      const users = await User.findById(req.params.id);
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