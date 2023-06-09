import express from "express";
import { URLcontroller } from "./controllers/URLcontroller";

const api = express();
const port = 9000;
const urlController = new URLcontroller();

api.use(express.json());

api.post("/shorten", urlController.shorten);

api.listen(port, () =>
  console.log(`Escutando na porta ${port} http://localhost:${port}`)
);