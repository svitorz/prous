import express from "express";
import router from "./src/router/users";
const app = express();
const port = 3000;

app.use("/api/v1", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
