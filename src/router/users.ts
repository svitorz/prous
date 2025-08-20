import express from "express";
import { insertUser } from "../controllers/users";

const router = express.Router();

const userSchema = z.object({
  name: z.String(),
  email: z.email(),
  password: z.String(),
});

router.get("/users", function (req, res, next) {
  const parsed = userSchema.safeParse(req.body);
  if (!parsed.success)
    return res.status(400).json({ error: parsed.error.flatten() });

  res.json({ title: "Express" });
});

router.post("/users", function (req, res, next) {
  try {
    res.json("index", { title: "Express" });
  } catch (error) {}
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
