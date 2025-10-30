import express, { Request, Response } from "express";

const app = express();

// Middlewares
app.use(express.json());

// Health check
app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({ status: "ok", uptime: process.uptime() });
});

// Dummy data
app.get("/data", (req: Request, res: Response) => {
  res.json({
    message: "Hello from Express!",
    data: { id: 1, name: "Ethan", role: "Developer" },
  });
});

// Root
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Express server 🚀");
});

// ✅ Export (important for Pxxl, Vercel, etc.)
export default app;

// ✅ Only start locally (so it doesn’t conflict with serverless platforms)
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
}
