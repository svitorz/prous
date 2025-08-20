import express from "express";
import router from "./src/router/users";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

app.use("/api/v1", router);

app.use(function (req, res) {
  res.setHeader("Content-Type", "text/plain");
  res.end(String(JSON.stringify(req.body, null, 2)));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
