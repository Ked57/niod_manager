import { initNiod } from "niod";
import express from "express";

const app = express();
const PORT = 8080;
console.log(__dirname);

app.use(express.static(__dirname + "./../ui/build"));

app.listen(PORT, () => console.log(`Express server running on port ${PORT}`));

initNiod().then(() => console.log("NIOD connected"));
