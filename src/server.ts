import express from "express";
import { URLcontroller } from "./controllers/URLcontroller";
import { MongoConnection } from "./databases/MongoConnection";

const api = express();
const port = 9000;
const urlController = new URLcontroller();

const dataBase = new MongoConnection();
dataBase.connect().then(() => {
  api.listen(port, () =>
    console.log(`Escutando na porta ${port} http://localhost:${port}`)
  );
});

api.use(express.json());

api.post("/shorten", urlController.shorten);
api.get("/:hash", urlController.redirect)