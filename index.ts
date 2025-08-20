import express from "express";
const app = express();
const port = 3000;

async function bootstrap() {
  app.get("/", (req, res) => {
    res.send({ body: "Hello, World!", status: "ok", code: 200 });
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

bootstrap();
