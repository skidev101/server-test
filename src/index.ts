import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Health check route
app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({ status: "ok", uptime: process.uptime() });
});

// Dummy data route
app.get("/data", (req: Request, res: Response) => {
  res.json({
    message: "Hello from Express!",
    data: { id: 1, name: "Ethan", role: "Developer" },
  });
});

// Root route
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Express server 🚀");
});

// Start server
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
