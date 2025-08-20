import express from "express";
import db from "./src/db/database";
const app = express();
const port = 3000;

async function bootstrap() {
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

bootstrap();
