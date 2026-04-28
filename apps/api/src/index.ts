import express from "express";
import cors from "cors";
import { pinoHttp } from "pino-http";
import { logger } from "./logger.ts";

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
// Automatically log all HTTP requests and responses
app.use(pinoHttp({ logger }));

app.get("/api/health", (req, res) => {
  // Use the custom logger instead of console.log
  logger.info("Health check endpoint manually queried");

  res.json({
    status: "System Operational",
    timestamp: Date.now(),
  });
});

app.listen(port, () => {
  logger.info(`API running on port ${port}`);
});
