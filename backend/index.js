const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors");
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("server is running");
});
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
