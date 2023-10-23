import express from "express";
import { api } from "./api";

const app = express();
app.use(api);

app.listen(6200, () => console.log("Server started at port 6200"));
