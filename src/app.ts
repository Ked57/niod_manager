import { initNiod } from "niod";
import express from "express";
import path from "path";

const app = express();
const PORT = 8080;

app.use(express.static(__dirname + "./../ui/build"));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "./../ui/build/index.html"));
});

app.listen(PORT, () => console.log(`Express server running on port ${PORT}`));

initNiod().then(() => console.log("NIOD connected"));
