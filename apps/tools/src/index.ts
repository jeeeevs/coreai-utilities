import express from "express";

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 4000;

// Built-in middleware to parse JSON bodies
app.use(express.json());

// Log every request (timestamped) using shared util:
app.use((req, _res, next) => {
  next();
});


// A simple health‐check endpoint
app.get("/health", (_req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

app.listen(PORT, () => {
  console.log(`🚀 API listening on http://localhost:${PORT}`);
});
