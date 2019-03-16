import { initNiod } from "niod";

initNiod().then(server => {
  server.get("/", (req, res) => {
    res.sendFile("../ui/build/index.html");
  });
  server.listen(8080, () =>
    console.log("Niod_manager web server started on port 8080!")
  );
});
