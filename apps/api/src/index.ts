import express from "express";
import cors from "cors";
import { MOCK_DATA } from "@repo/contract";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json(MOCK_DATA);
});

app.listen(3000, () => {
  console.log("API running on port 3000");
});
