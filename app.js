import express from 'express'
const app = express();

const port = 4000;
app.get("/", async (res) => {
  res.send("Great work on dockerizing this app!");
});

app.listen(port, () => {
  console.log("Server is running on port:" + port);
});