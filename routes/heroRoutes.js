const express = require("express");
const router = express.Router();
const Hero = require("../models/Hero");

// GET hero image
router.get("/", async (req, res) => {
  const hero = await Hero.findOne();
  res.json(hero);
});

// ADD / UPDATE hero image
router.post("/", async (req, res) => {
  await Hero.deleteMany(); // purana hero hata do
  const hero = new Hero(req.body);
  const saved = await hero.save();
  res.json(saved);
});

module.exports = router;
