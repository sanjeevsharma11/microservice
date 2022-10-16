import express from "express";
import axios from "axios";
import config from "config";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));

app.get("/api/v1/feed/:id", async (req, res) => {
  const { id } = req.params;

  const {data} = await axios.get(
    `https://expert.investwithtribe.com/api/tips/${id}`
  );
  res.send(
    data
  );
});

app.listen(config.get<number>("PORT"), () => {
  console.log(
    `Server is listening on port http://localhost:${config.get<number>("PORT")}`
  );
});
