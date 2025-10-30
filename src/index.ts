import express, { Request, Response } from "express";

const app = express();
app.use(express.json());

app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({ status: "ok", uptime: process.uptime() });
});

app.get("/data", (req: Request, res: Response) => {
  res.json({
    message: "Hello from Express!",
    data: { id: 1, name: "Ethan", role: "Developer" },
  });
});

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Express server 🚀");
});

// ✅ Always listen (Pxxl needs a running port)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

export default app;
