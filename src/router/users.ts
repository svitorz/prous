import express from "express";
const router = express.Router();

router.get("/users", function (req, res, next) {
  res.json({ title: "Express" });
});

router.post("/users/", function (req, res, next) {
  res.json("index", { title: "Express" });
});

router.get("/users/:id", function (req, res, next) {
  res.json("index", { title: "Express" });
});

router.put("/users/:id", function (req, res, next) {
  res.json("index", { title: "Express" });
});

router.delete("/users/:id", function (req, res, next) {
  res.json("index", { title: "Express" });
});

export default router;
