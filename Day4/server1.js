import express from "express";

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
   res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
   next();
});


// Streaming endpoint
app.get("/stream", (req, res) => {
  // Set headers to keep the connection open
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.setHeader("Transfer-Encoding", "chunked");

  let counter = 0;

  const interval = setInterval(() => {
    counter++;
    res.write(`Chunk ${counter}\n`);

    if (counter >= 5) {
      clearInterval(interval);
      res.write("Done!\n");
      res.end();
    }
  }, 5000); // send a chunk every second
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
